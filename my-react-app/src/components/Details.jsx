import React from 'react'
import { useLocation } from 'react-router-dom'
import Starwarssvg from './Starwarssvg'

const Details = () => {
  const location = useLocation()
  const { title, description, director, producer, characters } = location.state;

  
return (
    <>
   
     <Starwarssvg />
     <div className='card-details-wrapper'>
        <h2 className='details-header'>{title}</h2>
        <p>Director: {director}</p>
        <p>Producer: {producer}</p>
        <h4>Description</h4>
        <p>{description}</p>
        <ul><li>{characters}</li></ul>
     </div>
     
    
    </>
  )
}

export default Details