import { useNavigate } from 'react-router-dom';
import './Main.css';
import React from 'react'


const Main = () => {
    
    const navigate = useNavigate();

    return (
      <>
      <div className='Main-container' onClick={()=>{navigate('/Home')}}>
        <div className='Main-wrap'>
          <p className='Main-txt'> 매일 담는 신선함 </p>
          <img className='Main-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'}/>
        </div>
      </div>
      </>
  );
}

export default Main;