import React from 'react';



const SimpleIntroduction3 = () => {
   
    
  return (
    <div style={allcontainerStyle}>
      <div style={boxStyle2}>
        <span style={textStyle2}>이칭</span>
        </div>
    <div style={containerStyle}>
      <div style={boxStyle1}>{'자'}</div>
      <div style={textStyle1}>{'중평(仲平)'}</div>
    </div>
    <div style={containerStyle}>
    <div style={boxStyle1}>{'호'}</div>
    <div style={textStyle1}>{'백운재(白雲齋)'}</div>
  </div>
  <div style={containerStyle}>
    <div style={boxStyle1}>{'시호'}</div>
    <div style={textStyle1}>{'충의(忠毅)'}</div>
  </div>
  <div style={boxStyle2}>
        <span style={textStyle2}>인물</span>
        </div>
        <div style={containerStyle}>
    <div style={boxStyle1}>{'성별'}</div>
    <div style={textStyle1}>{'남성'}</div>
  </div>
  <div style={containerStyle}>
    <div style={boxStyle1}>{'출생연도'}</div>
    <div style={textStyle1}>{'1546년(명종 1)'}</div>
  </div>
  <div style={containerStyle}>
    <div style={boxStyle1}>{'사망연도'}</div>
    <div style={textStyle1}>{'1608년(선조 41)'}</div>
  </div>
  <div style={containerStyle}>
    <div style={boxStyle1}>{'본관'}</div>
    <div style={textStyle1}>{'안동(安東)'}</div>
  </div>
  </div>
    
  );
};

const allcontainerStyle = {
 marginLeft:'20px',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px',
};

const boxStyle2 = {
  width: '800px',
  height: '40px',
  background: '#f0f0f0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
 
};

const textStyle2 = {
  marginLeft: '10px',
  fontWeight: 'bold',
};


const boxStyle1 = {
  width: '70px',
  height: '30px',
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  fontSize: '14px', 
};

const textStyle1 = {
  marginLeft: '10px',
  fontWeight: 'bold',
  fontSize: '17px', 
};


    export default SimpleIntroduction3