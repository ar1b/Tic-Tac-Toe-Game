import React from 'react'

const Log = ({turns}) => {
  return (
    <ol id='log'>
      {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>
        {turn.player} selected placed their move at ROW: {turn.square.row} & COLUMN: {turn.square.column}
      </li>)}
    </ol>
  )
}

export default Log
