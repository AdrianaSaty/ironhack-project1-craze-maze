# Craze Maze

This is the first project as part of my Web Development Bootcamp at IronHack Brazil.


![](https://media.giphy.com/media/MYyR0kmQrl9XgKlJvB/giphy.gif)

<iframe src="https://giphy.com/embed/RitJwWi3NceyWZ20GS" width="480" height="464" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/RitJwWi3NceyWZ20GS">via GIPHY</a></p>

## Acknowledgments

First of all I would like to say THANKS to my teachers, my colleagues and all IronHack staff that helped me achieve the goal of publishing my first iterative game. It was a real challenge for me and all support and fun times shared between us all made all the difference, and for that I'll be aways gratefull!!

## Getting Started

This game works at the browser and does not need any installation.

* Link to run the game in your browser => [HERE](https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html).

## Prerequisites

No hardware prerequisites needed. Just run the game and have fun!

## Game Algorithm
To create all the logic that created a different maze every time the player starts a new game, I used a Maze generation algorithm called ['Recursive backtracker'](https://en.wikipedia.org/wiki/Maze_generation_algorithm).
1- First I drew a grid full of walls, with the same numbers of columns and rows.
2- I used an array to control which cells was already visited. Starting the first cell (0,0) marking it as visited.
3- While the current cell has any unvisited neighbour cells, I choose randomly one of the unvisited neighbours and remove the wall between the current cell and the chosen cell. Then I 'go' to the chosen cell and it starts all this process again.



## Game and Coding Improvements

During the project I had to make some adaptations in order to present a functional game. Other implementations couldn't be implemented so far due to the short schedule. Although, there are many improvements that can be made in the came itself and in it's code.
1- Organize the code better and separate some functions in different js files
2- Fix some bugs like rendering, or prevent the player to move when the maze is been built 


## Contributing

Please feel free to fork/clone this repo to look deeper into this funny game and contribute with some of the above improvements if you like. I plan to work on it in the future as well :-)

## Author & Version Control

* **Adriana Saty Bertelli** - *Craze Maze Version 0.1* - **Published in Jun-29th of 2019**


