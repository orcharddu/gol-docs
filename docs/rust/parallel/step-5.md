<!--@include: index.md-->
#

## Step 5

Implement logic to visualise the state of the game using SDL.

You will need to utilise `CellFlipped` and `TurnComplete` events to achieve this.
Look at `src/sdl/loop.rs` for details.

<div class="info custom-block" style="padding: 10px; font-size: 0.85em;">
<em><strong>NOTE:</strong>
Don't forget to send <code>CellFlipped</code> events for every initially alive cells before processing any turns.
</em></div>

Also, implement the following control rules.
Note that the running SDL provides you with a channel containing the relevant keypresses.

- If `s` is pressed, save the current state of the board as a PGM image.
    <div class="info custom-block" style="padding: 10px; font-size: 0.85em;">
    <em><strong>NOTE:</strong>
    Never forget to send an <code>ImageOutputComplete</code> event after any PGM image is saved.
    </em></div>

- If `q` is pressed, stop executing Gol computation, save the current state of the board as a PGM image, then terminate the program.
    <div class="info custom-block" style="padding: 10px; font-size: 0.85em;">
    <em><strong>NOTE:</strong>
    Your distributor should behave as following after <code>q</code> is pressed:<br>
    Complete current turn and send a <code>TurnComplete</code> event ->
    Send a <code>FinalTurnComplete</code> event ->
    Save the final state as PGM image and send an <code>ImageOutputComplete</code> event ->
    Send a <code>StateChange</code> event and terminate
    </em></div>

- If `p` is pressed, pause the processing and send a `StateChange` event.\
  If `p` is pressed again, resume the processing and send a `StateChange` event.
    <div class="info custom-block" style="padding: 10px; font-size: 0.85em;">
    <em><strong>NOTE:</strong>
    It is <strong>necessary</strong> for <code>q</code> and <code>s</code> to work while the execution is paused.
    </em></div>

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
cargo test --release --test sdl
```

You can also run the program and test the visualisation and control rules manually by typing the following in the terminal.

``` bash
cargo run --release
```

Finally, type the following in the terminal to make sure all tests are passing.

``` bash
cargo test --release
```
