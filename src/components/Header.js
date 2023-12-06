import { Navigate, useNavigate } from 'react-router-dom';
import './Header.css';
import React from 'react'

const Header = ({title, leftChild, rightChild}) => {
  const navigate = useNavigate();

    return (
      <>
      <div className='Header-con'> 
        {/* <div className="header_left">{leftChild}</div>
        <div className="header_title">{title}</div>
        <div className="header_right">{rightChild}</div> */}
         <img className="Header-left" src={process.env.PUBLIC_URL + '/img/pre.svg'}
             onClick={()=> {Navigate('/Home')}}
             style={{ width: '24px', height: '24px', cursor: 'pointer' }}/> 

        <div className="header-title"> 페이지명 </div>

        <img className="Header-right" src={process.env.PUBLIC_URL + '/img/cart.svg'}
             onClick={()=> {Navigate('/Cart')}}
             style={{ width: '24px', height: '24px', cursor: 'pointer' }}/>
          
      </div>
  
      <hr className='Header-hr'></hr>

  
      </>
  );
}

export default Header;