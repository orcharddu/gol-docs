<!--@include: index.md-->
#

## Step 5

Implement logic to visualise the state of the game using SDL.
You will need to use `CellFlipped` and `TurnComplete` events to achieve this.
Look at `sdl/loop.go` for details.

Don't forget to send a CellFlipped event for all initially alive cells before processing any turns.

Also, implement the following control rules.
Note that the running SDL provides you with a channel containing the relevant keypresses.

- If `s` is pressed, generate a PGM file with the current state of the board.
- If `q` is pressed, generate a PGM file with the current state of the board and then terminate the program.\
  Your program should *not* continue to execute all turns set in `gol.Params.Turns`.
- If `p` is pressed, pause the processing and print the current turn that is being processed.\
  If `p` is pressed again resume the processing and print `"Continuing"`.\
  **It is necessary for `q` and `s` to work while the execution is paused.**

::: tip NOTE on selecting channels
You might need something similar to golang's `select` statement, the `select!` macro.

``` rust
use tokio::select!;
...
loop {
    select! { // Blocking until one of its branches is ready
        event = channel_a.recv() => {
            ... // May go to this branch if channel_a received event first
            match event {
                ... // Then do something with event
            }
        },
        value = channel_b.recv() => {
            ... // May go to this branch if channel_b received value first
        },
        result = async_task_that_can_be_awaited => {
            ... // May go to this branch if this async task finished first
        }
    }
}
...

```

:::

To test the visualisation and control rules, type the following in the terminal.

``` bash
cargo test --release --test sdl_test
```

You can also run the program and test the visualisation and control rules manually by typing the following in the terminal.

``` bash
cargo run --release
```

Finally, type the following in the terminal to make sure all tests are passing.

``` bash
cargo test --release
```
