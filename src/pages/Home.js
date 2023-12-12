import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import './Home.css';
import Item from "../components/Item";
import React from 'react'
import CategoryCom from "../components/CategoryCom";


const Home = () => {
  const [totalCartCount, setTotalCartCount] = useState(0);
  const [search, setSearch] = useState('');
  const [cartCounts, setCartCounts] = useState([]);
  const [itemImages, setItemImages] = useState([]);
  const [newCartCounts, setNewCartCounts] = useState(Array(itemImages.length).fill(0));
  
  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const itemImages = ['item-01.jpg', 'item-02.jpg', 'item-03.jpg', 'item-04.jpg', 'item-05.jpg', 'item-06.jpg',
     'item-07.jpg', 'item-08.jpg', 'item-09.jpg', 'item-10.jpg', 'item-11.jpg', 'item-12.jpg'];
    setItemImages(itemImages);
    setCartCounts(Array(itemImages.length).fill(0));
  }, []);


  const onCartCountChange = (newCartCounts) => {
    if (Array.isArray(newCartCounts)) {
      const total = newCartCounts.reduce((acc, count) => acc + count, 0);
      setTotalCartCount(total);
    }
  };

  const handleCartClick = (index) => {
    console.log('handleCartClick called with index:', index);
    const newCartCounts = [...cartCounts];
    newCartCounts[index]++;
    setCartCounts(newCartCounts);
  
    // Call the onCartCountChange prop with the updated cartCounts
    // This will notify the Home component about the change
    onCartCountChange(newCartCounts);

    alert(`장바구니에 상품을 담았습니다. 수량: ${newCartCounts[index]}`);
  };


  // cartCounts 배열의 총 합계를 계산하는 함수
  const getTotalCartCount = () => {
    return cartCounts.reduce((total, count) => total + count, 0);
  };

  const handleCartCountChange = (newCartCounts) => {
    // newCartCounts is the updated cartCounts from the Item component
    const total = newCartCounts.reduce((acc, count) => acc + count, 0);
    setTotalCartCount(total);
  };


    return (
      <>
    <div className="Home-con">
     <Banner/>
     <CategoryCom />
     <div className="Home-search-con">
          <div className="Home-search-wrap">
            <input className="Home-search" type="text" name="search" placeholder="무엇을 찾아 드릴까요?" onChange={changeHandler} />
            <img className="Home-search-btn" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
          </div>
     </div>
     <p className="Home-subtitle">최순영님을 위한 할인 상품! 📣</p>
     <Item onCartCountChange={onCartCountChange} itemImages={itemImages} handleCartClick={handleCartClick} newCartCounts={newCartCounts}/>

     {/* <CSbtn />  */}

     <Navbar totalCartCount={totalCartCount}/>
    </div>
      
      </>
  );
}

export default Home;