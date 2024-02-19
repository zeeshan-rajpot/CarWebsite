import React from 'react';

import Footer from '../../Components/Footer/index';
// import TradeHero from './TradeHero';
import Navbar from '../../Components/NewNavbar';
import HeroSection from './NewHero';
import NewFooter from '../../Components/Footer/NewFooter';
const Trade = () => {
  return (
    <>
      <Navbar />

      {/* <TradeHero /> */}
      <HeroSection/>
      <NewFooter/>


      {/* <Footer /> */}
    </>
  );
};

export default Trade;
