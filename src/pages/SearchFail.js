import { useNavigate } from 'react-router-dom';
import './SearchFail.css';
import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const SearchFail = () => {
    
    const navigate = useNavigate();

    return (
        <>
        <Header />

          <div className="SearchFail-con">
            <div className="SearchFail-box">
            <input className="SearchFail" type="text" name="search" placeholder="순영님, 무엇을 찾아 드릴까요?" />
            <img className="SearchFail-btn" src={process.env.PUBLIC_URL + '/img/x.svg'}
            style={{ width: '16px', height: '16px', cursor: 'pointer', opacity: 0.5}}/>
          </div>
          </div>
        
    
        <div className='SearchFail-contact'>
        <img className="SearchFail-img" src={process.env.PUBLIC_URL + '/img/x.svg'}
            style={{ width: '70px', height: '70px', opacity: 0.15}}/>
         <p className="SearchFail-result"> 검색하신 상품이 없습니다. </p>
         <p className="SearchFail-subtitle"> 찾으시는 상품이 없으신가요? </p>
         <div className='SeachFail-suggest' onClick={()=> {navigate('/Main')}}> 상품 건의하기 </div>
        </div>

        <Navbar />
        </>
  );
}

export default SearchFail;