import React, { useState } from 'react';
import { Link } from 'react-router-dom';





function ShapedButton({ text1, onClick }) {
  const buttonStyle1 = {
    width: '60px',
    height: '50px',
    margin: '3px',// 버튼 사이에 간격을 주기 위한 마진
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid gray', // 검은색 테두리
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle1} onClick={onClick}>
     <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>{text1}</span>
    </button>
  );
}





// function JosangList() {
//   const [selectedButton1, setSelectedButton1] = useState('');

//   const buttons = ['1', '2', '3', '4', '김상집(金尙集)', '...'];
//   const buttons1 = ['박세채(朴世采)'];
//   const buttons2 = ['김상익(金尙翼)'];
//   const buttons3 = ['권응수(權應銖)'];
//   const buttons4 = ['이산해(李山海)'];

//   const getButtonsBySelectedButton = () => {
//     switch (selectedButton1) {
//       case '1':
//         return buttons1;
//       case '2':
//         return buttons2;
//       case '- 안동권씨':
//         return buttons3;
//       case '4':
//         return buttons4;
//       // 나머지 case에 대한 처리 추가
//       default:
//         return buttons;
//     }
//   };

//   const buttonsToShow = getButtonsBySelectedButton();

//   return (
//     <div style={containerStyle2}>
//       {buttonsToShow.map((text2, index2) => (
//         <Link to={`/ancestor/real/${text2}`} key={index2}>
//           <button
//             style={buttonStyle2}
//             onClick={() => setSelectedButton1(text2)}
//           >
//             {text2}
//           </button>
//         </Link>
//       ))}
//     </div>
//   );
// }




const containerStyle2 = {
  display: 'flex',
  flexDirection: 'row',// 가로로 나열
  flexWrap: 'wrap', // 줄 바
  position:'absolute',
  top:'35%',
  left:'15%', 
 
};

const buttonStyle2 = {
  width: '150px',
  height: '45px',
  margin: '5px',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #000',
  cursor: 'pointer',
};



const names1 = ['- 강릉김씨','- 경주김씨','- 곡부공씨','- 광산김씨','- 김녕김씨',
  '- 김해김씨','- 능성구씨','- 덕수김씨','- 봉화금씨','- 삼척김씨','- 상산김씨','- 선산김씨(일선계)','- 소주가씨',
  '- 수안계씨','- 신천강씨','- 안동권씨','- 안동김씨(구안동)','- 안동김씨(신안동)','- 안산김씨','- 양근김씨','- 연안김씨',
  '- 예천권씨','- 제주고씨','- 진주강씨','- 청주김씨','- 평해구씨','- 해평길씨','- 현풍곽씨','- 희천김씨',];

      const names2 = ['- 강화노씨','- 개성내씨','- 광주노씨','- 교동뇌씨','- 교하노씨',
      '- 금성나씨','- 나주나씨','- 나주내씨','- 만경노씨','- 밀양노씨','- 의령남씨','- 장연노씨','- 진주낭씨',
      '- 함열남궁씨','- 함평노씨',];

      const names3 = ['- 강음단씨','- 광천동씨','- 남원독고씨','- 대산대씨','- 두릉두씨',
      '- 성주도씨','- 연안단씨','- 진주동방씨',];

          const names4 = ['- 고흥류씨','- 문화류씨',];

      const names5 = ['- 감천문씨','- 강화만씨','- 남평문씨','- 목천·장흥마씨','- 사천목씨',
  '- 상곡마씨','- 서촉·연안명씨','- 신창맹씨','- 여흥민씨','- 정선문씨','- 함평모씨',];

  const names6 = ['- 강릉박씨','- 고령박씨','- 구산박씨','- 군위박씨','- 노성박씨',
      '- 면천박씨','- 무안박씨','- 문의박씨','- 밀양박씨','- 반남박씨','- 사천박씨','- 성산배씨','- 수원백씨',
      '- 영암박씨','- 온양방씨','- 운봉박씨','- 울산박씨','- 원주변씨','- 음성박씨','- 의흥박씨','- 죽산박씨','- 진원박씨','- 초계·밀양변씨','- 춘천박씨','- 충주박씨','- 하음봉씨','- 함양박씨',];

      const names7 = ['- 거창신씨','- 고령신씨','- 달성서씨','- 대구서씨','- 밀양손씨',
      '- 보성선씨','- 부여서씨','- 비안손씨','- 삼척심씨','- 순창설씨','- 안동손씨','- 야성송씨','- 영산·영월신씨',
      '- 은진송씨','- 이천서씨','- 장성서씨','- 진주소씨','- 진청송씨','- 창녕성씨','- 청송심씨','- 충주·홍주석씨','- 태원선우씨','- 평산신씨'];

const names8 = ['- 강릉유씨','- 경주이씨','- 광주이씨','- 기계유씨','- 나주임씨',
      '- 남원양씨','- 덕수이씨','- 동복오씨','- 수안이씨','- 순흥안씨','- 영월엄씨','- 영천이씨','- 원주원씨',
      '- 장흥임씨','- 전의이씨','- 전주이씨','- 제주양씨','- 진보이씨','- 탐진안씨','- 파주염씨','- 파평윤씨','- 평택임씨(전객령계)','- 한산이씨','- 함양오씨','- 해남윤씨','- 해주오씨','- 홍천용씨',];

const names9 = ['- 경주정씨','- 광동진씨','- 구례장씨','- 담양전씨','- 동래정씨',
      '- 봉산·봉주지씨','- 신안주씨','- 안동장씨','- 여양진씨','- 영일정씨','- 옥천전씨','- 인동장씨(장계계)','- 인동장씨(장금용계)',
      '- 정선전씨','- 진주정씨','- 창녕조씨','- 초계정씨','- 충주지씨','- 평양조씨','- 평택전씨','- 풍기정씨','- 하동정씨','- 한양조씨','- 함안조씨'];

      const names10 = ['- 간성최씨','- 강릉최씨','- 개성최씨','- 경주최씨','- 낭주최씨',
      '- 동주최씨','- 밀양최씨','- 부안최씨','- 상주최씨','- 수성최씨','- 양주최씨','- 연안차씨','- 영양천씨',
      '- 용궁최씨','- 전주최씨','- 추계추씨','- 통천최씨','- 평강채씨','- 해주최씨','- 화순최씨'];

      const names11 = [];

       const names12 = ['- 과산피씨','- 신창표씨','- 임구풍씨','- 절강팽씨','- 절강편씨'];

       const names13 = ['- 광산탁씨','- 영순태씨','- 협계태씨'];

        const names14 = ['- 강릉·양근함씨','- 곡산한씨','- 김해허씨','- 남양홍씨(당홍계)','- 남양홍씨(토홍계)',
      '- 덕산황씨','- 부계홍씨','- 신평·보안·나주호씨','- 양천허씨','- 연주현씨','- 영천황보씨','- 우주황씨','- 장수황씨',
      '- 제안황씨','- 진주하씨','- 진주형씨','- 창원황씨','- 청주한씨','- 파릉호씨','- 평해황씨','- 홍주홍씨','- 회덕황씨'];





const containerStyle3 = {
    width: '130px',
    height: 'auto',
    backgroundColor: '#F0F0F0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // 왼쪽 정렬
    justifyContent: 'flex-start', // 위쪽 정렬
    overflowY: 'auto',
    marginTop: '42px',
};

const buttonStyle3 = {
  width: '150px',
  height: '20px',
  margin: '3px',
  backgroundColor: '#F0F0F0',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
};




const buttons = ['1', '2', '3', '4', '김상집(金尙集)', '...'];

const buttons1 = ['박강(朴薑)','박곤(朴棍)','박기양(朴箕陽)','박대하(朴大夏)','박도원(朴道源)',
'박동량(朴東亮)','박동선(朴東善)','박동현(朴東賢)','박두양(朴斗陽)','박맹지(朴孟智)',
'박문영(朴文木英)','박병문(朴秉文)','박사유(朴師遊)','박사정(朴師正)','박사해(朴師海)',
'박상철(朴相喆)','박성수(朴聖壽)','박세견(朴世堅)','박세채(朴世采)','박숭질(朴崇質)',
'박시원(朴時源)','박종채(朴宗采)','박종훈(朴宗薰)','박주수(朴周壽)','박종보(朴宗輔)',
'박태유(朴泰維)','박태휘(朴泰徽)','박필건(朴弼健)','박홍서(朴烘緖)','박효삼(朴孝參)'];

const buttons2 = ['김상집(金尙集)', '김상철(金尙喆)', '김시습(金時習)', '김겸(金謙)', '김경의(金敬義)',
'김계락(金啓洛)','김계하(金啓河)','김광진(金光軫)','김광철(金光轍)','김기종(金起宗)',
'김노진(金魯鎭)','김담(金譚)','김대(金臺)','김몽호(金夢虎)','김사혁(金斯革)',
'김상구(金尙耉)','김상규(金尙奎)','김상성(金尙星)','김상익(金尙翼)','김상적(金尙迪)',
'김상중(金尙重)','김세행(金世行)', '김순명(金順命)', '김시위(金始煒)','김시징(金詩徵)',
 '김시혁(金始爀)', '김시형(金始炯)', '김시환(金始煥)','김양(金陽)', '김영관(金永寬)' ,
 '김영석(金永錫)', '김영윤(金永胤)', '김윤신(金潤身)', '김인존(金仁存)', '김진(金縝)',
  '김진우(金振宇)', '김첨경(金添慶)', '김충렬(金忠烈)','김팔원(金八元)', '김행(金行)',
   '김홍운(金鴻運)', '김화진(金華鎭)'];
const buttons3 = ['권근(權近)','권부(權溥)','권제(權踶)','권감(權瑊)','권경우(權景祐)',
'권규(權跬)','권극례(權克禮)','권고(權皐)','권극중(權克中)','권담(權湛)',
'권대임(權大任)','권덕린(權德麟)','권동수(權東壽)','권문임(權文任)','권수평(權守平)',
'권병덕(權秉悳)','권영만(權寧萬)','권왕후(權王煦)','권응수(權應銖)','권종해(權鍾海)',
'권채(權採)','권철신(權哲身)','권치문(權致文)','권필칭(權必稱)','권확(權鑊)','권황(權愰)',
'권희(權憘)','권희맹(權希孟)','권희인(權希仁)','권희학(權喜學)',];
const buttons4 = ['이개(李塏)','이거원(李巨源)','이경전(李慶全)','이곡(李穀)','1',
'이균(李均)','이기직(李基稷)','이대원(李大源)','이덕사(李德泗)','이동직(李東稷)',
'이명연(李明淵)','이무(李袤)','이병태(李秉泰)','이사관(李思觀)','이상정(李象靖)',
'이수경(李壽慶)','이수좌(李垂佐)','이산해(李山海)','이언식(李彦湜)','이연년(李延年)',
'이용직(李容稙)','이윤영(李胤永)','이정기(李廷蘷)','이증(李增)','이청(李淸)',
'이태영(李泰永)','이필중(李必重)','이형직(李亨稷)','이효문(李孝文)','이흥발(李興浡)'];








function JosangSearch() {

  const clearSelectedButton1 = () => {
    setSelectedButton1(null);
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButton1, setSelectedButton1] = useState(null);

  return (
    <div className="JosangSearch">
     <div style={{ fontSize: '35px', textAlign: 'center', margin: '40px', fontWeight: 'bold',  }}>본관별 조상 찾기</div>
      <div style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',margin: '40px'}}>
      <ShapedButton text1="ㄱ" onClick={() => {setSelectedButton('ㄱ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㄴ" onClick={() => {setSelectedButton('ㄴ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㄷ" onClick={() => {setSelectedButton('ㄷ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㄹ" onClick={() => {setSelectedButton('ㄹ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅁ" onClick={() => {setSelectedButton('ㅁ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅂ" onClick={() => {setSelectedButton('ㅂ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅅ" onClick={() => {setSelectedButton('ㅅ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅇ" onClick={() => {setSelectedButton('ㅇ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅈ" onClick={() => {setSelectedButton('ㅈ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅊ" onClick={() => {setSelectedButton('ㅊ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅋ" onClick={() => {setSelectedButton('ㅋ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅌ" onClick={() => {setSelectedButton('ㅍ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅍ" onClick={() => {setSelectedButton('ㅌ'); clearSelectedButton1();
        }} />
      <ShapedButton text1="ㅎ" onClick={() => {setSelectedButton('ㅎ'); clearSelectedButton1();
        }} />
      </div>

      {selectedButton === 'ㄱ' && (
        <div style={containerStyle3}>
          {names1.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)} >
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㄴ' && (
        <div style={containerStyle3}>
          {names2.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㄷ' && (
        <div style={containerStyle3}>
          {names3.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㄹ' && (
        <div style={containerStyle3}>
          {names4.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅁ' && (
        <div style={containerStyle3}>
          {names5.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅂ' && (
        <div style={containerStyle3}>
          {names6.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅅ' && (
        <div style={containerStyle3}>
          {names7.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅇ' && (
        <div style={containerStyle3}>
          {names8.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅈ' && (
        <div style={containerStyle3}>
          {names9.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅊ' && (
        <div style={containerStyle3}>
          {names10.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅋ' && (
        <div style={containerStyle3}>
          {names11.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅍ' && (
        <div style={containerStyle3}>
          {names12.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅌ' && (
        <div style={containerStyle3}>
          {names13.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}
      {selectedButton === 'ㅎ' && (
        <div style={containerStyle3}>
          {names14.map((name, index1) => (
            <button key={index1} style={buttonStyle3}
            onClick={() => setSelectedButton1(name)}>
              {name}
            </button>
          ))}
        </div>
      )}


{/* <Link to={`/ancestor/real/${text2}`} key={index2}>
          <button
            style={buttonStyle2}
            onClick={() => setSelectedButton(text2)}
          >
            {text2}
          </button>
        </Link> */}
     
     {selectedButton1 === '- 반남박씨' && (
        <div style={containerStyle2}>
          {buttons1.map((a, index1) => (
            <Link to={`/ancestor/real/${a}`} key={index1}>
            <button style={buttonStyle2}>
              {a}
            </button>
            </Link>
          ))}
        </div>
      )}

{selectedButton1 === '- 강릉김씨' && (
        <div style={containerStyle2}>
          {buttons2.map((a, index1) => (
             <Link to={`/ancestor/real/${a}`} key={index1}>
             <button style={buttonStyle2}>
               {a}
             </button>
             </Link>
          ))}
        </div>
      )}

{selectedButton1 === '- 안동권씨' && (
        <div style={containerStyle2}>
          {buttons3.map((a, index1) => (
            <Link to={`/ancestor/real/${a}`} key={index1}>
            <button style={buttonStyle2}>
              {a}
            </button>
            </Link>
          ))}
        </div>
      )}

     {selectedButton1 === '- 한산이씨' && (
        <div style={containerStyle2}>
          {buttons4.map((a, index1) => (
             <Link to={`/ancestor/real/${a}`} key={index1}>
             <button style={buttonStyle2}>
               {a}
             </button>
             </Link>
          ))}
        </div>
      )}
 
  {/* <JosangList/> */}
    </div>
    
    
  );
}

export default JosangSearch;

