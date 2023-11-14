import 이재명 from './img/이재명.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function TodayCharacter1() {

  const [jsondata, setJsonData] = useState(null);
   

  useEffect(() => {
      axios.get('/ancestor/1')
        .then((response) => {
          const jsondata = response.data;
          setJsonData(jsondata);
        })
        .catch((error) => {
          console.error('JSON 데이터를 가져오는 동안 오류가 발생했습니다: ', error);
        });
    }, []);


    return (
      <div className="TodayCharacter1">
  
    <div style={{ textAlign: 'center' }}>
      <img style={{ }} src={이재명} width='400px' height='500px'/>
      </div>
      <div style={{ textAlign: 'center',marginTop:'30px', marginBottom:'5px'}}>
        {jsondata && jsondata.modernPersonandGov && (
          <span style={{ fontSize: '40px', fontWeight: 'bold'}}>{jsondata.modernPersonandGov[0]}</span>
        )}
      </div>
      <div style={{ textAlign: 'center',marginTop:'0px', marginBottom:'50px'}}>
        {jsondata && jsondata.modernPersonandGov && (
          <span style={{ fontSize: '20px',}}>({jsondata.modernPersonandGov[1]})</span>
        )}
      </div>
      
       
      
     
      </div>
      
    );
  }
  
  export default TodayCharacter1;

