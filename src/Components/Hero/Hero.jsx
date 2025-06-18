import React from 'react'
import './hero.css'
import logo from '../../assets/personal-image.png'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Hero = () => {
    return (
        <main className='hero-main'>
            <div className='hero'>
                <div className='hero-image'>
                    <img src={logo} alt="Personal Image" />
                </div>
                <div className='hero-tagline'>
                    <h1>
                        Agha Raza. Programmer.<br />Interfaces.
                    </h1>
                </div>
                <div className='hero-paragraph-1'>
                    <p>Hey, I'm Agha Raza. A UI-focused <span className='underline-span'>React developer</span> passionate about building fast, accessible, and pixel-perfect interfaces.
</p>
                </div>
                <div className='hero-paragraph-2'>
                    <p>Previously, I built a detailed React clone of a popular <span className='underline-span'>Pakistani store,</span> focusing on clean UI and real-world shopping flows.</p>
                </div>
                <div className='hero-social-icons'>
                    <span><FaFacebook /></span>
                    <span><FaGithub /></span>
                    <span><RiWhatsappFill /></span>
                </div>
            </div>
            </main>
    )
}

export default Hero
