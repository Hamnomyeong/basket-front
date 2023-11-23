import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const Navbar = () => {

  const navigate = useNavigate ();

    return (
      <>
    <div className='Nav-con'>
  
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/Home')}}>
      <img src={process.env.PUBLIC_URL + '/img/home-w.svg'} />
      </button>

      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/Category')}}>
      <img src={process.env.PUBLIC_URL + '/img/category-w.svg'} />
      </button>
     
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/Like')}}>
      <img src={process.env.PUBLIC_URL + '/img/like-w.svg'} />
      </button>
   
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/My')}}>
      <img src={process.env.PUBLIC_URL + '/img/my-w.svg'} />
      </button>

  </div>
      
      </>
  );
}

export default Navbar;