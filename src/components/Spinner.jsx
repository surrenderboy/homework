import React from 'react';
import PropTypes from 'prop-types';

import reactLogo from '../logo.svg';
import './Spinner.css';

const Spinner = ({ className }) => (
  <img src={reactLogo} className={`spinner ${className}`} alt="spinner" />
);
Spinner.propTypes = {
  className: PropTypes.string,
};
Spinner.defaultProps = {
  className: '',
};

export default Spinner;
