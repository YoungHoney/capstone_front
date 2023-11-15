import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Definition4 = () => {
   
    const [jsondata, setJsonData] = useState(null);
   

    useEffect(() => {
        axios.get('/api/ancestor/4')
          .then((response) => {
            const jsondata = response.data;
            setJsonData(jsondata);
          })
          .catch((error) => {
            console.error('JSON 데이터를 가져오는 동안 오류가 발생했습니다: ', error);
          });
      }, []);

      return (
        <div style={{ textAlign: 'center',marginTop:'50px', marginBottom:'50px'}}>
        {jsondata && jsondata.definition && (
          <span style={{ fontSize: '30px', fontWeight: 'bold'}}>{jsondata.definition}</span>
        )}
      </div>
      );
    }

    export default Definition4