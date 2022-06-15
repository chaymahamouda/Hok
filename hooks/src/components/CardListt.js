import React from 'react'
import Cardds from './Cardds'

function CardListt({movies,text,rate}) {
  return (
    <div  className="list">
       {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate).map((el)=> <Cardds movie={el}/>)}
    </div>
  )
}

export default CardListt