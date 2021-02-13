import React from 'react';
import { Link } from 'react-router-dom';
import "./Color.css";


function Color( {hex, color, history }) {
  if(!hex) {
    history.push("/colors");
  }
  return (
    <div className="Color" style={{backgroundColor: hex }}>
      <p>this is {color}</p>
      <p>isn't it beautiful</p>
      <p><Link to="/">Go Back</Link></p>
    </div>
  );
}

export default Color;