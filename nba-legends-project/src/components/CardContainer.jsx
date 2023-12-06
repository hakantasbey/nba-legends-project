import PlayerCard from './PlayerCard'
import {data} from "../helper/data"
import { useState } from 'react'

const CardContainer = () => {
    const [value,setValue]=useState("")
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const filteredFunc = (player) =>{
        const inputValue= value.trim().replace(/[^a-z]/gi,"").toLowerCase()
        if(player.name.toLowerCase().includes(inputValue)){
            return player
        }
    }
  return (
    <div className='container'>
        <div className='input'>
            <input type="search" 
            onChange={handleChange}
            />
        </div>
        <div className='cards'>
        {data.filter(filteredFunc).map(({name,img,statistics})=>(
            <PlayerCard
            key={name}
            name={name}
            img={img}
            statistics={statistics}
            />
        ))}
        </div>
    </div>
  )
}

export default CardContainer