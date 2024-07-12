import React, { useEffect } from 'react';
import "./home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Typography } from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { MouseOutlined } from '@mui/icons-material';
import { sampleDates } from '../../constants/sampleData';

function Home() {
  useEffect(()=>{
    const textureLoader=new THREE.TextureLoader();

    const moonTexture=textureLoader.load(moonImage);
    const venusTexture=textureLoader.load(venusImage);
    const spacetexture=textureLoader.load(spaceImage);


    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

    const canvas=document.querySelector(".homeCanvas");
    const renderer=new THREE.WebGLRenderer({canvas:canvas});

    const moonGeometry=new THREE.SphereGeometry(2,64,64);
    const moonMaterial=new THREE.MeshStandardMaterial({map:moonTexture});
    const moon=new THREE.Mesh(moonGeometry,moonMaterial);

    const venusGeometry=new THREE.SphereGeometry(3,62,64);
    const venusMaterial=new THREE.MeshBasicMaterial({map:venusTexture});
    const venus=new THREE.Mesh(venusGeometry,venusMaterial);
   
    const pontLight=new THREE.PointLight(0xffffff,20);
    const pontLight2=new THREE.PointLight(0xffffff,15);

    pontLight.position.set(4,3,5);
    pontLight2.position.set(-8,-5,-5);
    
    
    // const lightHelper= new THREE.PointLightHelper(pontLight);


    
    scene.add(moon);
    scene.add(pontLight);
    scene.add(pontLight2);
    // scene.add(lightHelper);
    scene.add(venus);
    venus.position.set(8,5,5);

    scene.background=spacetexture;

    

    const constSpeed=0.01;
    window.addEventListener("mousemove",(e)=>{
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    
    camera.position.set(3,2,8);

    const animation=()=>{
      requestAnimationFrame(animation);
      moon.rotation.y+=0.001;
      venus.rotation.y+=0.001;
      renderer.setSize(window.innerWidth,window.innerHeight);
      renderer.render(scene,camera);
    };
    animation();
  
    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  },[]);
  return (
  <>
    <div className='home'>
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>K</p>
          <p>A</p>
          <p>R</p>
          <p>T</p>
          <p>I</p>
          <p>K</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
        </div>

      </div>
      <div className="homeScrollBtn">
        <MouseOutlined/>
      </div>

      
        <div className="homeContainer">
          <Typography variant='h3'>
            TIMELINE
            <TimeLine timelines={sampleDates}/>
          </Typography>
        </div>
        <div className="homeSkills">
          <Typography variant='h3'>
            SKILLS
            </Typography>
            <div className="homeCubeSkills">
              <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png" alt="Face1" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                <img src="" alt="Face2" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" alt="Face3" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png" alt="Face4" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png" alt="Face5" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" alt="Face6" />
              </div>
            </div>

            <div className="cubeShadow"></div>
            <div className="homeskillsBox" id="homeskillsBox">
               <SiCplusplus/>
               <SiHtml5 />
               <SiCss3 />
               <SiJavascript />
               <SiMongodb />
               <SiExpress />
               <SiReact/>
               <SiNodedotjs />
               <SiThreedotjs />
            </div>
        </div>
    </div>
  </>
  )
}

export default Home