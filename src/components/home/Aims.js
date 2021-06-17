import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sound from '../../dist/img/sound.svg'
import gear from '../../dist/img/gear.svg'
import handshake from '../../dist/img/handshake.svg'
import badge from '../../dist/img/badge.svg'

const lang = localStorage.getItem('lang');
const Banner = (props) => {
  return (
    <section className="aims" ref={props.aimsRef}>
        <Container>
            <h2>Aims and Objective</h2>
            <Row>
                <Col md={12} lg={6}>
                    <figure>
                        <img src={badge} alt="aims" />
                        {lang === 'ar' ? 
                            <Fragment>
                                <figcaption>الاعتراف</figcaption>
                                <p>
                                الاعتراف والتعرف بأولئك الذين يعملون بأعلى المعايير في التأمين الصحي الخاص
                                </p>
                            </Fragment> : 
                            <Fragment>
                                <figcaption>Acknowledge</figcaption>
                                <p>
                                    Acknowledge and recognize those operating at the highest standards within the private health insurance
                                </p>
                            </Fragment>
                        }
                    </figure>
                </Col>
                <Col md={12} lg={6}>
                    <figure>
                        <img src={handshake} alt="aims" />
                        {lang === 'ar' ? 
                            <Fragment>
                                <figcaption>تشجيع</figcaption>
                                <p>
                                تشجيع ودعم تطوير قطاع التأمين الصحي الخاص نحو الجودة والشفافية.
                                </p>
                            </Fragment> : 
                            <Fragment>
                                <figcaption>Encourage</figcaption>
                                <p>
                                    Encourage and support the development of Private health insurance sector towards quality and transparency.
                                </p>
                            </Fragment>
                        }
                    </figure>
                </Col>
                <Col md={12} lg={6}>
                    <figure>
                        <img src={gear} alt="aims" />
                        {lang === 'ar' ? 
                            <Fragment>
                                <figcaption>تقديم</figcaption>
                                <p>
                                توفير فرص تواصل لا مثيل لها للأفراد ورفع معايير التميز الصناعي في الدولة والمنطقة.
                                </p>
                            </Fragment> : 
                            <Fragment>
                                <figcaption>Provide</figcaption>
                                <p>
                                    Provide unparallel networking opportunities to the individuals and raise standards of industry excellence in the country and region.
                                </p>
                            </Fragment>
                        }
                    </figure>
                </Col>
                <Col md={12} lg={6}>
                    <figure>
                        <img src={sound} alt="aims" />
                        {lang === 'ar' ? 
                            <Fragment>
                                <figcaption>التعزيز</figcaption>
                                <p>
                                تعزيز ثقافة الابتكار في صناعة التأمين الصحي في المملكة العربية السعودية.
                                </p>
                            </Fragment> : 
                            <Fragment>
                                <figcaption>Promote</figcaption>
                                <p>
                                    Promote a culture of innovation in Saudi Arabia health insurance industry.
                                </p>
                            </Fragment>
                        }
                    </figure>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Banner;