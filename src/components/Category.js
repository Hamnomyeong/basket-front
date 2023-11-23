
import './Category.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();

    return (
      <>
<div class="Category-con">
  <div class="Category-wrap"> 

    <div class="Category-element" onClick={()=>{navigate('/vegetable')}}>
      <img class="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 신선 야채 </p>
    </div>

    <div class="Category-element" onClick={()=>{navigate('/meat')}}>
      <img class="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 축산 </p>
    </div>

    <div class="Category-element" onClick={()=>{navigate('/seafood')}}>
      <img class="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 수산 </p>
    </div>

    <div class="Category-element" onClick={()=>{navigate('/fruits')}}>
      <img class="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 과일 </p>
    </div>

    <div class="Category-element" onClick={()=>{navigate('/industrial')}}>
      <img class="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 공산품 </p>
    </div>

    <div class="Category-element" onClick={()=>{navigate('/products')}}>
      <img class="Category-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='Category-txt'> 용품 </p>
    </div>



  </div>  
</div>

  
      </>
  );
}

export default Category;