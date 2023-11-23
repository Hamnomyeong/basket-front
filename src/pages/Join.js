import './Join.css';
import React from 'react'

const Join= () => {
    

    return (
      <div className='Join-con'>
        <p className='Join-txt'>매일 신선함을 가져다 드릴게요!</p>
        <img className='Join-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'}/>

        <p className='Join-des'>성함</p>
        <input className='Join-Input' type='text' id='name' />

        <p className='Join-des'>상호명</p>
        <input className='Join-Input' type='text' id='name' />

        <p className='Join-des'>사업자등록번호</p>
        <input className='Join-Input' type='text' id='name' />

        <p className='Join-des'>이메일</p>
        <input className='Join-Input' type='text' id='name' />
      </div>
  );
}

export default Join;