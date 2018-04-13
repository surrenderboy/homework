import React from 'react';

import './Collection.css';

function renderChildren(children) {
  return React.Children.map(children, child => {
    const className = [child.props.className, 'collection__item'].join(' ').trim();

    return React.cloneElement(child, {className});
  });
}

function Collection({children}) {
  return <div className="collection collection_nowrap_landscape">{renderChildren(children)}</div>;
}

export default Collection;
