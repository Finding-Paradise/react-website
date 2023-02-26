import React from 'react'
import '../components/Card.css'

function Card(props) {
  return (
    <div className='card'>
        <h1><span className='grey-h1'>{props.num1}</span><span className='yellow-h1'>{props.num2}</span></h1>
        <p>{props.text}</p>
    </div>
  )
}

export default Card