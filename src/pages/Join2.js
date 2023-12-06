import './Join2.css';
import React from 'react'

const Join2= () => {
    

    return (
      <div className='Join2-con'>
      <div className='Join2-wrap'>
        <div className='Join2-welcome' >
          <p className='Join2-txt'>거의 다 왔어요!</p>
        </div>

        <div className='Join2-Input-wrap'>
          <div className='Join2-biz'>
          <p className='Join2-des'>사업자등록번호</p>
          {/* <p className='Join-biz-des'> *숫자만 입력하세요 </p> */}
          </div>
          <input className='Join2-Input' type='text' id='name' placeholder='-없이 숫자만 입력해주세요'/>
          <div className='Join2-biz-submit'> 사업자등록증 첨부 </div>
        </div>


        <div className='Join2-Input-wrap'>
          <p className='Join2-des'>주소</p>
          <div className='Join2-adress-con'>
          <input className='Join2-Input' type='text' id='name' placeholder='우편번호'/>
          <button className='Join2-adress-submit' type='submit' id='name' > 검색 </button >
          </div>
          <input className='Join2-Input-address' type='text' id='name' placeholder='주소'/>
          <input className='Join2-Input-address' type='text' id='name' placeholder='상세 주소'/>
        </div>

        <div className='Join2-Input-wrap'>
          <p className='Join2-des'>배송장소</p>
          <input className='Join2-Input' type='text' id='name'/>
        </div>

        <div className='Join2-Input-wrap'>
          <div className='Join2-biz'>
          <p className='Join2-des'>출입 비밀번호</p>
          <p className='Join-pw-des'> * 익일 오전 11시 이전 배송됩니다. </p>
          </div>
          <input className='Join2-Input' type='text' id='name'/>
          
          <input className='Join2-pw-free' type='checkbox'></input>

        </div>

      </div>
      </div>
  );
}

export default Join2;