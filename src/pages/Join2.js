import './Join2.css';
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useLocation } from 'react-router-dom';
import { auth } from '../firebase';


const Join2= () => {
    
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const formData = {
    name: queryParams.get('name'),
    companyName: queryParams.get('companyName'),
    phoneNumber: queryParams.get('phoneNumber'),
    email: queryParams.get('email'),
    password: queryParams.get('password'),
    confirmPassword: queryParams.get('confirmPassword'),
  };


  const [bizNumber, setBizNumber] = useState('');
  const [address, setAddress] = useState({
    postalCode: '',
    main: '',
    detail: '',
  });
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [accessPassword, setAccessPassword] = useState('');



  const onSignupSubmit = () => {
    // 이메일, 비밀번호는 formData에서 가져오기
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // 회원 가입 성공 시 추가 정보 처리
        const user = userCredential.user;
        // 여기에서 파이어베이스에 추가 정보 저장 로직 추가
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };


  
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
          <input className='Join2-Input' type='text' value={bizNumber}
          onChange={(e) => setBizNumber(e.target.value)}
          placeholder='-없이 숫자만 입력해주세요'/>
          <div className='Join2-biz-submit'> 사업자등록증 첨부 </div>
        </div>


        <div className='Join2-Input-wrap'>
          <p className='Join2-des'>주소</p>
          <div className='Join2-adress-con'>
            <input
              className='Join2-Input'
              type='text'
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
              placeholder='우편번호'
            />
            <button className='Join2-adress-submit' type='submit' id='name'>
              검색
            </button>
          </div>
          <input
            className='Join2-Input-address'
            type='text'
            value={address.main}
            onChange={(e) => setAddress({ ...address, main: e.target.value })}
            placeholder='주소'
          />
          <input
            className='Join2-Input-address'
            type='text'
            value={address.detail}
            onChange={(e) => setAddress({ ...address, detail: e.target.value })}
            placeholder='상세 주소'
          />
        </div>

        <div className='Join2-Input-wrap'>
          <p className='Join2-des'>배송장소</p>
          <input className='Join2-Input' type='text' value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}/>
        </div>

        <div className='Join2-Input-wrap'>
          <div className='Join2-biz'>
          <p className='Join2-des'>출입 비밀번호</p>
          <p className='Join-pw-des'> * 익일 오전 11시 이전 배송됩니다. </p>
          </div>
          <input className='Join2-Input' type='text' value={accessPassword}
          onChange={(e) => setAccessPassword(e.target.value)} />
          
          <input className='Join2-pw-free' type='checkbox'></input>

        </div>

        <div>
      <button onClick={onSignupSubmit}>
        제 출
      </button>
    </div>

      </div>
      </div>
  );
}

export default Join2;