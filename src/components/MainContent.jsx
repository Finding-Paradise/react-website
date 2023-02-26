import React from 'react'
import '../components/MainContent.css'
import Card from './Card'
import cardData from '../assets/cardData'

function MainContent() {

  const cardElements = cardData.map(card => {
    return <Card num1={card.num1} num2={card.num2} text={card.text}/>
  })
  return (
    <main className="main">
        <div className="container">
            <h2>Что вы получите после внедрения CRM</h2>
            <div className="card-block-wrapper">
              {cardElements}
            </div>
        </div>
    </main>
  )
}

export default MainContent