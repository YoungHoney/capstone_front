import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Timelinefour.css';
import axios from 'axios';

Modal.setAppElement('#root');

const Timeline2 = () => {
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
    axios.get('/ancestor/2')
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
      <div className="horizontal-line2"></div>
      <div className="mainvertical-line one2">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1720년
    </div>
          <p>경종 임금 등극</p>
        </div>
      </div>
      <div className="mainvertical-line two2">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1724년
    </div>
          <p>영조 임금 등극</p>
        </div>
      </div>
      <div className="mainvertical-line three2">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1727년
    </div>
          <p>정미환국</p>
        </div>
      </div>
      <div className="mainvertical-line four2">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1728년
    </div>
          <p>이인좌의 난</p>
        </div>
      </div>
      <div
        className="eventvertical-line a2"
        onClick={() => openModal('1725')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>급제</p>
        </div>
      </div>

      <div
        className="eventvertical-line b2"
        onClick={() => openModal('1732')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>충청도어사 역임</p>
        </div>
      </div>

      <div
        className="eventvertical-line c2"
        onClick={() => openModal('1735')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>이조좌랑</p>
        </div>
      </div>

      <div
        className="eventvertical-line d2"
        onClick={() => openModal('1750')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>기우제</p>
        </div>
      </div>

      <div
        className="eventvertical-line e2"
        onClick={() => openModal('1757')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>사은부사</p>
        </div>
      </div>

      <div
        className="eventvertical-line f2"
        onClick={() => openModal('1765')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>강화유수</p>
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="김상익 모달"
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

export default Timeline2;
