import React, {useState} from 'react'

const Player = ({initalName, symbol, isActive}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initalName)

  const handleChange = (e) =>  {
    setPlayerName(e.target.value)
  }

  const handleEditClick = () => {
    setIsEditing((prevValue) => {
        return !prevValue
    })
  }
  
  return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
        {
            isEditing ?
                <input type='text' placeholder='Enter Name' value={playerName} onChange={handleChange}/> :
                <span className="player-name">{playerName}</span>
        }
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </span>
     </li>
  )
}

export default Player
