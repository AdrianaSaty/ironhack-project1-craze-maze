# Craze Maze

This is the first project I made to practice Javascript.


![](https://media.giphy.com/media/MYyR0kmQrl9XgKlJvB/giphy.gif)


## Acknowledgments

First of all, I would like to say THANKS to my teachers, and my colleagues who helped me achieve the goal of publishing my first iterative game. It was a real challenge for me and all the support and fun times shared between us all made all the difference, and for that, I'll always be grateful!!

## Getting Started

This game works in the browser and does not need any installation.

* Link to run the game in your browser => [HERE](https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html).

## Prerequisites

No hardware prerequisites are needed. Just run the game and have fun!

## Game Algorithm
To create all the logic that created a different maze every time the player starts a new game, I used a Maze generation algorithm called ['Recursive backtracker'](https://en.wikipedia.org/wiki/Maze_generation_algorithm).
1- First I drew a grid full of walls, with the same numbers of columns and rows.
2- I used an array to control which cells were already visited. Starting the first cell (0,0) marking it as visited.
3- While the current cell has any unvisited neighbor cells, I choose randomly one of the unvisited neighbors and remove the wall between the current cell and the chosen cell. Then I 'go' to the chosen cell and it starts this process again.



## Game and Coding Improvements

During the project, I had to make some adaptations in order to present a functional game. Other implementations haven't be implemented so far due to the short schedule. Although, many improvements can be made in the game itself and in its code.
1- Organize the code better and separate some functions in different js files
2- Fix some bugs like rendering, or prevent the player from moving when the maze is been built 


## Contributing

Please feel free to fork/clone this repo to look deeper into this funny game and contribute with some of the above improvements if you like. I plan to work on it in the future as well :-)

## Author & Version Control

* **Adriana Saty Bertelli** - *Craze Maze Version 0.1* - **Published in Jun-29th of 2019**


