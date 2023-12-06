import { useNavigate } from "react-router-dom"
import './OftenItem.css';
import { useEffect, useState } from "react";
import React from 'react'


const OftenItem = ({handleCartClick, itemImages }) => {

  const navigate = useNavigate();
  const [oftenItems, setOftenItems] = useState([]);

  
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
  setOftenItems(dummyData);
}, []);


  return (
    <div className="OftenItem-con" >
    {oftenItems.map((oftenItem, i) => (
      <div className="OftenItem" key={oftenItem.id}>
    <div className="OftenItem-wrap">
            <img className="OftenItemImg"
              src={process.env.PUBLIC_URL + `/img/${itemImages[i]}`}
              onClick={() => {
                navigate('./Detail/'+oftenItem);
              }}
              style={{ cursor: 'pointer' }}
            />
           <div className="OftenItem-Icon">
              {/* <div className="Item-save">
                <img className="Item-like" src={process.env.PUBLIC_URL + '/img/like-w.svg'} alt="Like" />
                </div> */}

             
                  <div className="OftenItem-cold">❄</div>
                <div className="OftenItem-btn-wrap">
                  {/* {newCartCounts[i] > 0 && ( */}
                    <div className="OftenItem-cart-cntCon">
                  <p className="OftenItem-cart-updown">-</p>  
                  <p className="OftenItem-cart-cnt">1</p>
                  <p className="OftenItem-cart-updown" onClick={() => handleCartClick(i)} >+</p>  
                </div>
                {/* )} */}
                </div>
               
              </div>
              </div>
              <div className="OftenItem-title-con">
           <p className="OftenItem-title"> 피카피카 1kg </p>
            <div className="OftenItem-Info">
              <p className="OftenItem-sale">{oftenItem.price}</p>
              <p className="OftenItem-salePrice">{oftenItem.salePrice}원</p>
            </div>
          </div>
          </div>
        ))}

    </div>
  );
};


 
export default OftenItem;

