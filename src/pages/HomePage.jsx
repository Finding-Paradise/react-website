import React from 'react'
import Header from '../components/Header'
import '../App.css'
import MainContent from '../components/MainContent'

function HomePage() {
  return (
    <div className="home-page">
        <Header />
        <MainContent />
    </div>
  )
}

export default HomePage