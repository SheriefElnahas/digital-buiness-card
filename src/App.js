import React from 'react';
import './App.css';

import Character from './Components/Character/Character';
import ErenYeager from './Images/Eren Yeager.jpg';
import ZekeYeager from './Images/Zeke Yeager.jpg';


export default function App() {
  return (
    <div className='App'>
      <Character name='Eren Yeager' titan='The Founding Titan' img={ErenYeager}>
        <p>
          The former member of the Survey Corps. He was the main protagonist of
          Attack on Titan. He lived in Shiganshina District with his parents
          until the fall of Wall Maria.
        </p>
        <p>
          Eren was best described as hardheaded, strong-willed, passionate, and
          impulsive.
        </p>
      </Character>
      <Character name='Zeke Yeager' titan='The Beast Titan' img={ZekeYeager}>
        <p>
          The former Captain of Marley's Warrior Unit, assigned to take the
          Founding Titan from the Eldians of Paradis Island. He was the
          inheritor of the Beast Titan.
        </p>
        <p>
          Zeke was a very intelligent and curious man.He displayed the traits of
          a leader.
        </p>
      </Character>
    </div>
  );
}
