import React from 'react'
import "./About.css";
import { Typography } from '@mui/material';
import image from "../../images/image.png"
function About() {
  return (
    <div className='about'>
    <div className="aboutContainer">
        <Typography>
            This is a samll Description about me....
        </Typography>
        </div>
    <div className="aboutContainer2">
            <div>
                <img src={image} alt="ME" className='aboutAvatar' />
                <Typography variant='h4' style={{
                    margin:"1vmax 0", color:"black"
                }}>
                    Kartik Sethi 
                </Typography>
                <Typography style={{
                    margin:"1vmax 0", color:"black"
                }}>
                    Full Stack Developer
                </Typography>
                <Typography>

                </Typography>
            </div>
            <div>
                <Typography style={{
                    textAlign:"right"
                }}>
            I am a curious and passionate Full Stack Developer with a solid foundation in various 
            programming languages and a knack for solving complex problems. 
            </Typography>
</div>
        </div></div>
  )
}

export default About