import React from 'react'
import './project.css'
import Project from './project'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';



const Projects = () => {
    
    
    return (
        <div>
            <div className="Project-container">
                <div className="project-title">
                    <h2>My Projects</h2>
                </div>
                <div className='project-timeline'>
                    <VerticalTimeline  >
                        {Project.map((data, index) => {
                            return (
                                <VerticalTimelineElement key={index}
                                date={data.date}
                                contentStyle={{ background: 'none', color: 'white'}}
                                iconStyle={{background:"#18181B"}}
                                icon={
                                    <div>
                                        <img id='click' src={data.icon} alt="" width={"100%"}/>
                                    </div>
                                }
                                  >
                                    <div className="products" >
                                        <a href={data.url}>
                                        <img src={data.image} alt="Login website" />
                                        </a>
                                        <h4 >{data.title}</h4>
                                        <p>{data.description} </p>
                                    </div>
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Projects