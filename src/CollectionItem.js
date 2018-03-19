import React from 'react';

import './CollectionItem.css';

function CollectionItem({item}) {
  return (
    <img
      className="collection-item"
      src={item.img['L'].href}
      alt={item.title}
    />
  );
}

export default CollectionItem;
