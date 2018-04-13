import React from 'react';

import './Collection.css';

function renderChildren(children) {
  return React.Children.map(children, child => {
    if (!child) return;

    const className = [child.props.className, 'collection__item'].join(' ').trim();

    return React.cloneElement(child, {className});
  });
}

function Collection({bindRef, children}) {
  return <div ref={bindRef} className="collection collection_nowrap_landscape">{renderChildren(children)}</div>;
}

export default Collection;
