import { navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import React from 'react'

const Login= () => {
    
  const navigate = useNavigate();


    return (
      <div className='Login-con'>

        <img className='Login-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'}/>

        <div className='Login'>
            <input className='Login-id' type='text' id='phone' placeholder='전화번호를 입력하세요'/>
            <input className='Login-pw' type='text' id='email' placeholder='비밀번호를 입력하세요'/>
            <button className='Login-submit' type='submit' id='submit' > 로그인 </button>
            <button className='Login-join' type='submit' id='join' onClick={()=>{navigate ('/Join')}} > 간편 회원가입 </button>
        </div>

        <div className='Login-Find'>
            <div className='Login-findId'>아이디 찾기</div>
            <div>|</div>
            <div className='Login-findPw'>비밀번호 찾기</div>
        </div>
      </div>
  );
}

export default Login;