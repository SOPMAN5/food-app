import './Radio.css';

const Soup = (props) => {
    return(
        <>
 
 <div className="container">
  
  <h2>Pepper Soup<span>(Kindly specify your soup preference)</span></h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Efo riro</label>
    
    <div className="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Egusi soup</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Ewendu</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Ogbonno soup</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Ishapa soup</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default Soup;