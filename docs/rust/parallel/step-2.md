<!--@include: index.md-->
#

## Step 2

![Step 2](/assets/cw_diagrams-Parallel_2.png)

Parallelise your Game of Life so that it uses worker threads to calculate the new state of the board.

You should implement a distributor that tasks different worker threads to operate on different parts of the image in parallel.

The number of worker **threads** you should create is specified in struct `Params`.

::: tip NOTE on `distributor` function
<!-- You are free to design your system as you see fit, however, we encourage you to primarily use channels. -->
You might be noticed how `distributor` functions is called.

``` rust
// in `src/gol/mod.rs`
tokio::task::spawn_blocking(move || distributor(params, distributor_channels)); // [!code highlight]
start_io(params, io_channels).await;
```

Currently, `distributor(...)` is blocking called, designed to make it easier for you to write a single-threaded implementation.

However, at this stage, you can decide whether the `distributor(...)` function should be async or blocking, depending on your implementation.

We still recommend that you continue to use blocking calls **for this step**, i.e., keep the invocation unchanged.

If you want to switch `distributor(...)` to an asynchronous function at this step, your code should look something like this:

``` rust
// in `src/gol/mod.rs`
    ...
    tokio::task::spawn_blocking(move || distributor(params, distributor_channels)); // [!code --]
    tokio::spawn(distributor(params, distributor_channels)); // [!code ++]
    start_io(params, io_channels).await;
}

// in `src/gol/distributor.rs`
pub fn distributor( // [!code --]
pub async fn distributor( // [!code ++]
    p: Params,
    mut c: DistributorChannels
) {
    ...
```

:::

::: warning Note on different options for designing parallelism

There are various options available for implementating Game of Life parallelism, such as:

- `tokio::spawn()` creates an async tokio task (coroutine) in an async environment
- `tokio::task::spawn_blocking()` creates a blocking tokio task in an async environment
- `std::thread::spawn()` creates a native OS thread
- `rayon::spawn()` uses Rayon, a data parallelism library

Please research their differences yourself.

However, we recommend using [Native OS threads](https://doc.rust-lang.org/std/thread/) or [Rayon](https://crates.io/crates/rayon) for Game of Life computation,
as they are more likely to yield better performance.

[Tokio](https://tokio.rs/) is designed for handling IO-bound tasks and may not be the best choice for the compute-bound tasks in this coursework.

:::

::: tip NOTE on native OS threads
Compared to `goroutines` or `tokio tasks`, creating and destroying native OS threads have greater performance overhead.

It is advisable to minimise the frequency of native threads creation and destruction in your implementation,
particularly by avoiding such operations in every iteration (turn).
:::

::: tip Note on MPMC channels
In other parts of skeleton, `tokio::sync::mpsc::channel` is widely used, where `MPSC` stands for **multi-producer single-consumer**, meaning the channel can have only ***one*** receiver.

In contrast, Golang channels can have multiple receivers and are referred to as `MPMC` (multi-producer multi-consumer).
If your parallel design requires ***multiple*** receivers, consider using the channel provided by [flume](https://crates.io/crates/flume),
which behaves similarly to a Golang channel but faster.

An MPMC channel could be very useful when you are implementing somethings like work-stealing.
:::

::: tip Note on using Rayon
If you decide to use Rayon for your parallel design instead of native OS threads,
avoid directly calling `rayon::spawn()`,
as Rayon will automatically control the number of threads this way.

Instead, use `rayon::ThreadPoolBuilder` to manually generate a fix-sized thread pool could be a better choice,
allowing you to specify how many threads Rayon should use.
:::

To test your code, type the following in the terminal.

``` bash
cargo test --release --test gol
```
