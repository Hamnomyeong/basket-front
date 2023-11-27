import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

const Navbar = () => {

  const [totalCartCount] = useState(0);

  // const onCartClick = (index) => {
  //   // 부모 컴포넌트에서 전달받은 함수를 호출하여 totalCartCount 업데이트
  //   setTotalCartCount((prevCount) => prevCount + 1);
  // };

  const navigate = useNavigate ();

    return (
      <>
    <div className='Nav-con'>

      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/Category')}}>
      <img src={process.env.PUBLIC_URL + '/img/category-w.svg'} />
      </button>
  
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/Search')}}>
      <img src={process.env.PUBLIC_URL + '/img/search-w.svg'} />
      </button>
     
     <div class="Nav-menu" >
      <button class="Nav-cart" type="button"  onClick={()=> {navigate('/Cart')}}>
      <img src={process.env.PUBLIC_URL + '/img/cart-w.svg'} />
      <p className="Nav-cart-cnt">{totalCartCount}</p>
      </button>
      </div>
   
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/My')}}>
      <img src={process.env.PUBLIC_URL + '/img/my-w.svg'} />
      </button>

  </div>
      
      </>
  );
}

export default Navbar;