import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import person1 from '../../dist/img/person1.jpg';
import person2 from '../../dist/img/person2.jpg';
import shamp2 from '../../dist/img/shamp2.jpg';

const lang = localStorage.getItem('lang');
const About = (props) => {
  return (
    <section className="about" ref={props.aboutRef}>
        <div className="about_1">
        <Container>
            <Row>
                <Col md={12} lg={6}>
                    <img src={person2} alt="person2" />
                </Col>
                <Col md={12} lg={6}>
                {lang === 'ar' ? 
                    <Fragment>
                        <h2>عن جائزة مجلس الضمان الصحي</h2>
                        <h3>سعادة سمو, د. توفيق بن فوزان الربيعة</h3>
                        <p>تهدف هذه الخطوة إلى رفع جودة الرعاية الصحية والتركيز على الوقاية بطريقة تخدم رؤية المجلس في تعزيز جودة واستدامة الخدمات الصحية. تتزامن رسالة المجلس مع أهداف جائزة التميز في قطاع التأمين الصحي الخاص ، وهي تحفيز قطاع التأمين الصحي الخاص.</p>
                        <p>للوصول إلى أعلى معايير الجودة والخدمة والرعاية للمستفيدين في المملكة في بيئة رائدة مستدامة.</p>
                    </Fragment> : 
                    <Fragment>
                        <h2>About CCHI Awards</h2>
                        <h3>His Excellence, DR. TAWFIG BIN FAWZAN ALRABIAH​.</h3>
                        <p>This step aims to raise the quality of health care and focus on prevention in a way that serves the council’s vision of enhancing the quality and sustainability of health services. The council’s mission coincides with the objectives of the Award for Excellence in the Private Health Insurance Sector, which is to stimulate the private health insurance sector.</p>
                        <p>To reach the highest standards in quality, service and care for beneficiaries in the Kingdom in a sustainable pioneering environment.</p>
                    </Fragment>
                }
                </Col>
            </Row>
        </Container>
        </div>
        <div className="about_2">
        <Container fluid>
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        {lang === 'ar' ? 
                            <Fragment>
                                <h2>عن جائزة مجلس الضمان الصحي</h2>
                                <p>جائزة CCHI للتميز في التأمين الصحي التعاوني - 2021.</p>
                                <p>يفخر مجلس التأمين الصحي التعاوني (CCHI) بالإعلان عن الإصدار الأول من جوائز CCHI تقديراً للتميز والابتكار في قطاع الرعاية الصحية والتأمين الصحي. سيوفر فرص تواصل لا مثيل لها للأفراد ويرفع معايير التميز الصناعي في الدولة والمنطقة. يتم دعم الجوائز من قبل لجنة من الحكام المتميزين بمعايير محددة بوضوح وإجراءات شفافة.</p>
                                <p>سواء كنت شركة تأمين صحي ، أو مقدم خدمة طبية ، أو مسؤول طرف ثالث (TPA) أو منظمة غير حكومية (NGO) ، فهناك جائزة CCHI التي تكرم مساهمتك الرائعة في قطاع التأمين الصحي في المملكة العربية السعودية.</p>
                            </Fragment> : 
                            <Fragment>
                                <h2>About CCHI Awards</h2>
                                <p>
                                    CCHI AWARD OF EXCELLENCE IN COOPERATIVE HEALTH INSURANCE – 2021.
                                </p>
                                <p>
                                    Council of Cooperative Health Insurance (CCHI) is proud to announce the first edition of CCHI awards to acknowledge excellence and innovation in healthcare and health insurance sector. It will provide unparallel networking opportunities to the individuals and raise standards of industry excellence in the country and region. The awards are backed by a panel of highly distinguished judges with clearly defined criteria and transparent procedure.
                                </p>
                                <p>
                                    Whether you are Health Insurer, Medical service provider, Third-Party Administrator (TPA) or Non-Governmental Organization (NGO) there is a CCHI award that honors your remarkable contribution to the Saudi Arabia health insurance sector
                                </p>
                            </Fragment>
                        }
                        
                    </Col>
                    <img src={shamp2} alt="shamp2" />
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </Container>
        </div>
        <div className="about_3">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        {lang === 'ar' ? 
                            <Fragment>
                                <h2>عن جائزة مجلس الضمان الصحي</h2>
                                <h3>أمين عام مجلس الضمان الصحي التعاوني د. شباب الغامدي</h3>
                                <p>يسر مجلس الضمان الصحي التعاوني أن يعلن عن الإصدار الأول من جائزة التميز في قطاع التأمين الصحي الخاص لتكريم التميز والابتكار في قطاع الرعاية الصحية والتأمين الصحي.</p>
                                <p>مما يدعم الأهداف الإستراتيجية للمجلس "قطاع تحفزه الجودة" ، والهدف الاستراتيجي "تحسين الاستدامة والابتكار في القطاع".</p>
                            </Fragment> : 
                            <Fragment>
                                <h2>About CCHI Awards</h2>
                                <h3>His Excellence, DR. TAWFIG BIN FAWZAN ALRABIAH​.</h3>
                                <p>This step aims to raise the quality of health care and focus on prevention in a way that serves the council’s vision of enhancing the quality and sustainability of health services. The council’s mission coincides with the objectives of the Award for Excellence in the Private Health Insurance Sector, which is to stimulate the private health insurance sector.</p>
                                <p>To reach the highest standards in quality, service and care for beneficiaries in the Kingdom in a sustainable pioneering environment.</p>
                            </Fragment>
                        }
                    </Col>
                    <Col md={12} lg={6}>
                        <img src={person1} alt="person1" />
                    </Col>
                </Row>
            </Container>
        </div>


        
    </section>
  );
};

export default About;