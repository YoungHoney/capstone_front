import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Timelinefour.css';
import axios from 'axios';

Modal.setAppElement('#root');

const Timeline1 = () => {
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
    axios.get('/ancestor/1')
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
   

      <div className="horizontal-line1"></div>
      
      <div className="mainvertical-line one1">
      

        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1636년
    </div>
          <p>병자호란</p>
        </div>
      </div>
      <div className="mainvertical-line two1">
    
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1649년
    </div>
          <p>효종 임금 등극</p>
        </div>
      </div>
      <div className="mainvertical-line three1">
      
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1658년
    </div>
          <p>나선정벌</p>
        </div>
      </div>
      <div className="mainvertical-line four1">
     
        <div className="maincontainer">
        <div style={{ fontSize: '14px' }}>
      1674년
    </div>
          <p>숙종 임금 등극</p>
        </div>
      </div>
      
      <div
        className="eventvertical-line a1"
        onClick={() => openModal('1649')}
      >
        <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>성균관 입학</p>
        </div>
      </div>

      <div
        className="eventvertical-line b1"
        onClick={() => openModal('1659')}
      >
        <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>대비복제설반대</p>
        </div>
      </div>

      <div
        className="eventvertical-line c1"
        onClick={() => openModal('1674')}
      >
        <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>책 저술</p>
        </div>
      </div>

      <div
        className="eventvertical-line d1"
        onClick={() => openModal('1680')}
      >
        <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>관직 복귀</p>
        </div>
      </div>

      <div
        className="eventvertical-line e1"
        onClick={() => openModal('1689')}
      >
        <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>학문에 몰두</p>
        </div>
      </div>

      <div
        className="eventvertical-line f1"
        onClick={() => openModal('1694')}
      >
        <div className="cross-point"></div>
        <div className="eventcontainer">
          <p>영도자</p>
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="박세채 모달"
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

export default Timeline1;
