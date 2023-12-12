import { useNavigate } from 'react-router-dom';
import './Search.css';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const Search = () => {
    
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        const dummyData = [
        { id: 1, word: '모닝고추'},
        { id: 2, word: '양파'},
        { id: 3, word: '토마토'},
        { id: 4, word: '대파'},
        { id: 5, word: '뚜기'},
        { id: 6, word: '감자'},
        { id: 7, word: '꿈틀이'},

      ];
      setKeywords(dummyData);
    }, []);

    return (
        <>
        <Header />


          <div className="Search-con">
            <div className="Search-box">
            <input className="Search" type="text" name="search" placeholder="순영님, 무엇을 찾아 드릴까요?" />
            <img className="Search-btn" src={process.env.PUBLIC_URL + '/img/x.svg'}
            style={{ width: '16px', height: '16px', cursor: 'pointer', opacity: 0.5}}/>
          </div>
          </div>
        
        <div className='Search-Wrap'>
        <Carousel indicators={true} controls={true} wrap={true}  fade={true}
                 carousel-control-prev-icon="true" 
                 carousel-control-next-icon="true">   
          <Carousel.Item>
          <img className='Search-BannerImage1' src={process.env.PUBLIC_URL + '/img/Banner01.svg'}
             onClick={()=> {navigate('/DeliveryInfo')}}/>
          </Carousel.Item>
      
          <Carousel.Item>
          <img className='Search-BannerImage2' src={process.env.PUBLIC_URL + '/img/Banner02.svg'}
             onClick={()=> {navigate('/Event')}}/>
          </Carousel.Item>
      
          {/* <Carousel.Item>
          <img className='Search-BannerImage3' src={process.env.PUBLIC_URL + '/img/Banner03.svg'}
               onClick={()=> {navigate('/Promotion')}}/>
          </Carousel.Item> */}
        </Carousel>
        </div>

        <p className="Search-subtitle"> 지금 핫한 인기 검색어! </p>



        <div className='Search-keyword'>
    {keywords.map((word) => (
      <div className="Keyword-con" key={word.id}>
            <div className="Keyword"            
              onClick={() => {
                navigate('./Detail/');
              }}> {word.word} </div>     
          </div>
        ))}

    </div>


        {/* <div className="Search-lank">
            <div className="Search-tab1"> 인기 검색어 </div>
            <div className="Search-tab2"> 최근 검색어 </div>
        </div> */}


<Navbar />
        </>
  );
}

export default Search;