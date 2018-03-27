import React from 'react';

import reactLogo from './logo.svg';
import './Spinner.css';

function Spinner({className}) {
  return <img src={reactLogo} className={`spinner ${className}`} alt="spinner" />;
}

export default Spinner;
