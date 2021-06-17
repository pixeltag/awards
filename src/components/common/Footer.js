import React, {Fragment} from 'react';
import facebook from '../../dist/img/facebook.svg';
import instagram from '../../dist/img/instagram.svg';
import linkedin from '../../dist/img/linkedin.svg';
import twitter from '../../dist/img/twitter.svg';
import youtube from '../../dist/img/youtube.svg';
import { Container, Row, Col } from 'react-bootstrap';

const lang = localStorage.getItem('lang');
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            {lang === 'ar' ? 
                <Fragment>
                  <h4>عنا</h4>
                  <p>مجلس الضمان الصحي التعاوني</p>
                  <p>الأمانة العامة</p>
                </Fragment> : 
                <Fragment>
                  <h4>About Us</h4>
                  <p>Council of Cooperative Health Insurance</p>
                  <p>The General Secretariat</p>
                </Fragment>
            }
          </Col>
          <Col>
            {lang === 'ar' ? 
                <Fragment>
                  <h4>القوانين</h4>
                  <a href="#0">
                    الشروط والأحكام
                  </a>
                </Fragment> : 
                <Fragment>
                  <h4>legal</h4>
                  <a href="#0">
                    Terms & Conditions
                  </a>
                </Fragment>
            }
          </Col>
          <Col>
          {lang === 'ar' ? <h4>تابعنا</h4> : <h4>Follow Us</h4>}
            <ul>
              <li>
                <a href="#0" >
                  <img src={facebook} alt="social" />
                </a>
              </li>
              <li>
                <a href="#0" >
                  <img src={instagram} alt="social" />
                </a>
              </li>
              <li>
                <a href="#0" >
                  <img src={linkedin} alt="social" />
                </a>
              </li>
              <li>
                <a href="#0" >
                  <img src={twitter} alt="social" />
                </a>
              </li>
              <li>
                <a href="#0" >
                  <img src={youtube} alt="social" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copyRight">
        <Container>
          {lang === 'ar' ? 'حقوق النشر: مجلس الضمان الصحي التعاوني 2021. جميع الحقوق محفوظة' : 'Copyright: Council of Cooperative Health Insurance 2021. All Rights Reserved'}
        </Container>
      </div>
    </footer>
  );
};

export default Footer;