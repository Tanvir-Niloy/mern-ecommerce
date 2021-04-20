import React from 'react';

import banner from 'assets/img/banner.jpg';

const Banner = () => {
  return (
    <div className='banner'>
      <img className='banner__image' src={banner} alt='banner' />
    </div>
  );
};

export default Banner;
