import { useNavigate } from "react-router-dom"
import './Item.css';
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from 'react'


const Item = () => {

  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  
  const dummyData = [
    { id: 1, salePrice: 9900, price: 11500 },
    { id: 2, salePrice: 9900, price: 11500 },
    { id: 3, salePrice: 9900, price: 11500 },
    { id: 4, salePrice: 9900, price: 11500 },
    { id: 5, salePrice: 9900, price: 11500 },
  ];

  useEffect(() => {
    // API 호출이나 데이터 로딩 로직을 여기에 추가할 수 있습니다.
    // 이 예시에서는 더미 데이터로 상태를 업데이트합니다.
    setItems(dummyData);
  }, []); // 빈 의존성 배열은 이 효과가 초기 렌더링 후 한 번만 실행되도록 보장합니다.



  return (
    <div className="Item-con" style={{ cursor: 'pointer', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
    {items.map((item) => (
      <div className="Item" key={item.id} style={{  width: 'calc(33.33% - 20px)', marginBottom: '50px'}}>
    
            <img className="ItemImg"
              src={process.env.PUBLIC_URL + '/img/pika.jpg'}
              onClick={() => {
                navigate('./Detail/'+item);
              }}
              style={{ cursor: 'pointer' }}
            />
           <div className="Item-Icon">
              <div className="Item-save">
                <img className="Item-like" src={process.env.PUBLIC_URL + '/img/like-w.svg'} alt="Like" />
                </div>

                <div className="Item-save">
                <img className="Item-cart" src={process.env.PUBLIC_URL + '/img/cart-w.svg'} alt="Cart"
                onClick={() => 
                  alert('장바구니에 상품을 담았습니다')} style={{ cursor: 'pointer' }} />
                </div>
              </div>
           <p className="Item-title"> 피카피카 1kg </p>
            <div className="Item-Info">
              <p className="Item-salePrice">{item.salePrice}원</p>
              <p className="Item-price">{item.price}원</p>
            </div>
          </div>
        ))}

    </div>
  );
};


 
export default Item;

