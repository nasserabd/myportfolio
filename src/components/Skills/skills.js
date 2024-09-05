import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import './skills.css';



 const Skills = ({slides}) => {
  return (
    <div className= "Container">
    <Swiper  
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={1}
    navigation = {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }}
    pagination={{clickable:true,
    el: '.swiper-pagination',
    type: 'bullets',}}
    onSlideChange={()=> console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
      
    >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
        <div className='button-Arrangement'>
            <div className='button-swiper'>
                <div className='swiper-button-prev'></div>
                <div className='swiper-pagination'></div>
                <div className='swiper-button-next'></div>
            </div>
        </div>
    </div>
  );
}



export default Skills