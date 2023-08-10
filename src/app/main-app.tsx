import React from 'react';
import './style.css';

export default function MainApp(): JSX.Element {
  return <div className='container'>
    <div className='header'>
      <h3>Here comes an app itself, and a little card with photo</h3>
    </div>
    <div className='imageContainer'>
      <div className='photo'></div>
    </div>
 </div>;
}