import { useNavigate } from "react-router-dom"
import './Item.css';
import { useEffect, useState } from "react";
import React from 'react'


const Item = ({handleCartClick,  itemImages, newCartCounts }) => {

  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    const dummyData = [
    { id: 1, salePrice: 9900, price: '10%' },
    { id: 2, salePrice: 9900, price: '10%'},
    { id: 3, salePrice: 9900, price: '10%' },
    { id: 4, salePrice: 9900, price: '10%'},
    { id: 5, salePrice: 9900, price: '10%' },
    { id: 5, salePrice: 9900, price: '10%' },
    { id: 6, salePrice: 9900, price: '10%'},
    { id: 7, salePrice: 9900, price: '10%' },
    { id: 8, salePrice: 9900, price: '10%' },
    { id: 9, salePrice: 9900, price: '10%' },
    { id: 10, salePrice: 9900, price: '10%' },
    { id: 11, salePrice: 9900, price: '10%'},
  ];
  setItems(dummyData);
}, []);


  // const [newCartCounts, setNewCartCounts] = useState(Array(itemImages.length).fill(0));

  // const handleCartClick = (index) => {
  //   const newCartCounts = [...cartCounts];
  //   newCartCounts[index]++;
  //   setCartCounts(newCartCounts);
  //         // 부모 컴포넌트로 전달하여 총 합계를 업데이트
  //   onCartCountChange(newCartCounts);
  //   alert(`장바구니에 상품을 담았습니다. 수량: ${newCartCounts[index]}`);
  // };
    

  return (
    <div className="Item-con" >
    {items.map((item, i) => (
      <div className="Item" key={item.id}>
    <div className="Item-wrap">
            <img className="ItemImg"
              src={process.env.PUBLIC_URL + `/img/${itemImages[i]}`}
              onClick={() => {
                navigate('./Detail/'+item);
              }}
              style={{ cursor: 'pointer' }}
            />
           <div className="Item-Icon">
              {/* <div className="Item-save">
                <img className="Item-like" src={process.env.PUBLIC_URL + '/img/like-w.svg'} alt="Like" />
                </div> */}

             
                <div className="Item-btn-wrap">
                <div className="Item-cold">❄</div>
                {/* {newCartCounts[i] > 0 && ( */}
                  <div className="Item-cart-cntCon">
                <p className="Item-cart-updown">-</p>  
                <p className="Item-cart-cnt">1</p>
                <p className="Item-cart-updown" onClick={() => handleCartClick(i)} >+</p>  
                </div>
                {/* )} */}
                </div>
               
              </div>
              </div>
           <p className="Item-title"> 피카피카 1kg </p>
            <div className="Item-Info">
              <p className="Item-sale">{item.price}</p>
              <p className="Item-salePrice">{item.salePrice}원</p>
            </div>
          </div>
        ))}

    </div>
  );
};


 
export default Item;

