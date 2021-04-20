import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className='cards'>
      <Link to='/browse'>
        <img
          src='https://image.freepik.com/free-vector/special-offer-sale-banner-up-50-off_275806-396.jpg'
          alt=''
        />
      </Link>
    </div>
  );
};

export default Cards;
