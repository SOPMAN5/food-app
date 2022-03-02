import Coporate from "./Coporate";
import Family from "./Family";
import Religious from "./Religious";
const SelectedEvent = (props) => {
  const value = props.value;

    if(value === 'coporate'){
        console.log('coporate from selected')
          return <Coporate />
    
      }
      else if(value === 'family'){
          console.log('family from selected')
          return <Family />
      }
      else if(value === 'religious'){
        console.log('religious from selected')
        return <Religious />
    }else{
        return <Coporate />
    }

}

export default SelectedEvent;