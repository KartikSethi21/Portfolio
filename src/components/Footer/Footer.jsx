import React from 'react'
import "./footer.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <div className='footer'>
        <div>
        <Typography variant='h5'>
            About Me 
        </Typography>
        <Typography>
            Hey, my name is Kartik Sethi. I am A motivated and skilled Full Stack Developer 
            with a recent M.Sc. in Informatics from the University of Delhi.
             Demonstrates proficiency in data structures, algorithms,
              and a wide range of programming languages,with a strong grasp of their
               intricacies. Specialized expertise in the MERN stack. 
               Adept at both frontend and backend development, with a keen ability to 
               quickly learn and adapt to new technologies. Excels in problem-solving
             and is eager to contribute to innovative projects in a collaborative environment 
        </Typography>
        <Link to="/connect" className='footerContactBtn'>
            <Typography>
                Contact Us 
            </Typography>
        </Link>
        </div>
        <div>
            <Typography variant='h6'>
                GitHub
            </Typography>
            <a href='https://github.com/KartikSethi21/' target='_blank'>
            <BsGithub/>
            </a>
            <Typography variant='h6'>
                LinkedIn 
            </Typography>
            <a href='https://www.linkedin.com/in/kartik-sethi-4865311b2/' target='_blank'>
            <BsLinkedin/>
            </a>
        </div>
    </div>
  )
}

export default Footer