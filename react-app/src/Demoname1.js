import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Name1 = () => {
   
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
        <div style={{ textAlign: 'center',marginTop:'50px', marginBottom:'50px'}}>
        {jsondata && jsondata.ancestor && jsondata.ancestor.name && (
          <span style={{ fontSize: '50px', fontWeight: 'bold'}}>{jsondata.ancestor.name}</span>
        )}
      </div>
      );
    }

    export default Name1