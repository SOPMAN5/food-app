import './Radio.css';

const Pastries = (props) => {
    return(
        <>
 
 <div className="container">
  
  <h2>Pastries<span>(Kindly specify)</span></h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Minced Pie</label>
    
    <div className="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Puff-puff</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Sausage roll</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Scotch egg</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default Pastries;