import { navigate, useNavigate } from 'react-router-dom';
import './JoinDone.css';
import React from 'react'

const JoinDone= () => {
  const navigate = useNavigate ();

    return (
      <div className='JoinDone-con'>
      <div className='JoinDone-wrap'>
        <div className='JoinDone-welcome' >
          <img className='JoinDone-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'}/>
          <img className='JoinDone-graphic' src={process.env.PUBLIC_URL + '/img/BoxGraphic.svg'}/>
        </div>

          <p className='JoinDone-des'>회원가입이 완료되었어요!</p>

        <div className='JoinDone-login' onClick={()=> {navigate('/Login')}}> 로그인 </div>
      </div>
      </div>
  );
}

export default JoinDone;