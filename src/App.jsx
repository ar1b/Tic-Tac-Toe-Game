import React, {useState} from 'react';
import Player from "./components/Player"
import Gameboard from "./components/Gameboard"

function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
  }
  return (
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initalName="Player 2" symbol="Y"  isActive={activePlayer === 'O'}/>
      </ol>
      <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/> 
    </div>
  )
}

export default App
