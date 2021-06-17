import React, { Fragment, useState, useEffect } from 'react';
import { Container, Tabs, Tab, Accordion, Card, useAccordionToggle, Button  } from 'react-bootstrap';
import plus from '../../dist/img/plus.svg';
import ApplyForm from '../form/ApplyForm';
import healthInsurance from '../../dist/img/healthInsurance.svg';

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });

  return (
    <div className="card-header" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}
const lang = localStorage.getItem('lang');
const ThirdParty = () => {
  const [activeKeyChild, setActiveKeyChild] = useState("00");
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [awardIcon, setAwardIcon] = useState("");
  const showFormView = (awardName, awardIcon) => {
    setShowForm(true);
    setFormName(awardName);
    setAwardIcon(awardIcon)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    showForm ? <ApplyForm formName={formName} awardIcon={awardIcon} /> : <section className="awardsTabs customAwardsTabs_2">
      <div className="awardsTabsHeader">
      {lang === 'ar' ? 'جائزة مبادرة المطالبات TPA' : 'Third Party Administrators (TPAs) Awards' }
      </div>
      <Container>
        <Tabs defaultActiveKey="tab_5" id="uncontrolled-tab-example">
            <Tab className="tabChild" eventKey="tab_5"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'مبادرة المطالبات للسنة TPA' : 'Third Party Administrator of the Year' }</span>
                 </Fragment>}>
                 <Accordion defaultActiveKey="50">
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="50"
                        handleClick={() => {
                          if (activeKeyChild === "50") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("50");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'وصف مختصر' : 'Description' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "50" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="50">
                          <Card.Body>
                          {lang === 'ar' ? 
                          <p>
                            منحها لدليل على القيادة في توفر الخدمات الطرف الثالث للإدارة الفعالة والمؤثرة لمساعدة شركات التأمين الصحي على تحسين النتائج الصحية لأعضائها المؤمن عليهم
                          </p>
                          : 
                          <p>
                              Awarded for demonstrating leadership in providing efficient and effective third-party administration services to help health insurers improve the health outcomes of their insured members
                          </p>
                          }
                          
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>

                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="51"
                        handleClick={() => {
                          if (activeKeyChild === "51") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("51");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "51" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="51">
                          <Card.Body>
                          {lang === 'ar' ? 
                          <ul>
                              <li>
                              القدرة على التعامل مع التسويات الكبيرة دون المساس بمستويات الخدمة
                              </li>
                              <li>
                              دليل واضح على تسخير التكنولوجيا والحلول البرمجية لتحسين مستويات الخدمة
                              </li>
                              <li>
                              دليل على مبادرات محددة تم اتخاذها للكشف عن الاحتيال وقضايا خصوصية البيانات ومكافحتها
                              </li>
                              <li>
                              شهادات العملاء
                              </li>
                              <li>
                              المبادرات و يمكن أن تشمل المسؤولية الاجتماعية للشركات (مبادرة المسؤولية الاجتماعية للشركات أو مبادرة صحة السكان أو مبادرة الصحة العامة التي تتخذها الأعمال التجارية على المستوى الوطني لتعزيز الإندماج الاجتماعي والمجتمعات المستدامة وتعزيز الصحة العامة ورفاهية المجتمع والتأثير الذي تحقق من خلال المبادرة(
                              </li>
                            </ul>
                          : 
                          <ul>
                              <li>
                              Capacity to handle large claims without prejudice to service levels
                              </li>
                              <li>
                              Clear evidence of harnessing technology and software solutions to create efficiencies in service levels
                              </li>
                              <li>
                              Evidence of specific initiatives taken to detect and combat fraud and data privacy issues
                              </li>
                              <li>
                              Clients’ testimonials
                              </li>
                              <li>
                              Initiative which can include Corporate Social Responsibility (CSR Initiative, Population Health Initiative or Public Health Initiative taken by the business at a national level in promoting social inclusion, sustainable communities, promoting public health and wellbeing of the community and the impact achieved through the initiative
                              </li>
                            </ul>
                          }
                          
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="52"
                        handleClick={() => {
                          if (activeKeyChild === "52") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("52");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'ما نبحث عنه؟' : 'What we will look for ?' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "52" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="52">
                          <Card.Body>
                          {lang === 'ar' ? 
                            <ul>
                              <li>
                              تقديم معلومات لإثبات القدرة على معالجة التسويات الكبيرة: 
                              </li>
                              <li>
                              عدد الشكاوى التي تم تلقيها في العام الماضي
                              </li>
                              <li>
                              نسبة تسوية المطالبات في العام الماضي 1) وقت تسوية المطالبات "في العام الماضي
                              </li>
                              <li>
                              ما هي التكنولوجيا أو الحلول البرمجية التي تم استخدامها في العام الماضي؟
                              </li>
                              <li>
                              أعط أمثلة 1-2 للطرق التي عززت بها التكنولوجيا أو البرمجيات الكفاءة في تقديم الخدمة
                              </li>
                              <li>
                              أمثلة على مبادرتين تم اتخاذهما في العام الماضي تم تنفيذهما للكشف عن الاحتيال وقضايا خصوصية البيانات ومكافحتها 
                              </li>
                              <li>
                              أمثلة على طريقتين تساعد فيهما المبادرات المنفذة في اكتشاف مشكلات الاحتيال وخصوصية البيانات ومكافحتها
                              </li>
                              <li>
                              تقديم 5 شهادات من العملاء
                              </li>
                              <li>
                              تقديم  مثال او اثنين على المبادرات التي اتخذتها الشركة في السنوات الأولى الماضية على المستوى الوطني من أجل تعزيز الإدماج الاجتماعي والمجتمعات المستدامة وتعزيز الصحة العامة ورفاهية المجتمع 
                              </li>
                              <li>
                              أعط 1-2 أمثلة على التأثير الذي كان له من خلال المبادرة
                              </li>
                          </ul>
                          : 
                          <ul>
                            <li>
                            Provide information that can demonstrate the capacity to handle large claims to:
                            </li>
                            <li>
                            Number of complaints received in the past 1 Year
                            </li>
                            <li>
                            Claim settlement ratio in the past 1 Year
                            </li>
                            <li>
                            Claim Settlement time" in the past 1 Year
                            </li>
                            <li>
                            What technology or software solution were being used in the past 1 Year?
                            </li>
                            <li>
                            Give 1-2 Examples of the ways in which technology or software enhanced the efficiency in the delivery of service
                            </li>
                            <li>
                            Examples of 2 initiatives taken in the past 1 year that were being implemented to detect and combat fraud and data privacy issues
                            </li>
                            <li>
                            Examples of 2 Ways in which the implemented initiatives help to detect and combat fraud and data privacy issues
                            </li>
                            <li>
                            Provide 5 client testimonials
                            </li>
                            <li>
                            Give 1-2 examples of initiatives taken in the past 1 years  at national level by the company in order to promote social inclusion, sustainable communities, promoting public health  and wellbeing of the society
                            </li>
                            <li>
                            Give 1-2 Examples of impact that have been achieved through the initiative
                            </li>
                          </ul>
                          }
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="53"
                        handleClick={() => {
                          if (activeKeyChild === "53") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("53");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'شكل التقديم' : 'Format of Submission' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "53" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="53">
                          <Card.Body>
                          {lang === 'ar' ? 
                          <ul>
                          <li>
                          سيكون هذا جزءًا من كتابة 1000 كلمة وسيتم تبريرها من خلال المستندات الداعمة حيث يجب تقديم الأرقام الخاصة بالسنة الماضية في شكل جدول
                          </li>
                          <li>
                          سيكون هذا جزءًا من كتابة 1000 كلمة
                          </li>
                          <li>
                          سيكون هذا جزءًا من كتابة 1000 كلمة
                          </li>
                          <li>
                          يجب تقديم هذا من خلال المستندات الداعمة
                          </li>
                          <li>
                          سيكون هذا جزءًا من كتابة 1000 كلمة
                          </li>
                        </ul>
                          : 
                          <ul>
                          <li>
                          This will be a part of 1000 word write up and will be justified by supporting documents where the figures for the past 1 year should be presented in a form of a table
                          </li>
                          <li>
                          This will be a part of 1000 word write up
                          </li>
                          <li>
                          This will be a part of 1000 word write up
                          </li>
                          <li>
                          This needs to be presented through supporting documents
                          </li>
                          <li>
                          This will be a part of 1000 word write up
                          </li>
                        </ul>
                          }

                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <div className="btnHolder">
                  <Button onClick={() => showFormView(lang === 'ar' ? 'مقدم الخدمة الصحية للعام' : 'Health Provider of the Year', healthInsurance)} id="TPA">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                  </div>
                </Accordion>
            </Tab>
        </Tabs>
        
      </Container>
    </section>
  );
};

export default ThirdParty;