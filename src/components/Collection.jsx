import React from 'react';
import PropTypes from 'prop-types';

import './Collection.css';

const renderChildren = children => (
  React.Children.map(children, child => (
    React.cloneElement(child, { className: `${child.props.className} collection__item` })
  ))
);

const Collection = ({ bindRef, children }) => (
  <div ref={bindRef} className="collection collection_nowrap_landscape">
    { renderChildren(children) }
  </div>
);
Collection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  bindRef: PropTypes.func,
};
Collection.defaultProps = {
  bindRef() {},
};

export default Collection;
