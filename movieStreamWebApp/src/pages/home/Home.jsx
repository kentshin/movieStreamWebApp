import React from 'react'
import "./home_style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Explore from '../explore/Explore';

const Home = props => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home;
