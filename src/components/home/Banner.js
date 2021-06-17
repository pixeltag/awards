import React from 'react';
import { Container } from 'react-bootstrap';
import shamp from '../../dist/img/shamp.webp'

const lang = localStorage.getItem('lang');
const Banner = (props) => {
  return (
    <section className="banner" ref={props.homeRef} >
        <Container>
            <h2>{lang === 'ar' ? 'جائزة التميز في التأمين الصحي التعاوني 2021' : 'Award of Excellence in Cooperative Health Insurance 2021' }</h2>
            <img alt="banner" src={shamp}></img>
        </Container>
        <span className="whiteShape"></span>
    </section>
  );
};

export default Banner;