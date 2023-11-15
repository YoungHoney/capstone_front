import { Route,Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Timeline4 from './Timeline4';
import History4 from './history4';
import Name4 from './Demoname4';
import { Link } from 'react-router-dom';
import 이산해 from './img/이산해.png'
import Definition4 from './Demodefinition4';
import SimpleIntroduction4 from './simpleintroduction4';
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
      {isExpanded && <Timeline4></Timeline4>}
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
        {isExpanded && <FlowChart4></FlowChart4>}
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
  

  function FlowChart4() {

    const [jsondata, setJsonData] = useState(null);
    const [leftValue1, setLeftValue1] = useState('');
    const [rightValue1, setRightValue1] = useState('');
    const [leftValue2, setLeftValue2] = useState('');
    const [rightValue2, setRightValue2] = useState('');
    const [leftValue3, setLeftValue3] = useState('');
    const [rightValue3, setRightValue3] = useState('');
    const [leftValue4, setLeftValue4] = useState('');
    const [rightValue4, setRightValue4] = useState('');
    const [leftValue5, setLeftValue5] = useState('');
    const [rightValue5, setRightValue5] = useState('');
    
   
  
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
  
      
      useEffect(() => {
        if (jsondata && jsondata.govSequence && jsondata.govSequence[1]) {
          const govSequenceString1 = jsondata.govSequence[1];
          const splittedValues1 = govSequenceString1.split(',');
          const govSequenceString2 = jsondata.govSequence[2];
          const splittedValues2 = govSequenceString2.split(',');
          const govSequenceString3 = jsondata.govSequence[3];
          const splittedValues3 = govSequenceString3.split(',');
          const govSequenceString4 = jsondata.govSequence[4];
          const splittedValues4 = govSequenceString4.split(',');
          const govSequenceString5 = jsondata.govSequence[5];
          const splittedValues5 = govSequenceString5.split(',');
          
    
          setLeftValue1(splittedValues1[0] || '');
          setRightValue1(splittedValues1[1] || '');
          setLeftValue2(splittedValues2[0] || '');
          setRightValue2(splittedValues2[1] || '');
          setLeftValue3(splittedValues3[0] || '');
          setRightValue3(splittedValues3[1] || '');
          setLeftValue4(splittedValues4[0] || '');
          setRightValue4(splittedValues4[1] || '');
          setLeftValue5(splittedValues5[0] || '');
          setRightValue5(splittedValues5[1] || '');
        }
      }, [jsondata]);
     
    return (
      <div style={containerStyle}>
        <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{leftValue1}</span>
  )}</div>
          <div style={rectStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{rightValue1}</span>
  )}</div> 
        </div>
        <div style={arrowContainerStyle}>
    <svg width="100" height="100">
      <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
      <polygon points="95,85 100,90 95,95" fill="black" />
    </svg>
  </div>
  
  <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{leftValue2}</span>
  )}</div>
          <div style={rectStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{rightValue2}</span>
  )}</div> 
        </div>
          <div style={arrowContainerStyle}>
    <svg width="100" height="100">
      <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
      <polygon points="95,85 100,90 95,95" fill="black" />
    </svg>
  </div>
  <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{leftValue3}</span>
  )}</div>
          <div style={rectStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{rightValue3}</span>
  )}</div> 
        </div>
        <div style={arrowContainerStyle}>
    <svg width="100" height="100">
      <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
      <polygon points="95,85 100,90 95,95" fill="black" />
    </svg>
  </div>
  <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{leftValue4}</span>
  )}</div>
          <div style={rectStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{rightValue4}</span>
  )}</div> 
        </div>
        <div style={arrowContainerStyle}>
    <svg width="100" height="100">
      <line x1="0" y1="90" x2="100" y2="90" stroke="black" />
      <polygon points="95,85 100,90 95,95" fill="black" />
    </svg>
  </div>
  <div style={groupContainerStyle}>
        <div style={circleStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{leftValue5}</span>
  )}</div>
          <div style={rectStyle}>{jsondata && jsondata.govSequence && jsondata.govSequence[1] && (
    <span>{rightValue5}</span>
  )}</div> 
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
    width: '170px',
    height: '170px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
    fontSize: '17px',
    fontWeight: 'bold',
    
  };
  
  const rectStyle = {
    width: 'auto',
    height: '60px',
    backgroundColor: 'white',
    border: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '17px',
    margin: '20px',
    paddingLeft: '10px',
    paddingRight: '10px'
    
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
      {isExpanded && <History4></History4>}
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
      <Link to="/ancestor/virtual/이산해(李山海)">
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
       가상으로 전환
      </button>
      </Link>
    </div>
  );
};









function RealResultPage4() {

  const horizontal = {
    display: 'flex',
    justifyContent: 'center',// Flexbox 사용
  };

  return (
    <div className="RealResultPage">

    
    <Name4></Name4>
    <Definition4></Definition4>
    <div style={horizontal}>
    <img style={{ }} src={이산해} width='300px' height='400px'/>
    <SimpleIntroduction4></SimpleIntroduction4>
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

export default RealResultPage4;

