import React from 'react';

function NameList() {
  const names = ['- 곡부공씨', '- 광산김씨'];

  return (
    <div style={containerStyle}>
      {names.map((name, index1) => (
        <button key={index1} style={buttonStyle}>
          {name}
        </button>
      ))}
    </div>
  );
}

const containerStyle = {
    width: '120px',
    height: '200px',
    backgroundColor: '#F0F0F0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // 왼쪽 정렬
    justifyContent: 'flex-start', // 위쪽 정렬
    overflowY: 'auto',
    marginTop: '50px',
};

const buttonStyle = {
  width: '100px',
  height: '20px',
  margin: '0px',
  backgroundColor: '#F0F0F0',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
};

export default NameList;
