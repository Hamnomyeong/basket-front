import { navigate, useNavigate } from 'react-router-dom';
import './JoinIng.css';
import React from 'react'

const JoinIng= () => {
  const navigate = useNavigate ();

    return (
      <div className='JoinIng-con'>
      <div className='JoinIng-wrap'>
        <div className='JoinIng-welcome' >
          <img className='JoinIng-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'}/>
          <img className='JoinIng-graphic' src={process.env.PUBLIC_URL + '/img/BoxGraphic.svg'}/>
        </div>

          <p className='JoinIng-des1'>회원가입 진행중입니다.</p>
          <p className='JoinIng-des'>승인 완료 후 이용하실 수 있습니다.</p>

        <div className='JoinIng-Home' onClick={()=> {navigate('/Home')}}> 확 인 </div>
      </div>
      </div>
  );
}

export default JoinIng;