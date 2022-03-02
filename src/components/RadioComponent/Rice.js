import './Radio.css';

const Rice = (props) => {
    return(
        <>
 
 <div className="container">
  
  <h2>Rice<span>(Kindly specify )</span></h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Fried Rice</label>
    
    <div className="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Jollof Rice</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Ofada</label>
    
    <div className="check"><div className="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default Rice;