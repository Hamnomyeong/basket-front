import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import './Home.css';
import Item from "../components/Item";
import React from 'react'
import Category from "../components/Category";


const Home = () => {


  const [search, setSearch] = useState('');

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

    return (
      <>
    <div>
     <Banner/>
     <Category />
  {/* <Category/> */}
     <div className="Home-search-con">
          <div className="Home-search-wrap">
            <input className="Home-search" type="text" name="search" placeholder="무엇을 찾아 드릴까요?" onChange={changeHandler} />
            <img className="Home-search-btn" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
          </div>
     </div>
     <Item/>



     <Navbar/>
    </div>
      
      </>
  );
}

export default Home;