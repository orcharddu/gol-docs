<!--@include: index.md-->
#

## Step 3

![Step 3](/assets/cw_diagrams-Parallel_3.png)

Now using a ticker, report the number of cells that are still alive *every 2 seconds*.

To report the count by sending the `AliveCellsCount` event. Also send the `TurnComplete` event after each complete iteration.

::: tip Concurrency with asynchronous programming
At this point, if your distributor is still a blocking function, you might create a dedicated thread to send event periodically.

However, you may realise using a dedicated thread for doing this easy task is a performance overhead.

You are ***NOT*** required to complete this step using asynchronous Rust, however, if you want to acheive concurrency this way, you can choose:

- Change your distributor to an async function, and use `tokio::spwan()` to create a tokio task for sending AliveCellCount events periodically.

- **Or** keep your distributor as a blocking function, use `tokio::runtime::Handle::current()` to get the handle of tokio runtime, then create an async task inside your blocking distributor, here is an example.

    We more recommend you doing this way as there will be no breaking change to your distributor.

    ***NOTICE:** To get tokio runtime, your distributor should be spawned by `tokio::task::spawn_blocking()` (the default invocation in skeleton) instead of `std::thread::spwan()`*

    ``` rust
    pub fn distributor(...) { // In a blocking function
        ...
        let handle = tokio::runtime::Handle::current();
        handle.spawn(async {
            async_task.await; // Do some asynchronous tasks here is ok // [!code ++]
        });

        async_task.await; // Error! `await` is only allowed inside `async` functions and blocks // [!code --]
        ...
    }
    ```

:::

::: tip Tip on creating tickers
To create a ticker for a periodic task is easy in async programming.

``` rust
// In an async function or block
let mut ticker = tokio::time::interval(Duration::from_secs(2)); // Create a ticker
loop {
    ticker.tick().await; // Tick every two seconds
    // Do your periodic tasks here
}
```

:::

To test your code, type the following in the terminal.

``` bash
cargo test --release --test count
```
