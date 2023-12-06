import React, { useState } from 'react'

const PlayerCard = ({name,img,statistics}) => {
  const [displayStats, setDisplayStats] = useState(false)
  // const handleDisplay = () =>{
  //   setDisplayStats(!displayStats)
  // }
  return (
    <div>
    <div className='card-player' onClick={()=>setDisplayStats(!displayStats)}>
      {displayStats ? (
          <ul className='statistics-list'>
            {statistics.map((stats,index)=>(
              <li key={index}>🏀{stats}</li>
            ))}
          </ul>
      ) : (
          <div>
            <img className='player-img' src={img} alt={name} width="300px" />
          </div>
      )}
    </div>
    <div className='card-name'>
        <a target='_blank' href={`https://en.wikipedia.org/wiki/${name}`}>{name}</a>
      </div>
    </div>
  )
}

export default PlayerCard