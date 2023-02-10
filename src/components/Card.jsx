import React from 'react'
import '../components/Card.css'

function Card({num1, num2, text}) {
  return (
    <div className='card'>
        <h1><span className='grey-h1'>{num1}</span><span className='yellow-h1'>{num2}</span></h1>
        <p>{text}</p>
    </div>
  )
}

export default Card