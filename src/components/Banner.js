
import './Banner.css';
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Banner() {
  const navigate = useNavigate();
    
    return (
  <div className='Banner-Wrap'>
  <Carousel indicators={true} controls={true} wrap={true}  fade={true}
           carousel-control-prev-icon="true" 
           carousel-control-next-icon="true">   
    <Carousel.Item>
    <img className='BannerImage1' src={process.env.PUBLIC_URL + '/img/Banner01.svg'}
       onClick={()=> {navigate('/DeliveryInfo')}}/>
    </Carousel.Item>

    <Carousel.Item>
    <img className='BannerImage2' src={process.env.PUBLIC_URL + '/img/Banner02.svg'}
       onClick={()=> {navigate('/Event')}}/>
    </Carousel.Item>

    <Carousel.Item>
    <img className='BannerImage3' src={process.env.PUBLIC_URL + '/img/Banner03.svg'}
         onClick={()=> {navigate('/Promotion')}}/>
    </Carousel.Item>
  </Carousel>
  </div>
);
}

export default Banner;