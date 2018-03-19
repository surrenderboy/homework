import React from 'react';

import CollectionItem from './CollectionItem';

function Collection({items}) {
  return (
    <div className="collection">
      {items.map(item =>
        <CollectionItem key={item.id} {...{item}} />
      )}
    </div>
  );
}

export default Collection;
