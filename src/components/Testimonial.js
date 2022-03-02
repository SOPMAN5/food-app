import style from './Testimonial.module.css';
import HeaderImage from '../public/Mask Group3.png';
import TestimonialIMage1 from '../public/Group 13.png'
import TestimonialIMage2 from '../public/Group 13(1).png';

const Testimonial = () =>{
    return(
        <>
        <div className={style['testimonial-background']}>
          <div className={style['header']}>
              <h2>Hear from our past clients</h2><span><img src={HeaderImage} height="50" alt="header" /></span>
          </div>
          <div className={style['body']}>
              <div className={style['testimonial']}>
                  <div>
                    <img src={TestimonialIMage1} alt="testmonial "/>
                  </div>
                  <div className={style['description']}>
                  <p>“Alhaja and her staff are well coordinated.<br/>
We won’t think it twice before patronising her again.”</p>
                 <p className={style['footer']}>Olufemi Ojo (Lead Designer, Babskenky & Co.)</p>
                  </div>
              </div>
              <div className={style['testimonial1']}>
               <div className={style['description']}>
                  <p>“Alhaja and her staff are well coordinated.<br/>
We won’t think it twice before patronising her again.”</p>
                 <p className={style['footer']}>Olufemi Ojo (Lead Designer, Babskenky & Co.)</p>
                  </div>
                  <div>
                    <img src={TestimonialIMage2} alt="testmonial "/>
                  </div>
                  
              </div>
              <div className={style['testimonial']}>
                  <div>
                    <img src={TestimonialIMage1} alt="testmonial "/>
                  </div>
                  <div className={style['description']}>
                  <p>“Alhaja and her staff are well coordinated.<br/>
We won’t think it twice before patronising her again.”</p>
                 <p className={style['footer']}>Olufemi Ojo (Lead Designer, Babskenky & Co.)</p>
                  </div>
              </div>

          </div>
        </div>
        </>
    )
};

export default Testimonial;