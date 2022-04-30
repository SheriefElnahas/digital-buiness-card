import React from 'react';
import './Personality.css';

export default function Personality(props) {
  return (
    <div className='Personality'>
      <h3>Personality</h3>
      <p>
       {props.content}
      </p>
    </div>
  );
}
