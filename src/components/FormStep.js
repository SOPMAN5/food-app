
import './FormStep.css';
import { Circle, Text } from "./Circle";
import SelectedEvent from './SelectedEvent';
import {Form} from 'react-bootstrap';
import CustomButton from './Button';
import FormSlider from './FormSlider';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import style from './Hero.module.css';


const FormStep = (props) => {
  
    const [data,setData] = useState({'occassionType':'','selectForm':'block','counter1':0,'steps':[{step:false},{step:false},{step:false},{step:false}]});

    const changeHandler = (selectedValue) =>{
     setData((prevState) => ({
        ...prevState,
      occassionType:selectedValue.target.value
     }));
     console.log(data.occassionType);
   
 };
 const nextSlide = () =>{
   
   document.querySelector('.swiper-button-next').click();
   data.counter1++;
  data.selectForm = 'none';
   let Steps = [...data.steps];
   if(data.counter1 == 1){
    Steps[1].step = true;
   
   }
   if(data.counter1 == 8){
    Steps[2].step = true;
   
   }
   if(data.counter1 == 9){
    Steps[3].step = true;
   
   }
   setData((prevState) => ({
    ...prevState,
    counter1:data.counter1,
   steps:data.steps,
   selectForm:data.selectForm
 }));
   
 }
 
 

    return(
        <>
      
        <div className="timeline">
   <Circle primary text="Contact info">1</Circle>   
  <div  className="dashed"></div>
  <Circle  primary={ data.steps[1].step?'primary':false} text="Choose">2</Circle>
  <div className="dashed"></div>
  <Circle primary={data.steps[2].step?'primary':false} text="Make payment"  >3</Circle>
  <div className="dashed"></div>
  <Circle primary={data.steps[3].step?'primary':false} text="Sucess" >4</Circle>
  
 </div>

 <div style={{marginLeft:'50px',maxWidth:'50%',marginTop:'60px'}}>
 <Form.Select size='lg'aria-label="Default select example" style={{display:data.selectForm}} onChange={changeHandler}>
  <option value="coporate">Coporate Event</option>
  <option value="family">Family Enagagement</option>
  <option value="religious">Religious Event</option>
</Form.Select>
 </div>
      <FormSlider occassionType={data.occassionType} /> 
      <div style={{marginLeft:'50px'}}>
      <Button className={style['hero-btn']} onClick={nextSlide}>Continue <i className="fa fa-arrow-right"></i></Button>
      </div>
      
        </>
    )
};

export default FormStep;