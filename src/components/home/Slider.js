import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import judge1 from "../../dist/img/judge1.png";
import judge2 from "../../dist/img/judge2.png";
import judge3 from "../../dist/img/judge3.png";
import judge4 from "../../dist/img/judge4.png";
import judge5 from "../../dist/img/judge5.png";
import judge6 from "../../dist/img/judge6.png";
import judge7 from "../../dist/img/judge7.png";
import judge8 from "../../dist/img/judge8.png";
import judge9 from "../../dist/img/judge9.png";

export default class JudgeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };
    return (
      <section className="judgeSlider" id="about" ref={this.props.judgeRef}>
        <Container>
          <h2>2021 Judge Panel</h2>
          <Slider {...settings}>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge4} alt="judge" />
                <figcaption>
                  <h4>Christian Gregorowicz</h4>
                  <h5>Health Insurance Companies</h5>
                  <p>CEO Allianz Partners MEA & NEXTCARE</p>
                  <span>Part of the judge panel at 7th Middle East Insurance Industry Awards 2020</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge3} alt="judge" />
                <figcaption>
                  <h4>Abdulaziz Abdulbaqi</h4>
                  <h5>Government Official</h5>
                  <p>Asst. Deputy Minister, Planning & Excellence</p>
                  <p>Ministry of Health Saudi Arabia</p>
                  <span>Part of the judge panel of ADA’A Health Awards 2020</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge2} alt="judge" />
                <figcaption>
                  <h4>Dr. Reem Bunyan</h4>
                  <h5>Government Official & Healthcare Provider</h5>
                  <p>Center for Improving Value in Health – Ministry of Health Saudi Arabia</p>
                  <p>Acting Chief Executive Officer of King Fahad Specialist Hospital Dammam</p>
                  <span>Based on CCHI Recommendations</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge1} alt="judge" />
                <figcaption>
                  <h4>Ahmad Al Ghamdi</h4>
                  <h5>Beneficiaries</h5>
                  <p>Vice President People - STC</p>
                  <span>Based on CCHI Recommendations</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge9} alt="judge" />
                <figcaption>
                  <h4>Dr. Nezar Bahabri</h4>
                  <h5>Public/International Figure</h5>
                  <p>Director of Internal medicine department – Dr. Soliman Fakeeh Hospital (DSFH) </p>
                  <p>Consultant, Internal Medicine and Infectious Disease- Dr.Soliman Fakeeh Hospital (DSFH)</p>
                  <span>Based on CCHI Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge8} alt="judge" />
                <figcaption>
                  <h4>Husein Reka</h4>
                  <h5>CCHI</h5>
                  <p>Senior Advisor Healthcare Finance, Policy and Innovation – Council of Cooperative Health Insurance</p>
                  <span>Based on CCHI Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge7} alt="judge" />
                <figcaption>
                  <h4>Lamar Hasbrouch</h4>
                  <h5>CCHI</h5>
                  <p>Executive Director of National Association of County and City Health Officials (NACCHO)</p>
                  <span>Based on CCHI Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge6} alt="judge" />
                <figcaption>
                  <h4>Daniel Whitehead</h4>
                  <h5>Health Insurance Companies</h5>
                  <p>Sr. Advisor National Health Insurance Company</p>
                  <span>Based on EFESO Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge5} alt="judge" />
                <figcaption>
                  <h4>Hanadi Al-Salmi</h4>
                  <h5>Healthcare Provider</h5>
                  <p>Assistant Director, infection control and hospital epidemiology</p>
                  <p>King Faisal Specialist Hospital and Research Center</p>
                  <span>Part of the judge panel pf ADAA Health Awards 2020</span>
                </figcaption>
              </figure>
            </div>
          </Slider>
        </Container>
      </section>
    );
  }
}