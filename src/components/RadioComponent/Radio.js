import './Radio.css';

const Radio = (props) => {
    return(
        <>
 
 <div class="container">
  
  <h2>Your favorite thing in the world:</h2>
  
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">Pizza</label>
    
    <div class="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Bacon</label>
    
    <div class="check"><div class="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector" />
    <label for="t-option">Cats</label>
    
    <div class="check"><div class="inside"></div></div>
  </li>
</ul>
</div>




        </>
    )
};
export default Radio