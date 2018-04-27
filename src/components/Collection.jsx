import React from 'react';
import PropTypes from 'prop-types';

import './Collection.css';

const renderChildren = children => (
  React.Children.map(children, child => (
    React.cloneElement(child, { className: `${child.props.className} collection__item` })
  ))
);

const Collection = ({ children, className }) => (
  <div className={`collection collection_nowrap_landscape ${className}`}>
    { renderChildren(children) }
  </div>
);
Collection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};
Collection.defaultProps = {
  className: '',
};

export default Collection;
