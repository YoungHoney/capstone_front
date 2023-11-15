import estj from './img/estj.jpeg'

import React, { useState, useEffect } from 'react';
import axios from 'axios';







function Mbti2() {
   
  const [jsondata, setJsonData] = useState(null);
    

  useEffect(() => {
    axios.get('/api/ancestor/2')
      .then((response) => {
        const jsondata = response.data;
        setJsonData(jsondata);
      })
      .catch((error) => {
        console.error('JSON 데이터를 가져오는 동안 오류가 발생했습니다: ', error);
      });
  }, []);


  const containerStyle = {
    width: '1000px',
    height: 'auto',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px', 
  };

  const nameStyle1 = {

    fontSize: '70px',
    fontWeight: 'bold',
    color: '#333',
    margin: '20px 0',// 텍스트와 컨테이너 사이의 간격을 없애기 위해 margin을 0으로 설정
    padding: '40px',
  };


  const nameStyle = {

    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0', // 텍스트와 컨테이너 사이의 간격을 없애기 위해 margin을 0으로 설정
    padding: '20px',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
  };


   
  return (
    <div className="Mbti1">
     <br></br>
     <br></br>
     <div style={{ textAlign: 'center' }}>
      <img style={{ }} src={estj} width='300px' height='300px'/>
      </div>
      <br></br>
      <br></br>
      <div style={{ textAlign: 'center' }}>
      {jsondata && jsondata.mbti && (
<span style={nameStyle1}>{jsondata.mbti}</span>
)}
</div>
<br></br>
     <br></br>
<div style={containerStyle}>
{jsondata && jsondata.mbtiContent && (
<span style={nameStyle}>{jsondata.mbtiContent}</span>
)}
</div>
     
      
       
      
     
      
    </div>
      
    );
  }
  
  export default Mbti2;

