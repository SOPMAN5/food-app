import ReactSwipe from 'react-swipe';
import Hero from './Hero';
import HeroBooking from './HeroBooking';
const Carousel = () => {
    let reactSwipeEl;
   
    return (
      <div>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
           <div><Hero el={reactSwipeEl} /></div>
        <div><HeroBooking /></div>
        
        </ReactSwipe>
        <button style={{display:'none'}} id="next" onClick={() => reactSwipeEl.next()}>Next</button>
        <button style={{display:'none'}}  onClick={() => reactSwipeEl.prev()}>Previous</button>
      </div>
    );
  };
  export default Carousel;