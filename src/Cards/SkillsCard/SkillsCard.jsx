import React from 'react'
import './skillscard.css'

const SkillsCard = ({ title, desc, level, skillslogo }) => {
    return (
        <div className='skills-card-grid'>
            <div>
                <img src={skillslogo} />
            </div>
            <div className='skills-card'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span>{level}</span>
            </div>
        </div>
    )
}

export default SkillsCard
