import PlayerCard from './PlayerCard'
import {data} from "../helper/data"
import { useState } from 'react'

const CardContainer = () => {
    const [value,setValue]=useState("")
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
  return (
    <div>
        <div>
            <input type="search" 
            onChange={handleChange}
            />
        </div>
        {data.map(({name,img,istatistics})=>(
            <PlayerCard
            img={img}
            key={name}
            istatistics={istatistics}
            />
        ))}
    </div>
  )
}

export default CardContainer