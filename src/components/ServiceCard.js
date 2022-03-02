import style from './ServiceCard.module.css'
const ServiceCard = (props)=>{
  return(
      <>
       <div className={style['service'] } style={props.textStyle?{height:'500px',background:'#362706',marginBottom:'60px'}:{height:'460px'}}>
         <div><img src={props.src}  alt="Service image"/></div>
         <div className={style['title']}>
           <h4  style={props.textStyle}>{props.title}</h4>
         </div>
         <div ><p className={style['description']} style={props.textStyle}>{props.description}</p></div>
       </div>
      </>
  )
};

export default ServiceCard;