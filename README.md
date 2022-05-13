# Tic-tac-toe game

[Try it!](https://irina-tim.github.io/tic-tac-toe/index.html)

## Technologies and features

- React, react hooks: [useState](https://reactjs.org/docs/hooks-reference.html#usestate), [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- Flexbox
- Grid Layout
- CSS media queries
- Animation and Transform using CSS
- Flex BEM
- Git
- [Minimax algorithm](https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/)

## Gameplay

1. Choose X or O. Player X starts the game. You are playing vs AI.
2. Click on the cell you want to place symbol.
3. The result of the game is displayed at the end of the game.

![image](https://user-images.githubusercontent.com/94538863/167888075-84545d6f-8637-48fc-b200-ee89c39511b0.png)

![image](https://user-images.githubusercontent.com/94538863/167888213-c14615ad-a64e-45dd-ba94-29806cd0f76e.png)

## Functionality

- Game layout is adapted for tablets and mobiles.
- User is playing against AI, that cannot be defeated. Every round either ends in a draw, or the AI wins.
- 3 popups (restart popup (asks if user wants to restart the game), choice popup (allows the user to select X or O) and "game over" popup (notifies user that the game is over and asks if he wants to continue)).

## Instructions

Clone repository:

```console
git clone git@github.com:irina-tim/tic-tac-toe.git
```

cd to project directory and run:

```console
npm install
npm start
```

## Future plans

- Add difficulty levels (easy, medium, hard)
- PvP mode
