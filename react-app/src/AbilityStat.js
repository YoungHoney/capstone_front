// src/AbilityStat.js

import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const AbilityStat = ({ attack, defense, magic, agility, charisma }) => {
  const data = [
    {
      data: {
        공격력: attack,
        방어력: defense,
        지력: magic,
        민첩력: agility,
        염력: charisma,
      },
      meta: { color: 'blue' },
    },
  ];

  const captions = {
    공격력: '공격력',
    방어력: '방어력',
    지력: '지력',
    민첩력: '민첩력',
    염력: '염력',
  };


  const options = {
    maxValue: 100,
  };


  return (
    <div>
      <h2>능력치 스탯</h2>
      <RadarChart captions={captions} data={data} size={400} options={options} />
    </div>
  );
};

export default AbilityStat;
