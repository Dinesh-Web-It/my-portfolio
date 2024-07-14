import React from 'react'
import logo from './logo'
import './Skills.css'


const Skills = () => {

  return (
    <div className='skill-container' >
        <div className="skills-heading">
            <h2>Skills</h2>
        </div>
        <div className="skills-logos">
            {logo.map((value,k)=>{
                return(
                    <div key={k}>
                        <div className="skill-icons" data-aos="zoom-in" >
                            <img src={value.Image} alt=""  />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills