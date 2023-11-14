import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Timelinefour.css';
import axios from 'axios';

Modal.setAppElement('#root');

const Timeline4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jsondata, setJsonData] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');

  const openModal = (year) => {
    setSelectedYear(year);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedYear('');
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get('/ancestor/4')
      .then((response) => {
        const jsondata = response.data;
        setJsonData(jsondata);
      })
      .catch((error) => {
        console.error('JSON 데이터를 가져오는 동안 오류가 발생했습니다: ', error);
      });
  }, []);

  return (
    <div>
    <div className="timeline" >
      <div className="horizontal-line4"></div>
      <div className="mainvertical-line one4">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1544년
    </div>
          <p>인종 임금 등극</p>
        </div>
      </div>
      <div className="mainvertical-line two4">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1559년
    </div>
          <p>임꺽정 출몰</p>
        </div>
      </div>
      <div className="mainvertical-line three4">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1587년
    </div>
          <p>왜군 전라도침입</p>
        </div>
      </div>
      <div className="mainvertical-line four4">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1592년
    </div>
          <p>임진왜란 발발</p>
        </div>
      </div>
      <div
        className="eventvertical-line a4"
        onClick={() => openModal('1558')}
      >
         <div className="cross-point"></div>
        
        <div className="eventcontainer">
          <p>급제</p>
        </div>
      </div>

      <div
        className="eventvertical-line b4"
        onClick={() => openModal('1561')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>경복궁대액</p>
        </div>
      </div>

      <div
        className="eventvertical-line c4"
        onClick={() => openModal('1570')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>동부승지</p>
        </div>
      </div>

      <div
        className="eventvertical-line d4"
        onClick={() => openModal('1578')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>대사간</p>
        </div>
      </div>

      <div
        className="eventvertical-line e4"
        onClick={() => openModal('1588')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>우의정</p>
        </div>
      </div>

      <div
        className="eventvertical-line f4"
        onClick={() => openModal('1592')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>선조를 호종</p>
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="이산해 모달"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
          },
          content: {
            width: '400px',
            height: '100px', 
            margin: 'auto',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            textAlign: 'center'
          }
        }}
      >
        <div className="modal-content">
        {jsondata && jsondata.timeline && selectedYear && (
      <p>{selectedYear}년 : {jsondata.timeline[selectedYear]}</p>
    )}
          <button onClick={closeModal}>닫기</button>
        </div>
      </Modal>
    
    </div>
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    </div>
    
  );
};

export default Timeline4;
