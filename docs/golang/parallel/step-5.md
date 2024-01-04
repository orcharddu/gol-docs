<!--@include: index.md-->
#

## Step 5

Implement logic to visualise the state of the game using SDL.
You will need to use `CellFlipped` and `TurnComplete` events to achieve this.
Look at `sdl/loop.go` for details.

Don't forget to send a CellFlipped event for all initially alive cells before processing any turns.

Also, implement the following control rules.
Note that the goroutine running SDL provides you with a channel containing the relevant keypresses.

- If `s` is pressed, generate a PGM file with the current state of the board.
- If `q` is pressed, generate a PGM file with the current state of the board and then terminate the program.\
  Your program should *not* continue to execute all turns set in `gol.Params.Turns`.
- If `p` is pressed, pause the processing and print the current turn that is being processed.\
  If `p` is pressed again resume the processing and print `"Continuing"`.\
  It is *not* necessary for `q` and `s` to work while the execution is paused.

\
To test the visualisation and control rules, type the following in the terminal.

``` bash
go run .
```
