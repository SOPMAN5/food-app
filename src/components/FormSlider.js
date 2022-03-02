import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './FormSlider.css';
import SelectedEvent from './SelectedEvent';
import CustomButton from './Button';
import Rice from '../components/RadioComponent/Rice';
import Sallow from './RadioComponent/Sallow';
import Toppings from './RadioComponent/Toppings';
import Pastries from './RadioComponent/Pastries';
import PepperSoup from './RadioComponent/PepperSoup';
import Soup from './RadioComponent/Soup';
import LocalFood from './RadioComponent/LocalFood';
import Wrapper from './Wrapper';
 const FormSlider=(props) => {
    const occassionType = props.occassionType;
    
    return (
        <Swiper style={{height:'450px'}}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          direction="vertical"
          slidesPerView={1}
          navigation
          allowTouchMove={false}
          spaceBetween={2}
          
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><SelectedEvent  value={occassionType} /></SwiperSlide>
          <SwiperSlide>
            
            <Wrapper>
          <Rice />
            </Wrapper></SwiperSlide>
          <SwiperSlide> <Toppings /></SwiperSlide>
          <SwiperSlide> <Sallow /></SwiperSlide>
          <SwiperSlide> <Soup /></SwiperSlide>
          <SwiperSlide> <PepperSoup /></SwiperSlide>
          <SwiperSlide> <Pastries /></SwiperSlide>
          <SwiperSlide> <LocalFood /></SwiperSlide> 
          <SwiperSlide> slide3</SwiperSlide>
          <SwiperSlide> slide4</SwiperSlide>
        </Swiper>
      );
};
export default FormSlider