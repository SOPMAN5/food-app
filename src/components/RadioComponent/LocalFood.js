import './Radio.css';

const LocalFood = (props) => {
    return(
        <>
 
 <div className="container">
  
  <h2>Local foods<span>(Kindly specify)</span></h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Akara</label>
    
    <div className="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Moimoi</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Ogi</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  <li style={{marginTop:'20px'}}>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Kindly indicate if you'd want the food packed in a takeaways</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default LocalFood;