import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Main.css';

const Main = () => {
    const navigate = useNavigate();
    const [inProp, setInProp] = useState(true);

    useEffect(() => {
     
        const timeoutId = setTimeout(() => {
            navigate('/Home');
        
            setInProp(false);
        }, 2000);

        // 언마운트 시 clearTimeout 호출, 메모리 누수 방지
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <CSSTransition in={inProp} timeout={2000} classNames="fade">
            <div className='Main-container'>
                <div className='Main-wrap'>
                    <p className='Main-txt'> 매일 담는 신선함 </p>
                    <img className='Main-logo' src={process.env.PUBLIC_URL + '/img/MainLogo.svg'} alt="Main Logo" />
                </div>
            </div>
        </CSSTransition>
    );
}

export default Main;
