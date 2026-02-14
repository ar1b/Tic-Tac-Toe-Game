const initalGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const Gameboard = ({onSelectSquare, turns}) => {

  let gameBoard = initalGameboard;

  for(const turn of turns) {
    const {square, player} = turn
    const {row, column} = square

    gameBoard[row][column] = player
  }

  return (
    <ol id='game-board'>
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
  )
}

export default Gameboard
