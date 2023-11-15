import React from 'react';



const SimpleIntroduction2 = () => {
   
    
  return (
    <div style={allcontainerStyle}>
      <div style={boxStyle2}>
        <span style={textStyle2}>이칭</span>
        </div>
    <div style={containerStyle}>
      <div style={boxStyle1}>{'자'}</div>
      <div style={textStyle1}>{'사필(士弼)'}</div>
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
    <div style={textStyle1}>{'1699년(숙종 25)'}</div>
  </div>
  <div style={containerStyle}>
    <div style={boxStyle1}>{'사망연도'}</div>
    <div style={textStyle1}>{'1771년(영조 47)'}</div>
  </div>
  <div style={containerStyle}>
    <div style={boxStyle1}>{'본관'}</div>
    <div style={textStyle1}>{'강릉(江陵)'}</div>
  </div>
  <div style={containerStyle}>
    <div style={boxStyle1}>{'주요관직'}</div>
    <div style={textStyle1}>{'강화유수'}</div>
  </div>
  </div>
    
  );
};

const allcontainerStyle = {
  marginLeft:'20px',
  display: 'grid',
   justifyContent: 'center',
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


    export default SimpleIntroduction2