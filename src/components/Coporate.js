
import './Form.css'
const Coporate = () => {
    return(
        <>
        <div className='fields'>
        <div className="floating">
    <input id="input__name" className="floating__input" name="Company-name"  placeholder="Company name"  required/>
    <label for="input__name" className="floating__label" data-content="Company name*">
    <span className="hidden--visually">
      Company name</span></label>
  </div>
<div className='pair-field'>
<div>
<div className="floating">
    <input id="input__rep" type="text" className="floating__input" name="Rep name"  placeholder="Rep name" required />
    <label for="input__rep" className="floating__label" data-content="Rep name*"><span className="hidden--visually">Rep name</span></label>
  </div>
  <div className="floating">
    <input id="input__Eventdate" type="date" className="floating__input" name="Eventdate" placeholder="Eventdate" required />
    <label for="input__Eventdate" className="floating__label" data-content="Event date"><span className="hidden--visually">Password</span></label>
  </div>
</div>
<div>
<div className="floating">
    <input id="input__number" type="phone" className="floating__input" name="phoneNumber"  placeholder="Phone Number" required />
    <label for="input__number" className="floating__label" data-content="Phone number*"><span className="hidden--visually">Password</span></label>
  </div>
  <div className="floating">
    <input id="input__guestNo" type="text" className="floating__input" name="guestNo"  placeholder="Guest No" required />
    <label for="input__guestNo" className="floating__label" data-content="Number of expected Guests*"><span className="hidden--visually">Password</span></label>
  </div>
</div>
</div>
</div>
        
        </>
    )
}
export default Coporate;