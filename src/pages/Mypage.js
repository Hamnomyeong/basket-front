import { useNavigate } from 'react-router-dom';
import './Mypage.css';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import OftenItem from '../components/OftenItem';

const Mypage = () => {
    
    const navigate = useNavigate();
    const [itemImages, setItemImages] = useState([]);
    const [cartCounts, setCartCounts] = useState([]);

    useEffect(() => {
        const itemImages = ['item-01.jpg', 'item-02.jpg', 'item-03.jpg', 'item-04.jpg', 'item-05.jpg', 'item-06.jpg',
         'item-07.jpg', 'item-08.jpg', 'item-09.jpg', 'item-10.jpg', 'item-11.jpg', 'item-12.jpg'];
        setItemImages(itemImages);
        setCartCounts(Array(itemImages.length).fill(0));
      }, []);

    return (
        <div className='Mypage'>
      <div className='Mypage-con'>
        <img className='Mypage-setting' src={process.env.PUBLIC_URL + '/img/setting.svg'} 
        style={{ width: '24px', height: '24px'}}/>
        <div className='Mypage-NameWrap'>
            <p className="Mypage-BusinessName"> 일등농산 </p>
            <p className="Mypage-grade"> 👑 </p>
            {/* <img className='Mypage-grade' src={process.env.PUBLIC_URL + '/img/like.svg'} /> */}
         </div>

         <div className='Mypage-MyInfoWrap'>
            <p className="Mypage-Name"> 최순영 사장님 </p>
            <div className='Mypage-Info' onClick={()=> {navigate('/MyInfo')}}> 내 정보 </div>
         </div>
         </div>
  
        <div className='Mypage-Process-con'>
            <div className='Mypage-Process-wrap'>
                <img class="Mypage-Process-icon" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
                <div className='Mypage-Process-text'> 결제완료 </div>
            </div>

            <div className='Mypage-Process-wrap'>
                <img class="Mypage-Process-icon" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
                <div className='Mypage-Process-text'> 배송준비 </div>
            </div>

            <div className='Mypage-Process-wrap'>
                <img class="Mypage-Process-icon" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
                <div className='Mypage-Process-text'> 배송중 </div>
            </div>

            <div className='Mypage-Process-wrap'>
                <img class="Mypage-Process-icon" src={process.env.PUBLIC_URL + '/img/search.svg'}/>
                <div className='Mypage-Process-text'> 배송완료 </div>
            </div>   
        </div>
    <div className='Mypage-My-bg'>
        <div className='Mypage-My-con'>
        <div className='Mypage-My-wrap'>
                <img class="Mypage-My-icon" src={process.env.PUBLIC_URL + '/img/points.svg'}/>
                <div className='Mypage-My-title'> 예치금 </div>
                <div className='Mypage-My-content'> 10,000원 </div>
        </div>   

            <p className='Mypage-line'>|</p>

            <div className='Mypage-My-wrap'>
                <img class="Mypage-My-icon" src={process.env.PUBLIC_URL + '/img/points.svg'}/>
                <div className='Mypage-My-title'> 포인트 </div>
                <div className='Mypage-My-content'> 10,000원 </div>
        </div>   

        <p className='Mypage-line'>|</p>

        <div className='Mypage-My-wrap'>
            <img class="Mypage-My-icon" src={process.env.PUBLIC_URL + '/img/points.svg'}/>
            <div className='Mypage-My-title'> 쿠폰 </div>
            <div className='Mypage-My-content'> 2장 </div>
        </div>   

        <p className='Mypage-line'>|</p>

        <div className='Mypage-My-wrap'>
            <img className="Mypage-My-icon" src={process.env.PUBLIC_URL + '/img/qna.svg'}/>
            <div className='Mypage-My-title'> 내 문의 </div>
            <div className='Mypage-My-content'> 0건 </div>
        </div>   

        </div>
        </div>


        <div className='Mypage-menu-con'>

        <div className='Mypage-menu'>
            <p className='Mypage-menu-txt' onClick={()=>{navigate('/BoughtList')}}> 📋  주문 내역 </p>
        </div>

        <div className='Mypage-menu'>
            <p className='Mypage-menu-txt' onClick={()=>{navigate('/CancledList')}}> 📋  교환 / 반품 / 취소 내역 </p>
        </div>

        <div className='Mypage-menu'>
            <p className='Mypage-menu-txt' onClick={()=>{navigate('/DeliverySetting')}}> 📋  배송지 관리 </p>
        </div>

        <div className='Mypage-menu'>
            <p className='Mypage-menu-txt' onClick={()=>{navigate('/PaySetting')}}> 🪪  결제 수단 관리 </p>
        </div>

        <div className='Mypage-menu'>
            <p className='Mypage-menu-txt' onClick={()=>{navigate('/Cs')}}> 📞  고객 센터 </p>
        </div>

     
        </div>

        <div className='Mypage-ItemList-bg'>
            <div className='Mypage-ItemList-con'>
            <div className='Mypage-ItemList-wrap'>
                <p className="Mypage-ItemList-title"> 자주 구매하신 상품 </p>
                <p className="Mypage-ItemList-add"> 더보기 </p>
            </div>
            <OftenItem itemImages={itemImages}/>
                {/* <div className='Mypage-itemList'/> */}
            </div>
        </div>
        <Navbar />
       </div>



  );
}

export default Mypage;