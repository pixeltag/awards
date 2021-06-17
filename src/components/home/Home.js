import React, { Fragment, useEffect } from 'react';
import Banner from './Banner';
import About from './About';
import Aims from './Aims';
import JudgeSlider from './Slider';

const Home = (props) => {
 useEffect(() => {
    window.scrollTo(0, 0)
 }, [])
  return (
    <Fragment>
      <Banner homeRef={props.homeRef} />
      <About aboutRef={props.aboutRef} />
      <Aims aimsRef={props.aimsRef} />
      <JudgeSlider judgeRef={props.judgeRef} />
    </Fragment>
  );
};

export default Home;