import React, {useState} from 'react';
import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from './components/Log';

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, columnIndex) => {
    //setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [{square: {row: rowIndex, column: columnIndex}, player: currentPlayer}, ...prevTurns]

      return updatedTurns
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initalName="Player 2" symbol="Y"  isActive={activePlayer === 'O'}/>
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurns}/> 
      </div>
      <Log turns={gameTurns}/>
    </main>

  )
}

export default App
