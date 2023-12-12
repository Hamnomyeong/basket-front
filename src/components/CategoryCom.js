
import './CategoryCom.css';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCom = () => {
  const navigate = useNavigate();

    return (
      <>


<div className="CategoryCom-con">
  <div className="CategoryCom-wrap"> 

    <div className="CategoryCom-element" onClick={()=>{navigate('/vegetable')}}>
      <img className="CategoryCom-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='CategoryCom-txt'> 신선 야채 </p>
    </div>

    <div className="CategoryCom-element" onClick={()=>{navigate('/meat')}}>
      <img className="CategoryCom-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='CategoryCom-txt'> 축산 </p>
    </div>

    <div className="CategoryCom-element" onClick={()=>{navigate('/seafood')}}>
      <img className="CategoryCom-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='CategoryCom-txt'> 수산 </p>
    </div>

    <div className="CategoryCom-element" onClick={()=>{navigate('/fruits')}}>
      <img className="CategoryCom-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='CategoryCom-txt'> 과일 </p>
    </div>

    <div className="CategoryCom-element" onClick={()=>{navigate('/industrial')}}>
      <img className="CategoryCom-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='CategoryCom-txt'> 공산품 </p>
    </div>

    <div className="CategoryCom-element" onClick={()=>{navigate('/products')}}>
      <img className="CategoryCom-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='CategoryCom-txt'> 용품 </p>
    </div>

    <div className="CategoryCom-element" onClick={()=>{navigate('/products')}}>
      <img className="CategoryCom-img" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
      <p className='CategoryCom-txt'> 기타 </p>
    </div>

    </div>  
</div>


      </>
  );
}

export default CategoryCom;