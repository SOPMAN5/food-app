import './Radio.css';

const Sallow = (props) => {
    return(
        <>
 
 <div className="container">
  
  <h2>Swallow<span>(Kindly specify)</span></h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Amala</label>
    
    <div className="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Poundo Yam</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Semo</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default Sallow;