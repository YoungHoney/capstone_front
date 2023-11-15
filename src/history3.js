import React, { useState, useEffect } from 'react';
import axios from 'axios';


const History3 = () => {
   
    const [jsondata, setJsonData] = useState(null);
   
  



    useEffect(() => {
        axios.get('/api/ancestor/3')
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
          <div style={containerStyle}>
            {jsondata && jsondata.lifeSummary && (
     <span style={nameStyle}>{jsondata.lifeSummary}</span>
    )}
           
          </div>
        );
      }

    


export default History3