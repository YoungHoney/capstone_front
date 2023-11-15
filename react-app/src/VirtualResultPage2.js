import Name2 from './Demoname2';
import { Link } from 'react-router-dom';
import TodayCharacter2 from './TodayCharacter2';
import Mbti2 from './mbti2';
import Definition2 from './Demodefinition2';
import React, { useState } from 'react';
import RadarChartExample2 from './abilitygraph2';

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: 'white',
  border: '1px solid #000',
  margin: 'auto',
  marginTop: '20px', // 중앙 정렬을 위해 추가
};

const arrowStyle = (expanded) => ({
  marginLeft: '10px', // 텍스트와 화살표 사이의 간격 조절
  transform: expanded ? "rotate(0deg)" : "rotate(360deg)",
  transition: "transform 0.3s",
});







function ExpandableComponent1() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div >
      <button onClick={toggleExpand} style={buttonStyle}>
      <span style={{ fontSize: '24px',}}>현대인물로는 누구일까?</span>
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
      {isExpanded && <div style={{ marginTop: '20px' }}><TodayCharacter2 /></div>}
    </div>
  );
}

function ExpandableComponent2() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand} style={buttonStyle}>
      <span style={{ fontSize: '24px',}}>조상님의 MBTI는?</span>
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
      {isExpanded && <Mbti2></Mbti2>}
    </div>
  );
}


function ExpandableComponent3() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div >
      <button onClick={toggleExpand} style={buttonStyle}>
      <span style={{ fontSize: '24px',}}>오각형능력치는?</span>
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
      {isExpanded && <div style={{ marginTop: '20px' }}><RadarChartExample2 /></div>}
    </div>
  );
}



const ConvertButton = () => {
  const handleButtonClick = () => {
    window.location.href = 'http://3.39.127.44/api/ancestor/2/chat';
    scrollToTop();
  };

 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          
        }}
        onClick={handleButtonClick}
      >
       조상님과 대화하기
      </button>
      <Link to="/ancestor/real/김상익(金尙翼)">
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
         
        }}
        onClick={scrollToBottom}
      >
       실화로 전환
      </button>
      </Link>
    </div>
  );
};




function VirtualResultPage2() {

    
    return (
      <div className="VirtureResultPage">
      
      
      <Name2></Name2>
      <Definition2></Definition2>
      
      <ExpandableComponent1   ></ExpandableComponent1>
    
      <ExpandableComponent2></ExpandableComponent2>

      <ExpandableComponent3></ExpandableComponent3>
  
      
      <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
     
       
   <ConvertButton></ConvertButton>
     
      </div>
      
    );
  }

  export default VirtualResultPage2