import React, { useState } from 'react';
import axios from 'axios';


function ExpandableComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand} style={buttonStyle}>
      <span style={{ fontSize: '24px' }}>관직순서도</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={arrowStyle(isExpanded)}
        >
          <path d={isExpanded ? "M1 8L8 1L15 8" : "M1 8L8 15L15 8"} />
        </svg>
      </button>
      {isExpanded && <FlowChart></FlowChart>}
    </div>
  );
}

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: 'white',
  border: '1px solid #000',
  margin: 'auto', // 중앙 정렬을 위해 추가
};

const arrowStyle = (expanded) => ({
  marginLeft: '10px', // 텍스트와 화살표 사이의 간격 조절
  transform: expanded ? "rotate(0deg)" : "rotate(360deg)",
  transition: "transform 0.3s",
});

function FlowChart() {
  return (
    <div style={containerStyle}>
      <div style={groupContainerStyle}>
        <div style={circleStyle}>관직1</div>
        <div style={rectStyle}>품계1</div>
      </div>
      <div style={arrowContainerStyle}>
  <svg width="100" height="100">
    <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
    <polygon points="95,85 100,90 95,95" fill="black" />
  </svg>
</div>

      <div style={groupContainerStyle}>
        <div style={circleStyle}>관직2</div>
        <div style={rectStyle}>품계2</div>
        </div>
        <div style={arrowContainerStyle}>
  <svg width="100" height="100">
    <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
    <polygon points="95,85 100,90 95,95" fill="black" />
  </svg>
</div>
      <div style={groupContainerStyle}>
        <div style={circleStyle}>관직3</div>
        <div style={rectStyle}>품계3</div>
      </div>
      <div style={arrowContainerStyle}>
  <svg width="100" height="100">
    <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
    <polygon points="95,85 100,90 95,95" fill="black" />
  </svg>
</div>
      <div style={groupContainerStyle}>
        <div style={circleStyle}>관직4</div>
        <div style={rectStyle}>품계4</div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const groupContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0px',
};

const circleStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  backgroundColor: 'white',
  border: '1px solid #000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px',
  fontSize: '24px',
};

const rectStyle = {
  width: '110px',
  height: '80px',
  backgroundColor: 'white',
  border: '1px solid #000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  margin: '20px',
  
};

const arrowContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


export default ExpandableComponent ;

