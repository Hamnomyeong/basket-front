import './Footer.css';
import React from 'react'

const Footer = () =>{
  return(
    <div className="Footer-container">
      <div className='Footer-top'>
        {/* <img className='footer-logo' src={ssurveyLogo} alt=''/> */}
        <img className='Footer-logo' src={process.env.PUBLIC_URL + '/img/MainLogo-b.svg'} alt=''/>
        
      </div>
      
        
      <div className='Footer-info'>
        <div className='Footer-biz-wrap'>
        <span>(주)에이치씨 ┃ 사업자등록번호 : 123-45-12345  </span>
        {/* <span className='Footer-biz-btn'> ┃ 사업자정보 확인</span> */}
        </div>
        <span> 고객센터 : 1414-1414 ┃ 이메일 : hibasket@basket.com </span>
        <span> 주소 : 04410 서울특별시 용산구 대사관로34길 31 2F</span>

        <span className='Footer-CR-des'> 바스켓의 콘텐츠는 저작권법의 보호를 받는 바 무단 전재, 복제, 배포 등을 금합니다.</span>
        <span className='Footer-CR'>Copyright © HC Inc. All Rights Reserved.</span>
      </div>

        <div className='Footer-info-wrap'>
        <span className='Footer-info-link'> 회사소개</span>
        <span className='Footer-info-link'> 투자정보</span>
        <span className='Footer-info-link'> 인재채용</span>
        <span className='Footer-info-link'> 이용약관</span>
        <span className='Footer-info-link'> 개인정보처리방침</span>
        </div>
      
    </div>
  )
}

export default Footer;