import  "./HeroBooking.css";
import ChefImage from '../public/chef.png';
import Logo from '../public/logo.png';
import FormStep from "./FormStep";
const HeroBooking = () => {
 return(
     <>
     <div className="row">
  <div className="column left" >
        <div className="left-content">
        <div className="logo"><img src={Logo} /></div>
        <div><img src={ChefImage} /></div>
    </div>
  </div>
  <div className="column right">
    <FormStep />
  </div>
</div>
     </>
 )
};
export default HeroBooking;