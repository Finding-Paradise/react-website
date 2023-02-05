import React from 'react'
import '../components/Header.css'

function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="header-info">
                <div className="left-block">
                    <h3>Сколько на самом деле стоят дополнительные сервисы?</h3>
                    <p>Скачать полный список самых популярных интеграций и возможностей CRM-систем c официальными прайсами</p>
                </div>
                <div className="right-block">
                    <button id="fill-form-btn">Заполните форму, чтобы получить список</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header