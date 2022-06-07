import React from 'react';
import './Main.css';
import backgroundImg from '../background.png';
import AnimalDiv from '../AnimalDiv/AnimalDiv';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal, i) => 
          <AnimalDiv {...animal}
            key={animal.name + i}/>)
      }
    </main>
  );
}