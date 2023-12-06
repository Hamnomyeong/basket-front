import './CSbtn.css';
import React from 'react'

const CSbtn = () => {
    

        const handleCSClick = () => {
           
            alert('카카오톡으로 연결?');
        };

    return (
      <div className='CSbtn-con'>
  

  <div className="CSbtn" onClick={handleCSClick}>
          <img class="CSbtn-icon" src={process.env.PUBLIC_URL + '/img/qna-w.svg'}/>
        
        </div>
  
      </div>
  );
}

export default CSbtn;