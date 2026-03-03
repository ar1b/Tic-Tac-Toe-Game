import React, {useState} from 'react';
import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combinations';


//Initial gameboard, computeed value
const initalGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

//helper function to determine active player
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initalGameboard.map(array => [...array])];

  for(const turn of gameTurns) {
    const {square, player} = turn
    const {row, column} = square

    gameBoard[row][column] = player
  }

  let winner = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }

  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, columnIndex) => {
    setGameTurns((prevTurns) => {
      
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [{square: {row: rowIndex, column: columnIndex}, player: currentPlayer}, ...prevTurns]

      return updatedTurns
    })
  }

  const handleRestart = () => {
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initalName="Player 2" symbol="Y"  isActive={activePlayer === 'O'}/>
        </ol>
        {( winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} board={gameBoard}/> 
      </div>
      <Log turns={gameTurns}/>
    </main>

  )
}

export default App
