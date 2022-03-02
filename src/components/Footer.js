import style from './Footer.module.css';
import logo from '../public/logo.png'
const Footer = () => {
    return(
        <>
        <div className={style['footer-wrapper']}>
         <div className={style['footer-section']}>
             <div className={style['footer-column']}>
             <div className={style['footer-item']}>
              <img src={logo}  height="50px" width="60px" alt='logo'/>
              <p>Owodunni Str., Iwaya, Sabo Yaba, Lagos</p>
              <p>+234(0)9086736699</p>
             </div>
             <div className={style['footer-item']}>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
             </div>
             </div>
            <div className={style['footer-column']}>
            <div className={style['footer-item']}>
             <p>Monday - Friday (8am to 6pm)</p>
             <p>Saturday (6am to 7pm)</p>
             <p>Sunday (10am to 4pm)</p>
            </div>
             <div className={style['footer-item']}>
              <p>©2022 Adlat Catering • All Rights Reserved</p>
             </div>
            </div>
            
         </div>
         <div>
             <p>Powered by <span style={{color:'#E5A950'}}>Babskenky & Company Inc.</span></p>
         </div>
        </div>
        
        </>
    )
};

export default Footer;