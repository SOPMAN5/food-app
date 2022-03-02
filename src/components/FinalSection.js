import CustomButton from "./Button";
import style from './FinalSection.module.css';
import WomanImage from '../public/woman.png'
const FinalSection = () => {
    return(
        <>
         <div className={style['finalsection']}>
            <h2>Do you want an exceptional catering at your event?</h2>
            <div className={style['group-section']}>
             <div className={style['catering']}>
             <img src={WomanImage} height='500'  />    
            </div> 
            <div className={style['text-description']}>
               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
            <div>
                <CustomButton />   
            </div>
            </div>
            
            </div> 
         </div>
        </>
    )
};

export default FinalSection;