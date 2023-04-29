import React from 'react'
import './header.css'
import ME from '../../assets/me5.png'

const Header = () => {
  return (
        <header>
            <div className='container header__container'>
                <h4>Hi! I'm</h4>
                <h1>Helena Fu</h1>
                <h4 className='text-light'>Senior at Carlmont High School</h4>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <h5>Programmed with React.js</h5>
            </div>
        </header>
    )
}



export default Header