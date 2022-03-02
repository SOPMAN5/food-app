import logo from './logo.svg';
import './App.css';
import Carousel from './components/HeroSlider';
import Hero  from  './components/Hero';
import HeroImage from './public/hero.png';
import SocialProof from './components/SocialProof';
import ServiceCard from './components/ServiceCard';
import FirstServiceImG from './public/Mask Group.png'
import SecondServiceImG from './public/Mask Group1.png'
import ThirdServiceImG from './public/Mask Group2.png';
import { Container, Row, Col } from 'react-bootstrap';
import style from "../src/components/ServiceCard.module.css";
import CustomButton from './components/Button';
import Background from './components/Background';
import Testimonial from './components/Testimonial';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';
import FormSlider from './components/FormSlider';

import { Button } from 'react-bootstrap';

const customStyle = {
  color:"#ffff",
  background: '#362706'
} 
function App() {
 

  return (
    <div className="">
      <Carousel />
      <SocialProof />
     
  <Container className={style['serviceContanier']} fluid  >
  <div className={style['serviceheader']}>
    <h2>Let’s serve you.</h2>
    <p>We’ve got your back, if you allow us!</p>
  </div>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
    
    <ServiceCard src={SecondServiceImG} title="Coorporate Events" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
    
    <ServiceCard src={FirstServiceImG} title="Family Engagements" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." textStyle={customStyle} />
  
    <ServiceCard src={ThirdServiceImG} title="Religious Events" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
    
  </div>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <CustomButton />
  </div>
  
</Container>
<Background />
<Testimonial />
<FinalSection />  
<div><Footer /> </div>



    </div>
  );
}

export default App;
