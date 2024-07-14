import React from 'react'
import './resume.css'

const Resume = () => {
    return (

        <div className='resume'>
            <div className='resume-container'>
                <h2>EDUCATION</h2>
                <div className="education">
                    <div className="collage">
                        <h2>BCA, Arts and Science</h2>
                        <p>Dhandraj Bain Jain College,Chennai.</p>
                        <p>2021-2024</p>
                        <h3>CGPA 7.3/10</h3>
                        <p>"As an undergraduate student, I have a good understanding of web development technologies and Python such as HTML, CSS, JavaScript and Python programming language. Additionally,
                            I'm learned about in frontEnd technologies such as React JS , Bootstrap and learning about SQL.
                            I also have skills in Python and Data structures and Algorithms."</p>
                    </div>
                    <div className="school">
                        <h2>12 <sup>th</sup>, Computer Science</h2>
                        <p>SVM Hr Sec School, Vandavasi.</p>
                        <p>2019-2021</p>
                        <h3>Persentage 67%</h3>
                        <p>"As a graduated in the Computer Science group from 12th standard, I possess a solid foundation in computer Science. I have demonstrated strong analytical and problem-solving skills. Possessing effective communication skills and the ability to work collaboratively in a team environment."</p>
                    </div>
                </div>
            </div>
            <div className="extra">
                <div className="resume-container">
                    <div className="certify-container">
                        <h2>CERTIFICATIONs</h2>
                        <p>1.Great-Learning - Html</p>
                        <p>2.Great-Learning - Cascading Style Sheet</p>
                        <p>3.Great-Learning - React Js</p>
                    </div>
                </div>
                <div className="resume-container">
                    <h2>ACHIVEMENTS</h2>
                    <p>1.Technical Quiz - Jain It Vista</p>
                </div>
            </div>
        </div>
    )
}

export default Resume