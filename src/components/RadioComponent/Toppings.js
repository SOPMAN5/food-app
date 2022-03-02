import './Radio.css';

const Toppings = (props) => {
    return(
        <>
 
 <div className="container">
  
  <h2>Toppings<span>(Kindly specify)</span></h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Beef</label>
    
    <div className="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Chicken</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Fish</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Goat meat</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Turkey</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default Toppings;