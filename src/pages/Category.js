
import './Category.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Category = () => {
  const navigate = useNavigate();

    return (
      <>

<Header />

<div className="Category-body">
<div className="Category-con">
  <div className="Category-wrap"> 

    <div className="Category-element" onClick={()=>{navigate('/vegetable')}}>
      <img className="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 신선 야채 </p>
    </div>

    <div className="Category-element" onClick={()=>{navigate('/meat')}}>
      <img className="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 축산 </p>
    </div>

    <div className="Category-element" onClick={()=>{navigate('/seafood')}}>
      <img className="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 수산 </p>
    </div>

    <div className="Category-element" onClick={()=>{navigate('/fruits')}}>
      <img className="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 과일 </p>
    </div>

    <div className="Category-element" onClick={()=>{navigate('/industrial')}}>
      <img className="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 공산품 </p>
    </div>

    <div className="Category-element" onClick={()=>{navigate('/products')}}>
      <img className="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 용품 </p>
    </div>
    </div>  
</div>


<div className='Category-right-con'>
<div className='Category-menu-con'>


      <div className='Category-menu'>
       <p className='Category-menu-txt' onClick={()=>{navigate('/fruits')}}> 잎 채소 </p>
      </div>

      <div className='Category-menu'>
       <p className='Category-menu-txt' onClick={()=>{navigate('/fruits')}}> 뿌리 채소 </p>
      </div>

      <div className='Category-menu'>
       <p className='Category-menu-txt' onClick={()=>{navigate('/fruits')}}> 구황 작물 </p>
      </div>

      <div className='Category-menu'>
       <p className='Category-menu-txt' onClick={()=>{navigate('/fruits')}}> 버섯 </p>
      </div>

      <div className='Category-menu'>
       <p className='Category-menu-txt' onClick={()=>{navigate('/fruits')}}> 콩나물 / 숙주 </p>
      </div>

      <div className='Category-menu'>
       <p className='Category-menu-txt' onClick={()=>{navigate('/fruits')}}> 나물 / 건나물 </p>
      </div>

    </div>


    <div className='Category-sale-con'>
<div className='Category-sale-wrap'>
       <p className="Category-sale-title"> 자주 구매하신 상품 </p>
       <p className="Category-sale-add"> 더보기 </p>
       </div>

       <div className='Category-low-banner'></div>
    </div>
    </div>
    </div>



<Navbar />
      </>
  );
}

export default Category;