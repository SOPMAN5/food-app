import herostyle from './Hero.module.css';
import {Button} from 'react-bootstrap';
const CustomButton = (props)=>{
    let reactSwipeEl;
    return(
<>
<div className="hero-btn">
<Button className={herostyle['hero-btn']} style={{fontSize:"24px"}}onClick={props.onClick}>{props.text?props.text:'Order Now'}</Button>
</div>
</>
    )
}

export default CustomButton;
