import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Name from './name';
import Josangimage from './josangimage';
import SimpleIntroduction from './simpleintroduction';
import RealExpandableComponent1 from './realexpandablecomponent1';
import RealExpandableComponent2 from './realexpandablecomponent2';
import RealExpandableComponent3 from './realexpandablecomponent3';


function RealResultPage() {
	  let { name } = useParams();


	  console.log("너뭐니",name);


	  const isRequestInProgress=useRef(false);
	  

	  const isValidNameFormat = (name) => {

		      const namePattern = /[ㄱ-힣]+\([ㄱ-힣]+\)/; 

		      return namePattern.test(name);
		    };





	  const [jsonconvert, setJsonConvert] = useState(null);
	  const [jsondata, setJsonData] = useState(null);

	  useEffect(() => {
		      if (name&&!isRequestInProgress.current) {
			            isRequestInProgress.current=true;
			            const encodedName = encodeURIComponent(name);
			            console.log(encodedName)
			            axios.post(`api/search/${encodedName}`)
			              .then((response) => {
					                const jsonconvert = response.data;
					                console.log('jsonconvert:', jsonconvert); 
					                const chatid = jsonconvert.id;
					                console.log('chatid:', chatid);
					                setJsonConvert(jsonconvert);

					                
					                if (jsonconvert && jsonconvert.id && jsonconvert.id != -1) {
								            axios.get(`api/ancestor/${jsonconvert.id}`)
								              .then((response) => {
										                      const jsonData = response.data;
										                      console.log('jsonData:', jsonData); 
										                      

										                      setJsonData(jsonData);
										                    })
								              .catch((error) => {
										                      console.error('JSON 데이터를 가져오는 동안 오류가 발생했습니다: ', error);
										                    });
								          }
					                if (jsonconvert && jsonconvert.id && jsonconvert.id == -1){
								            const jsonData = {pop:-111};
								            console.log('jsondata 홍찬',jsondata);
								            setJsonData(jsonData);
								          }
					              })
			              .catch((error) => {
					                console.error('JSONData 데이터를 가져오는 동안 오류가 발생했습니다 : ', error);
					              })
			              .finally(()=> {
					                isRequestInProgress.current=false;
					              });
			          }
		    }, [name]);

	  console.log(jsondata)











	  const ConvertButton = () => {



		      const handleButtonClick = () => {
			            console.log('없나?:', jsonconvert);
			            if (jsonconvert && jsonconvert.id) {
					            console.log('chatidaaaaa:', jsonconvert.id);
					            window.location.href = `http://3.39.127.44:8080/api/ancestor/${jsonconvert.id}/chat`;
					            scrollToTop();
					          } else {
							          console.error('jsonconvert가 유효하지 않습니다. 아직 데이터가 로딩 중일 수 있습니다.');
							        }
			          };

		      const scrollToTop = () => {
			            window.scrollTo({
					            top: 0,
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
			                onClick={ handleButtonClick}
			              >
			               조상님과 대화하기
			              </button>

			              <Link to={`/ancestor/virtual/${name}`}>
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
			                        onClick={scrollToTop}
			                      >
			                       가상으로 전환
			                      </button>
			                      </Link>
			                    </div>
			                  );
		            };



	  
	  
	  
	  
	            if (!isValidNameFormat(name) ) {
			                  return (
						                  <div>
						                      <div style={{ fontSize: '35px', textAlign: 'center', marginTop: '30px', fontWeight: 'bold'  }}>우리 조상 알기</div>
						                    <div style={{fontSize: '25px', fontWeight: 'bold', textAlign: 'center',  marginTop: '150px', }}>
						                      검색 조건에 맞지 않습니다.</div>;
						                      </div>
						                );
			                }
	  
	            if (isValidNameFormat(name) ) {
			                  if(!jsondata){
						                return (
									                <div>
									                    <div style={{ fontSize: '35px', textAlign: 'center', marginTop: '30px', fontWeight: 'bold'  }}>우리 조상 알기</div>
									                    <div style={{fontSize: '25px', fontWeight: 'bold', textAlign: 'center',  marginTop: '150px', }}>
									                  데이터 로딩중.....</div>;
									                  <div style={{fontSize: '25px', fontWeight: 'bold', textAlign: 'center',   }}>
									                  조상의 정보가 없다면 화면이 바뀌지 않습니다.</div>;
									                  </div>
									            );
						              }
			              }

	          if (isValidNameFormat(name) ) {
			              if(jsonconvert.id == -1){
					                  return (
								                <div>
								                    <div style={{ fontSize: '35px', textAlign: 'center', marginTop: '30px', fontWeight: 'bold'  }}>우리 조상 알기</div>
								                  <div style={{fontSize: '25px', fontWeight: 'bold', textAlign: 'center',  marginTop: '150px', }}>
								                    로딩이 완료되었습니다 새로고침을 누르세요, 새로고침해도 똑같으면 정보가 없습니다</div>;

								                    </div>
								              );
					                  }
			            }





	        return (
			            <div className="RealResultPage">
			        <Name jsondata={jsondata}/>

			        <div style={{display: 'flex', justifyContent: 'center',}}>
			       <Josangimage jsondata={jsondata}></Josangimage>
			    <SimpleIntroduction jsondata={jsondata}></SimpleIntroduction>
			       </div>
			       <br></br>
			       <br></br>
			       <br></br>
			       <br></br>

			       <RealExpandableComponent1 jsondata={jsondata}/>
			       <RealExpandableComponent2 jsondata={jsondata}/>
			       <RealExpandableComponent3 jsondata={jsondata}/>

			        <ConvertButton></ConvertButton>

			         </div>
			        )

	      }





      export default RealResultPage


  
