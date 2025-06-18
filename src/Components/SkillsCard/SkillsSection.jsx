import React from 'react'
import './skillsection.css'
import SkillsCard from '../../Cards/SkillsCard/SkillsCard'
import skillsdata from '../../Data/SkillsData'

const SkillsSection = () => {
  return (
    <div>
      <div className="skills-section">
        <div className='skills-grid'>
          {skillsdata.map((data) => (
            <SkillsCard
              skillslogo={data.skillslogo}
              title={data.title}
              desc={data.desc}
              level={data.level}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsSection