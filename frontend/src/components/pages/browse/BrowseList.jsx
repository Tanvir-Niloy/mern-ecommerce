import React from 'react';

import BrowseItem from './BrowseItem';

const BrowseList = ({ products }) => {
  return (
    <div className='browseList'>
      {products?.map((product, index) => (
        <BrowseItem product={product} key={index} />
      ))}
    </div>
  );
};

export default BrowseList;
