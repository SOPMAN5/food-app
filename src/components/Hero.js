import herostyle from  './Hero.module.css';
import logo from '../public/logo.png';
import Groupimage from '../public/Group.png'
import foodImage from '../public/Group 54.png'
import CustomButton from './Button';
import { useState } from 'react';
import React, { useRef, useEffect } from "react";
const Hero = (props)=>{
    const graph = useRef(null);
    
   //const [sliderValue, setSliderValue] = useState('');

    useEffect(() => {
      //setSliderValue(props.el)
      const ciclegraph = graph.current;
      const circleElements = ciclegraph.childNodes;
  
      let angle = 360 - 90;
      let dangle = 360 / circleElements.length;
  
      for (let i = 0; i < circleElements.length; i++) {
        let circle = circleElements[i];
        angle += dangle;
        circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
          2}px) rotate(-${angle}deg)`;
      }
    }, []); 
    const clickHandler = (value) => {
     document.getElementById('next').click();
    }
 return(
     <>
      <div className={herostyle["hero"]} > 
<div className={herostyle["logo"]}><img src={logo} height="60"/></div>
<div className={herostyle["hero-text"]}>
 <span>
     <h2>Make your <span style={{color:"#A8763E"}}>occassion</span> the <span style={{color:"#A8763E"}}>talk of town!</span></h2>
 </span> 
 <p className={herostyle['sub-text']}>
     Employ the best hands to handle your catering with mouth-watering meal and exceptional service.
</p>  
</div>
<div className={herostyle['hero-image']}>
<div className={herostyle["ciclegraph"]} ref={graph}>
    
        <div  className={herostyle["circle1"]} />
        <div  id='two' className={herostyle["circle2"]} />
        <div  id='three' className={herostyle["circle3"]} />
        <div  id='four' className={herostyle["circle4"]} />
        
      </div>
      </div>
     <CustomButton onClick={clickHandler} />

</div>
     </>
 )  
};

export default Hero;