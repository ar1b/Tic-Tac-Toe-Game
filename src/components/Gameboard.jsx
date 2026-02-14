import React, {useState} from 'react'

const initalGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const Gameboard = ({onSelectSquare, activePlayerSymbol}) => {

  const [gameBoard, setGameBoard] = useState(initalGameboard)

  const handleSelectSquare = (rowIndex, columnIndex ) => {
    setGameBoard(prevGameboard => {
       const updatedBoard = [...prevGameboard.map(innerArray => [...innerArray])]
       updatedBoard[rowIndex][columnIndex] = activePlayerSymbol
       onSelectSquare()
       return updatedBoard
    })
  }
  return (
    <ol id='game-board'>
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
  )
}

export default Gameboard
