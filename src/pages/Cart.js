import Header from '../components/Header';
import Navbar from '../components/Navbar';
import './Cart.css';
import React from 'react'

const Cart = () => {
    

    return (
      <>
  <Header />
<div className='Cart-con'>
    <div className='Cart-left-wrap'>
        <div className='Cart-left-checkbox-con'>
            <input className='Cart-checkbox' type='checkbox'></input>
            <div className='Cart-left-delivery'>슛배송</div>
        </div>
        <div className='Cart-left-ItemImg'></div>
    </div>
    <div className='Cart-right-wrap'>
        <p className='Cart-right-date'>*11/3일 도착 보장</p>
        <p className='Cart-right-title'>상품명 상품명 상품명</p>
        <div className='Cart-right-infoBox'>
            <p className='Cart-right-price'>91,500원</p>
            <p className='Cart-right-Ea'>1개</p>
        </div>

    </div>

</div>

<div className='Cart-div'></div>
<div className='Cart-ItemList-con'>
    <p className='Cart-subtitle'> 이 상품, 혹시 놓치지 않으셨나요? </p>
</div>


<div className='Cart-buy-con'>
    <div className='Cart-price'> 총 78,000원 </div>
    <div className='Cart-buyBtn'> 구매하기 </div>

</div>
      </>
  );
}

export default Cart;