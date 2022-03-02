import style from './SocialProof.module.css';
import SocialImage from '../public/Group 137.png'
const SocialProof = ()=>{

    return(
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
         <div className={style['social']}>
             <img className={style['image']} src={SocialImage} />
         </div>
       

        </div>
        </>
    )
};

export default SocialProof;