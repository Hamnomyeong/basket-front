import { navigate, useNavigate } from 'react-router-dom';
import './Join.css';
import React, { useState } from 'react'

const Join= () => {
  const navigate = useNavigate ();
  const [email, setEmail] = useState('');

  const handleNextClick = () => {

    navigate(`/Join2?email=${encodeURIComponent(email)}`);
  };


    return (
      <div className='Join-con'>
      <div className='Join-wrap'>
        <div className='Join-welcome' >
          <p className='Join-txt'>매일 신선함을 가져다 드릴게요!</p>
          <img className='Join-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'}/>
        </div>

        <div className='Join-Input-wrap'>
          <p className='Join-des'>성함</p>
          <input className='Join-Input' type='text' id='name' />
        </div>


        <div className='Join-Input-wrap'>
          <p className='Join-des'>상호명</p>
          <input className='Join-Input' type='text' id='name' />
        </div>

        <div className='Join-Input-wrap'>
          <p className='Join-des'>휴대폰 번호</p>
          <div className='Join-mail-con'>
          <input className='Join-Input' type='text' id='name'  placeholder='-없이 숫자만 입력해주세요'/>
          <button className='Join-mail-submit' type='submit' id='name' > 인증 </button >
          </div>
        </div>


        <div className='Join-Input-wrap'>
          <p className='Join-des'>이메일</p>
          <div className='Join-mail-con'>
          <input className='Join-Input' type='submit' id='email' value={email}  onClick={handleNextClick}/>
          <button className='Join-mail-submit' type='submit' id='name' > 인증 </button >
          </div>
        </div>

        <div className='Join-Input-wrap'>
          <p className='Join-des'>비밀번호</p>
          <input className='Join-Input' type='text' id='name'/>
        </div>

        <div className='Join-Input-wrap'>
          <p className='Join-des'>비밀번호 확인</p>
          <input className='Join-Input' type='text' id='name' />
        </div>

        <div className='Join-next' onClick={()=> {navigate('/Join2')}} > 다 음 </div>
      </div>
      </div>
  );
}

export default Join;