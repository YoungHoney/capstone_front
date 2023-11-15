import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChartExample3 = () => {
  const [chartData, setChartData] = useState({
    labels: ['통솔력', '무력', '지력', '정신력', '매력'],
    datasets: [
      {
        label: '',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderColor: 'rgba(0, 0, 0, 1)',
        pointBackgroundColor: 'rgba(0, 0, 0, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 0, 0, 0.6)',
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Axios를 사용하여 외부 JSON 파일 가져오기 (여기서는 예시로 사용)
    axios.get('/api/ancestor/3')
      .then((response) => {
        // 가져온 JSON 데이터 중에서 필요한 값만 추출하여 데이터셋에 적용
        const extractedData = {
          tong: response.data.ancestor.tong,
          mu: response.data.ancestor.mu,
          ji: response.data.ancestor.ji,
          jung: response.data.ancestor.jung,
          mae: response.data.ancestor.mae,
        };

        // 차트 데이터 갱신
        const newData = {
          ...chartData,
          datasets: [
            {
              ...chartData.datasets[0],
              label: response.data.ancestor.name,
              data: Object.values(extractedData),
            },
          ],
        };

        setChartData(newData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정 (마운트 시에만 실행)

  // 차트 스타일 설정
  const chartOptions = {

    scales: {
        r: {
          min: 10, // 최소값
          max: 100, // 최대값
          stepSize: 20,
         // 간격
        },
        
        
      },
      


      
    maintainAspectRatio: true,  // 차트가 부모 컨테이너에 맞게 크기를 유지하지 않도록 설정
    responsive: true, // 반응형으로 크기를 조정할 수 있도록 설정
    width: 400, // 원하는 가로 크기
    height: 400, // 원하는 세로 크기
  };

  return (
    <div style={{ width: '700px', height: '670px',margin: 'auto',}}>
      
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

export default RadarChartExample3;
