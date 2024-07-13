import React from 'react'
import "./Projects.css"
import { Typography } from '@mui/material';
import {AiOutlineProject} from "react-icons/ai";
import { sampleProjects } from '../../constants/sampleData';
import { FaRegSmileWink } from 'react-icons/fa';
const ProjectCard=({
    url,
    projectImage,
    ProjectTitle,
    description,
    technologies 
})=>{
    return(
        <>
        <a href={url} className='projectCard' target='_blank' rel="noopener noreferrer">
            <div>
                <img src={projectImage} alt='Project'/>
                <Typography variant='h5'>
                    {ProjectTitle}
                </Typography>        
            </div>
            <div>
                <Typography variant='h4'>
                    About Project 
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Typography variant='h6'>
                    Tech Stack :{technologies}
                </Typography>
            </div>
        </a>
        
        </>
    )

}
function Projects() {
  return (
    <div className='projects'>
        <Typography variant='h3'>
            Projects <AiOutlineProject/>

        </Typography>
        <div className="projectsWrapper">
            { sampleProjects.map((project,index)=>(
                <ProjectCard 
                url={project.url}
                key={project._id}
                projectImage={project.projectImage}
                ProjectTitle={project.projectTitle}
                description={project.description}
                technologies ={project.technologies}
                
                />
            ))}
        </div>
        <Typography variant='h3' style={{
            font:"100 1.2rem 'Ubuntu Mono' "
        }}>
            All The Projects Shown Above Are Made By ME <FaRegSmileWink/>
        </Typography>
        </div>
  )
}

export default Projects