import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ancestor1JsonData = () => {
   
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

  return null;
}

export default Ancestor1JsonData
