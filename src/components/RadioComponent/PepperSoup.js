import './Radio.css';

const PepperSoup = (props) => {
    return(
        <>
 
 <div className="container">
  
  <h2>Pepper Soup<span>(Kindly specify your preferred)</span></h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Asssorted meat pepper soup</label>
    
    <div className="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Catfish pepper soup</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Chicken pepper soup</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Goat pepper soup</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default PepperSoup;