import React from 'react'
import './header.css'
import logo from '../../assets/personal-image.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-img">
        <img src={logo} alt="Agha Raza Profile Picture" />
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </nav>

      <div className="header-toggle-btn">
        <span>Ctrl</span> + <span>d</span>
      </div>
    </header>
  )
}

export default Header
