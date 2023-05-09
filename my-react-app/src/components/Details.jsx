import React from 'react'
import { Link, useParams} from 'react-router-dom'

const Details = () => {
  const {title} = useParams()
  return (
    <>
    <div>
      <p>Details page</p>
      <Link to="/"><p>Back</p></Link>
      
    </div>
    </>
  )
}

export default Details