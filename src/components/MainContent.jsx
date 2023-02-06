import React from 'react'
import '../components/MainContent.css'
import Card from './Card'

function MainContent() {
  return (
    <main className="main">
        <div className="container">
            <h2>Что вы получите после внедрения CRM</h2>
            <div className="card-block-wrapper">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </main>
  )
}

export default MainContent