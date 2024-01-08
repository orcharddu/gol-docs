# Task Overview

<div class="warning custom-block" style="padding: 15px; font-size: 0.9em;">
This is the guideline for the <strong>Golang</strong> version coursework;
for Rust guideline, click <a href="/rust/overview">here</a>.
</div>

## Introduction

The British mathematician John Horton Conway devised a cellular automaton named ‘The Game of Life’.

The game resides on a 2-valued 2D matrix, i.e. a binary image, where the cells can either be ‘alive’ (pixel value 255 - white) or ‘dead’ (pixel value 0 - black).

The game evolution is determined by its initial state and requires no further input.

Every cell interacts with its eight neighbour pixels: cells that are horizontally, vertically, or diagonally adjacent.

At each matrix update in time the following transitions may occur to create the next evolution of the domain:

::: tip NOTE on rules

- any live cell with fewer than two live neighbours dies
- any live cell with two or three live neighbours is unaffected
- any live cell with more than three live neighbours dies
- any dead cell with exactly three live neighbours becomes alive
:::

::: tip NOTE on image edge
Consider the image to be on a closed domain
(pixels on the top row are connected to pixels at the bottom row, pixels on the right are connected to pixels on the left and vice versa).
:::

A user can only interact with the Game of Life by creating an initial configuration and observing how it evolves.

Note that evolving such complex, deterministic systems is an important application of scientific computing, often making use of parallel architectures and concurrent programs running on large computing farms.

Your task is to design and implement programs which simulate the Game of Life on an image matrix.

## Skeleton Code

To help you along, you are given a simple skeleton project.

The skeleton includes tests and an SDL-based visualiser.

All parts of the skeleton are commented. All the code has been written in Go.

You will not be required to write any C code. If you have any questions about the skeleton please ask a TA for help.

::: warning
You **must not** modify any of the files ending in `_test.go`. We will be using these tests to judge the correctness of your implementation.
:::

The skeleton code uses SDL.
This is a basic graphics library which you already used in Imperative Programming unit.

To install the library follow the following instructions:

- **Linux Lab Machines** - SDL should already be installed and working.
- **Personal Ubuntu PCs** - `sudo apt install libsdl2-dev`
- **MacOS** - `brew install sdl2` or use the official [`.dmg` installer](https://www.libsdl.org/download-2.0.php).
- **Windows** - Use Ubuntu with WSL2. See our [guide](https://github.com/UoB-CSA/setup-guides/blob/master/go-install/windows.md).
- **Other** - Consult the [official documentation](https://wiki.libsdl.org/Installation).

## Submission

The coursework requires two independent implementations - parallel and distributed.

You will be required to submit **both** implementations (assuming both were attempted).

Every student is required to upload their full work to Blackboard.

There will be three separate submissions points on Blackboard - one for the report and two for each implementation.

::: tip NOTE on submission

- For the report, you must submit a single file called `report.pdf`.

- For the parallel implementation, you must submit a single zip file called `parallel.zip`. It must contain all the code required to compile and run the program.

- For the distributed implementation, you must submit a single zip file called `distributed.zip`. It must contain all the code required to compile and run the program.

- If you have multiple versions, only submit the ones you wish us to check for correctness (one zip for parallel and one for distributed). Other versions may be shared via OneDrive with Sion, Pui and Michael.
:::

::: warning

- Submitting different filenames or file formats (e.g. `.docx`, `.tex`, `.7z` or `.rar`) will result in a mark penalty.
- **Each team member** has to upload an **identical copy** of the team's work.
- Make sure you submit it early (not last minute!) to avoid upload problems.
:::

::: info
You should be using `Git` for version control, however, please don't include your `.git` directory in your submission.

You can generate a correct archive using the command `git archive -o [FILENAME].zip HEAD`.
:::
