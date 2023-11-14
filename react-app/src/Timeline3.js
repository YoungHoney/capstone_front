import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Timelinefour.css';
import axios from 'axios';

Modal.setAppElement('#root');

const Timeline3 = () => {
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
    <div>
    <div className="timeline" >
      <div className="horizontal-line3"></div>
      <div className="mainvertical-line one3">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1559년
    </div>
          <p>임꺽정 출몰</p>
        </div>
      </div>
      <div className="mainvertical-line two3">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1567년
    </div>
          <p>선조 임금 등극</p>
        </div>
      </div>
      <div className="mainvertical-line three3">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1590년
    </div>
          <p>조선통신사파견</p>
        </div>
      </div>
      <div className="mainvertical-line four3">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1592년
    </div>
          <p>임진왜란 발발</p>
        </div>
      </div>
      <div className="mainvertical-line five3">
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1597년
    </div>
          <p>정유재란 발발</p>
        </div>
      </div>
      <div
        className="eventvertical-line a3"
        onClick={() => openModal('1583')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>급제</p>
        </div>
      </div>

      <div
        className="eventvertical-line b3"
        onClick={() => openModal('1592')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>의병대장</p>
        </div>
      </div>

      <div
        className="eventvertical-line c3"
        onClick={() => openModal('1593')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>적을적파</p>
        </div>
      </div>

      <div
        className="eventvertical-line d3"
        onClick={() => openModal('1595')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>적을적파</p>
        </div>
      </div>

      <div
        className="eventvertical-line e3"
        onClick={() => openModal('1603')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>충무위호군</p>
        </div>
      </div>

      <div
        className="eventvertical-line f3"
        onClick={() => openModal('1608')}
      >
         <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>좌찬성에추증</p>
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="권응수 모달"
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

export default Timeline3;
