import './App.css';
import React from 'react';
import { Route,Routes,Link, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import JosangSearch from './JosangSearch';
import RealResultPage1 from './RealResultPage1';
import VirtualResultPage1 from './VirtualResultPage1';
import RealResultPage2 from './RealResultPage2';
import VirtualResultPage2 from './VirtualResultPage2';
import RealResultPage3 from './RealResultPage3';
import VirtualResultPage3 from './VirtualResultPage3';
import RealResultPage4 from './RealResultPage4';
import VirtualResultPage4 from './VirtualResultPage4';

const NotFound = () => {
  return (
  <div>
    <div style={{ fontSize: '35px', textAlign: 'center', marginTop: '30px', fontWeight: 'bold'  }}>우리 조상 알기</div>
  <div style={{fontSize: '25px', fontWeight: 'bold', textAlign: 'center',  marginTop: '150px', }}>
    검색 조건에 맞지 않거나 존재하지 않는 조상입니다.</div>;
    </div>
  )
};


function App() {


  return (
    
      <div>
      
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none',color: 'black', fontWeight: 'bold' }}>Home</Link>
              

            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  exact path="/JosangSearch" element={<JosangSearch/>} />
          <Route  exact path="/ancestor/real/박세채(朴世采)" element={<RealResultPage1/>} />
          <Route  exact path="/ancestor/virtual/박세채(朴世采)" element={<VirtualResultPage1/>} />
          <Route  exact path="/ancestor/real/김상익(金尙翼)" element={<RealResultPage2/>} />
          <Route  exact path="/ancestor/virtual/김상익(金尙翼)" element={<VirtualResultPage2/>} />
          <Route  exact path="/ancestor/real/권응수(權應銖)" element={<RealResultPage3/>} />
          <Route  exact path="/ancestor/virtual/권응수(權應銖)" element={<VirtualResultPage3/>} />
          <Route  exact path="/ancestor/real/이산해(李山海)" element={<RealResultPage4/>} />
          <Route  exact path="/ancestor/virtual/이산해(李山海)" element={<VirtualResultPage4/>} />
          <Route  exact path="/ancestor/real/박세채" element={<RealResultPage1/>} />
          <Route  exact path="/ancestor/real/김상익" element={<RealResultPage2/>} />
          <Route  exact path="/ancestor/real/권응수" element={<RealResultPage3/>} />
          <Route  exact path="/ancestor/real/이산해" element={<RealResultPage4/>} />
          <Route path="*" element={<NotFound />} />
  </Routes>
      </div>
    
  
    
          
         
      
   
    
    
  );
}

export default App;
