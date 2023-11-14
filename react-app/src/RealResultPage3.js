import { Route,Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Timeline3 from './Timeline3';
import History3 from './history3';
import Name3 from './Demoname3';
import { Link } from 'react-router-dom';
import 권응수 from './img/권응수.png'
import Definition3 from './Demodefinition3';
import SimpleIntroduction3 from './simpleintroduction3';
import axios from 'axios';


function ExpandableComponent1() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand} style={buttonStyle}>
      <span style={{ fontSize: '24px',}}>타임라인</span>
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
      {isExpanded && <Timeline3></Timeline3>}
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
        <span style={{ fontSize: '24px'}}>관직순서도</span>
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
        {isExpanded && <FlowChart3></FlowChart3>}
      </div>
    );
  }
  
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
  

function FlowChart3() {

  const [jsondata, setJsonData] = useState(null);
   

  useEffect(() => {
      axios.get('/ancestor/3')
        .then((response) => {
          const jsondata = response.data;
          setJsonData(jsondata);
        })
        .catch((error) => {
          console.error('JSON 데이터를 가져오는 동안 오류가 발생했습니다: ', error);
        });
    }, []);


  return (
    <div style={containerStyle}>
      <div style={groupContainerStyle}>
      <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
  <span>{jsondata.govSequence[1]}</span>
)}</div>
        <div style={rectStyle}>품계1</div> 
      </div>
      <div style={arrowContainerStyle}>
  <svg width="100" height="100">
    <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
    <polygon points="95,85 100,90 95,95" fill="black" />
  </svg>
</div>

      <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[2] && (
  <span>{jsondata.govSequence[2]}</span>
)}</div>
        <div style={rectStyle}>품계2</div>
        </div>
        <div style={arrowContainerStyle}>
  <svg width="100" height="100">
    <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
    <polygon points="95,85 100,90 95,95" fill="black" />
  </svg>
</div>
      <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[3] && (
  <span>{jsondata.govSequence[3]}</span>
)}</div>
        <div style={rectStyle}>품계3</div>
      </div>
      <div style={arrowContainerStyle}>
  <svg width="100" height="100">
    <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
    <polygon points="95,85 100,90 95,95" fill="black" />
  </svg>
</div>
      <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[4] && (
  <span>{jsondata.govSequence[4]}</span>
)}</div>
        <div style={rectStyle}>품계4</div>
      </div>
      <div style={arrowContainerStyle}>
  <svg width="100" height="100">
    <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
    <polygon points="95,85 100,90 95,95" fill="black" />
  </svg>
</div>
      <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[5] && (
  <span>{jsondata.govSequence[5]}</span>
)}</div>
        <div style={rectStyle}>품계5</div>
      </div>
     
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
};

const groupContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0px',
};

const circleStyle = {
  width: '150px',
  height: '150px',
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



function ExpandableComponent3() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand} style={buttonStyle}>
      <span style={{ fontSize: '24px',}}>일생일대기</span>
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
      <br></br>
      <br></br>
      {isExpanded && <History3></History3>}
    </div>
  );
}









const ConvertButton = () => {
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
        onClick={scrollToTop}
      >
       조상님과 대화하기
      </button>
      <Link to="/ancestor/virtual/권응수(權應銖)">
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '90px',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '70px',
        }}
        onClick={scrollToBottom}
      >
       가상으로 전환
      </button>
      </Link>
    </div>
  );
};









function RealResultPage3() {

  const horizontal = {
    display: 'flex',
    marginLeft: '150px', // Flexbox 사용
  };

  return (
    <div className="RealResultPage">

    
    <Name3></Name3>
    <Definition3></Definition3>
    <div style={horizontal}>
    <img style={{ }} src={권응수} width='300px' height='400px'/>
    <SimpleIntroduction3></SimpleIntroduction3>
    </div>
   
  
    
    <ExpandableComponent1   ></ExpandableComponent1>
  
    <ExpandableComponent2 ></ExpandableComponent2>

    <ExpandableComponent3 ></ExpandableComponent3>

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

export default RealResultPage3;

