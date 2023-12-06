import { navigate, useNavigate } from 'react-router-dom';
import './JoinSubmit.css';
import React from 'react'

const JoinSubmit= () => {
  const navigate = useNavigate ();

    return (
      <div className='JoinSubmit-con'>
      <div className='JoinSubmit-wrap'>
        <div className='JoinSubmit-welcome' >
          <img className='JoinSubmit-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'}/>
          <img className='JoinSubmit-graphic' src={process.env.PUBLIC_URL + '/img/BoxGraphic.svg'}/>
        </div>

          <p className='JoinSubmit-des'>회원가입 요청이 완료되었습니다!</p>
          <p className='JoinSubmit-des'>승인 완료 후 이용하실 수 있습니다.</p>

          <div className='JoinSubmit-Home' onClick={()=> {navigate('/Home')}}> 확 인 </div>

      </div>
      </div>
  );
}

export default JoinSubmit;