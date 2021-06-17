import React, { Fragment, useState, useEffect } from 'react';
import { Container, Tabs, Tab, Accordion, Card, useAccordionToggle, Button  } from 'react-bootstrap';
import badge2 from '../../dist/img/badge2.svg';
import downAr from '../../dist/img/downAr.svg';
import ceo from '../../dist/img/ceo.svg';
import plus from '../../dist/img/plus.svg';
import ApplyForm from '../form/ApplyForm';
import headset from '../../dist/img/headset.svg';
import Group from '../../dist/img/Group.svg';
import technology from '../../dist/img/technology.svg';
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
const Health = () => {
  const [activeKey, setActiveKey] = useState("0");
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
    showForm ? <ApplyForm formName={formName} awardIcon={awardIcon} /> : <section className="awardsTabs">
      <div className="awardsTabsHeader">
      {lang === 'ar' ? 'شركات التأمين الصحي' : 'Health Insurance Companies Awards' }
      </div>
      <Container>
        <Tabs defaultActiveKey="tab_1" id="uncontrolled-tab-example">
            <Tab className="tabParent" eventKey="tab_1" 
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'جائزة أفضل منجز' : 'Best Achiever Award' }</span>
                </Fragment>}>
              <Accordion defaultActiveKey="0">
                <Card>
                    <CustomToggle
                      as={Card.Header}
                      eventKey="0"
                      
                      handleClick={() => {
                        if (activeKey === "0") {
                          setActiveKey(null);
                        } else {
                          setActiveKey("0");
                        }
                      }}
                    >
                      <img alt="img" src={badge2} className="icon" />
                      <span>{lang === 'ar' ? 'الرئيس التنفيذي للسنة' : 'C-Suite of the Year' }</span>
                      <img alt="img" src={downAr} className={activeKey === "0" ? "arr activeAcc" : "arr"} />
                    </CustomToggle>
                    <Accordion.Collapse className="collapseHolder" eventKey="0">
                      <Accordion defaultActiveKey="00">
                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="00"
                              handleClick={() => {
                                if (activeKeyChild === "00") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("00");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'الوصف' : 'Description' }</span>
                              <img alt="img" src={plus} className={activeKeyChild === "00" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="00">
                                <Card.Body>
                                  <p>
                                  {lang === 'ar' ? 'سيتم تقديم هذه الجائزة إلى الرئيس التنفيذي لشركة تأمين الذي قدم مساهمة متميزة في الأشهر ال 12 الماضية من خلال النهوض بالشركة التي توظفه وصناعة التأمين الصحي الأوسع' : 'This award will be presented to the C-Suite of an insurance company who has made an outstanding contribution in the last 12 months through the advancement of the company that employs him and the wider health insurance industry' }
                                  </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="01"
                              handleClick={() => {
                                if (activeKeyChild === "01") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("01");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' }</span>
                              <img alt="img" src={plus} className={activeKeyChild === "01" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="01">
                                <Card.Body>
                                {lang === 'ar' ? 
                                <ul>
                                    <li>
                                    نمو الشركة والإنجازات والتقدير والأداء والنتائج المالية الإيجابية التي تعكس الريادة
                                    </li>
                                    <li>
                                    المساهمة المتميزة التي قدمها المسؤول الرئيسي في نجاح صناعة التأمين الصحي خلال حياته المهنية
                                    </li>
                                  </ul> : 
                                  <ul>
                                    <li>
                                    Corporate growth, achievements , recognition, performance and positive financial results reflective of leadership
                                    </li>
                                    <li>
                                    Outstanding contribution C-Suite has made to the success of the health insurance industry through his career
                                    </li>
                                  </ul>
                                }
                                  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="02"
                              handleClick={() => {
                                if (activeKeyChild === "02") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("02");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'ما نبحث عنه؟' : 'What we will look for ?' }</span>
                              <img alt="img" src={plus} className={activeKeyChild === "02" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="02">
                                <Card.Body>
                                {lang === 'ar' ? 
                                <ul>
                                  <li>
                                  يجب أن يقدم المرشح قائمة بأفضل 3 إنجازات داخل المنظمة
                                  </li>
                                  <li>
                                  نمو الشركة و ما حققته الأعمال تحت قيادته (من خلال الحقائق والأرقام)
                                  </li>
                                  <li>
                                  أعط مثالاً (إن أمكن) حيث لعب الفرد دورًا مهمًا في إستراتيجية تحول الأعمال
                                  </li>
                                  <li>
                                  أعط 3 أمثلة حيث لعب الفرد دورًا في تدريب قادة المستقبل في المنظمة
                                  </li>
                                  <li>
                                  ما هي المساهمتان الرئيسيتان اللتان قدمهم المسؤول الرئيسي لنجاح صناعة التأمين الصحي
                                  </li>
                                  <li>
                                  أعط مثالين لكيفية تأثير هذه المساهمات على صناعة التأمين الصحي
                                  </li>
                                </ul> : 
                                  <ul>
                                    <li>
                                      Nominee should provide his list of top 3 achievements within the organization
                                    </li>
                                    <li>
                                      Corporate growth that business has achieved under his/her leadership (Through facts and figures)
                                    </li>
                                    <li>
                                      Give an Example (If applicable) where the individual has played a significant part in business turn around strategy
                                    </li>
                                    <li>
                                      Give 3 examples where an individual has played part in training future leaders of the organization
                                    </li>
                                    <li>
                                      What 2 major contributions has been made by the C-Suite to the success of the health insurance industry
                                    </li>
                                    <li>
                                      Give 2 examples of how these contributions have impacted the health insurance industry
                                    </li>
                                  </ul>
                                }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="03"
                              handleClick={() => {
                                if (activeKeyChild === "03") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("03");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'شكل التقديم' : 'Format of Submission' }</span>
                              <img alt="img" src={plus} className={activeKeyChild === "03" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="03">
                                <Card.Body>
                                {lang === 'ar' ? 
                                <ul>
                                  <li>
                                  يجب دعم أهم 3 إنجازات  بالحقائق و الارقام وستكون هذا الجزء من كتابة 1000 كلمة
                                  </li>
                                  <li>
                                  يجب تقديم الحقائق والأرقام المتعلقة بنمو الشركات في شكل مخطط شريطي
                                  </li>
                                  <li>
                                  سيكون هذا جزءًا من كتابة 1000 كلمة
                                  </li>
                                </ul> : 
                                  <ul>
                                    <li>
                                      Top 3 achievements needs to be supported and will be a part of 1000 word write up
                                    </li>
                                    <li>
                                      Facts and Figures related to corporate growth should be presented in the form of bar chart
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
                          <Button onClick={() => showFormView(lang === 'ar' ? 'الرئيس التنفيذي للسنة' : 'C-Suite of the Year' , badge2)} id="YoungAchieverAward">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                        </div>
                      </Accordion>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <CustomToggle
                      as={Card.Header}
                      eventKey="1"
                      handleClick={() => {
                        if (activeKey === "1") {
                          setActiveKey(null);
                        } else {
                          setActiveKey("1");
                        }
                      }}
                    >
                      <img alt="img" src={ceo} className="icon" />
                      <span>{lang === 'ar' ? 'جائزة الشاب المنجز' : 'Young Achiever Award' }</span>
                      <img alt="img" src={downAr} className={activeKey === "1" ? "arr activeAcc" : "arr"} />
                    </CustomToggle>
                    <Accordion.Collapse className="collapseHolder" eventKey="1">
                    <Accordion defaultActiveKey="10">
                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="10"
                              handleClick={() => {
                                if (activeKeyChild === "10") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("10");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'وصف مختصر' : 'Description' }</span>
                              <img alt="img" src={plus} className={activeKeyChild === "10" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="10">
                                <Card.Body>
                                {lang === 'ar' ? 
                                  <p>
                                  ستقدم الجائزة للشباب الذين تقل أعمارهم عن 30 عامًا والذين حققوا تقدمًا كبيرًا في تطورهم المهني وحققوا علامة لمنظمة أصحاب العمل
                                  </p> : 
                                  <p>
                                  Award will recognize the professionals under the age of 35 who have made significant advancement in their professional development and has made mark outside their employer organization
                                  </p>
                                }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="11"
                              handleClick={() => {
                                if (activeKeyChild === "11") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("11");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' } </span>
                              <img alt="img" src={plus} className={activeKeyChild === "11" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="11">
                                <Card.Body>
                                {lang === 'ar' ? 
                                <ul>
                                  <li>
                                  قطع أشواطا كبيرة في تطوره المهني
                                  </li>
                                  <li>
                                  يمكن أن يُثبت بوضوح مساهمته في المنظمة أو الفريق أو القسم الذي يعمل فيه
                                  </li>
                                  <li>
                                  أن يكون قد صنع نجاحا/اختلاف  خارج شركة العمل الخاصة به ، إما على مستوى الصناعة الكلية أو من خلال الأنشطة التجارية المتوافقة
                                  </li>
                                </ul> : 
                                <ul>
                                  <li>
                                  Made significant strides in his/her professional development
                                  </li>
                                  <li>
                                  Can clearly demonstrate his contribution to the organization, team or department in which he or she works
                                  </li>
                                  <li>
                                  Has made a mark outside their employer, either on a macro industry level or through business aligned activities
                                  </li>
                                </ul>
                                }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="12"
                              handleClick={() => {
                                if (activeKeyChild === "12") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("12");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'ما نبحث عنه؟' : 'What we will look for ?' } </span>
                              <img alt="img" src={plus} className={activeKeyChild === "12" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="12">
                                <Card.Body>
                                {lang === 'ar' ? 
                                  <ul>
                                    <li>
                                    أعط أمثلة على 3 إجراءات رئيسية قام بها من أجل تطويره المهني
                                    </li>
                                    <li>
                                    أعط أمثلة على 3 مساهمات رئيسية قدمها في نجاح المنظمة أو الفريق أو القسم
                                    </li>
                                    <li>
                                    كيف أثرت هذه المساهمات الثلاثة الرئيسية على المنظمة
                                    </li>
                                    <li>
                                    أعط مثالاً لمساهمة أو مساهمتين رئيسيتين قدمها المرشح على مستوى الصناعة الكلية خارج منظمة صاحب العمل
                                    </li>
                                  </ul> : 
                                  <ul>
                                    <li>
                                    Give examples of major 3 actions he/she has taken for his/her professional development
                                    </li>
                                    <li>
                                    Give examples of 3 major contributions he has made to the success of the organization, team or department
                                    </li>
                                    <li>
                                    How these 3 major contributions have impacted the organization
                                    </li>
                                    <li>
                                    Give an example of 1-2 major contributions that has been made by the nominee at the macro industry level outside the employer organization
                                    </li>
                                  </ul>
                                }
                                  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <CustomToggle
                              as={Card.Header}
                              eventKey="13"
                              handleClick={() => {
                                if (activeKeyChild === "13") {
                                  setActiveKeyChild(null);
                                } else {
                                  setActiveKeyChild("13");
                                }
                              }}
                            >
                              <span>{lang === 'ar' ? 'شكل التقديم' : 'Format of Submission' }</span>
                              <img alt="img" src={plus} className={activeKeyChild === "13" ? "plus activeAccChild" : "plus"} />
                            </CustomToggle>
                            <Accordion.Collapse className="collapseHolder" eventKey="13">
                                <Card.Body>
                                {lang === 'ar' ? 
                                <ul>
                                  <li>
                                  سيكون هذا الجزء من الكتابة (1000 كلمة)
                                  </li>
                                  <li>
                                  سيكون هذا الجزء من الكتابة (1000 كلمة)
                                  </li>
                                  <li>
                                  سيكون هذا الجزء من الكتابة (1000 كلمة)
                                  </li>
                                </ul> : 
                                    <ul>
                                    <li>
                                    This will be a part of 1000 word write up
                                    </li>
                                    <li>
                                    This will be a part of 1000 word write up
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
                          <Button onClick={() => showFormView(lang === 'ar' ? 'جائزة الشاب المنجز' : 'Young Achiever Award', ceo)} id="CSuiteOfTheYear">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                        </div>
                      </Accordion>
                    </Accordion.Collapse>
                </Card>
              </Accordion>
            </Tab>
            <Tab className="tabChild" eventKey="tab_2"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'أفضل خدمة عملاء' : 'Best Customer Service' }</span>
                </Fragment>}>
                <Accordion defaultActiveKey="20">
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="20"
                        handleClick={() => {
                          if (activeKeyChild === "20") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("20");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'وصف مختصر' : 'Description' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "20" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="20">
                          <Card.Body>
                          {lang === 'ar' ? 
                            <p>
                            The Award will be given to insurance companies which will demonstrate an excellent level of customer care backed by clear standards: Speed of claim settlement, Ease of communicating with insurer, Transparency and ease of process and employee knowledge and professionalism
                            </p> : 
                            <p>
                            ستمنح الجائزة لشركات التأمين التي ستظهر مستوى ممتازًا من رعاية العملاء مدعومة بمعايير واضحة: سرعة تسوية المطالبات ، سهولة التواصل مع شركة التأمين ، الشفافية وسهولة العملية ومستوي معرفة الموظف والاحتراف
                            </p>
                          }
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>

                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="21"
                        handleClick={() => {
                          if (activeKeyChild === "21") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("21");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "21" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="21">
                          <Card.Body>
                          {lang === 'ar' ? 
                            <ul>
                              <li>
                              سرعة تسوية المطالبات: الوقت المستغرق لتسوية المطالبات
                              </li>
                              <li>
                              اتخذ إجراءً شفافًا لمساعدة العملاء في المفاوضات السياسة ومعالجة المطالبات والتوضيحات المتعلقة بأقساط التأمين. ومن الأمثلة على ذلك: استخدام وسائل الاتصال الفعالة (الدعم المستند إلى تطبيقات الأجهزة المحمولة ، ودعم البريد الإلكتروني والهاتف)
                              </li>
                              <li>
                              دليل على تأثير استراتيجية خدمة العملاء على مستوى الاحتفاظ بالعملاء ورضاهم
                              </li>
                            </ul> : 
                            <ul>
                              <li>
                              Speed of Claim Settlement: Turnaround time for claim settlement
                              </li>
                              <li>
                              Have in place a transparent procedure to assist customer with policy negotiations, claim processing and clarifications on premiums. Examples include:  Use of Efficient communication means (mobile app-based support, email and phone support)
                              </li>
                              <li>
                              Proof of impact of customer care strategy on client retention levels and satisfaction
                              </li>
                            </ul>
                            }
                            
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="22"
                        handleClick={() => {
                          if (activeKeyChild === "22") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("22");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'ما نبحث عنه؟' : 'What we will look for ?' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "22" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="22">
                          <Card.Body>
                          {lang === 'ar' ? 
                            <ul>
                              <li>
                              تقديم معلومات عن العام الماضي فيما يتعلق بالوقت المستغرق لتسوية المطالبات
                              </li>
                              <li>
                              تقديم تفاصيل عن الإجراءات المتعلقة لمساعدة العملاء مع المفاوضات السياسية، تجهيز المطالبات والتوضيح على أقساط
                              </li>
                              <li>
                              أعطاء 3-5 أمثلة على وسائل الاتصال الفعالة التي تم وضعها لتسهيل التواصل مع شركة التأمين
                              </li>
                              <li>
                              تقديم 5 شهادات من العملاء توضح كيف أثرت التدابير المتخذة لتعزيز رضا العملاء على مستويات الاحتفاظ بالعملاء
                              </li>
                            </ul> : 
                              <ul>
                                <li>
                                Give information from past 1 year related to turnaround time for claim settlement
                                </li>
                                <li>
                                Provide details of the procedure related to assisting customer with policy negotiations, claim processing and clarification on premiums
                                </li>
                                <li>
                                Give 3-5 Examples of effective communication means that have been put in place to ease communicating with insurer
                                </li>
                                <li>
                                Provide 5 Customer testimonials demonstrating how the measures taken to enhance customer satisfaction have impacted client retention levels
                                </li>
                              </ul>
                            }
                            
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="23"
                        handleClick={() => {
                          if (activeKeyChild === "23") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("23");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'شكل التقديم' : 'Format of Submission' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "23" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="23">
                          <Card.Body>
                          {lang === 'ar' ? 
                            <ul>
                              <li>
                              سيكون هذا الجزء من الكتابة 1000 كلمة وسيتم تبريرها من خلال المستندات الداعمة حيث يجب تقديم الأرقام الخاصة بالسنة  الماضية في شكل جدول
                              </li>
                              <li>
                              سيكون هذا الجزء من الكتابة (1000 كلمة)
                              </li>
                              <li>
                              يجب تقديم هذا من خلال المستندات الداعمة
                              </li>
                            </ul> : 
                            <ul>
                              <li>
                              This will be a part of 1000 word write up and will be justified by supporting documents where the figures for the past 1 Year should be presented in a form of a table
                              </li>
                              <li>
                              This will be a part of 1000 word write up
                              </li>
                              <li>
                              This needs to be presented through supporting documents
                              </li>
                            </ul>
                            }
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <div className="btnHolder">
                    <Button onClick={() => showFormView(lang === 'ar' ? 'أفضل خدمة عملاء' : 'Best Customer Service', headset)} id="BestCustomerService">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                  </div>
                </Accordion>
            </Tab>
            <Tab className="tabChild" eventKey="tab_3"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'أفضل مبادرة للعام' : 'Best Initiative of the Year' }</span>
                </Fragment>}>
                <Accordion defaultActiveKey="30">
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="30"
                        handleClick={() => {
                          if (activeKeyChild === "30") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("30");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'وصف مختصر' : 'Description' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "30" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="30">
                          <Card.Body>
                          {lang === 'ar' ? 
                          <Fragment>
                            <p>
                            ستمنح هذه الجائزة تقديراً لشركات التأمين الصحي ومقدمي الخدمات الطبية الذين أطلقوا مبادرات تهدف إلى تعزيز الصحة العامة للمجتمع.
                            </p>
                            <p>
                            يمكن أن تكون هذه المبادرة مرتبطة بمبادرة المسؤولية الاجتماعية للشركاتCSR) )  أو مبادرة صحة السكان أو مبادرة الصحة العامة
                            </p>
                          </Fragment> : 
                          <Fragment>
                            <p>
                            This award will recognise health insurance companies and medical service providers that have launched an initiatives aimed at promoting public health of the community.
                            </p>
                            <p>
                            This initiative can be related to  Corporate Social Responsibility (CSR) Initiative, population health initiative or public health initiative
                            </p>
                          </Fragment>
                            }
                            
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>

                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="31"
                        handleClick={() => {
                          if (activeKeyChild === "31") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("31");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "31" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="31">
                          <Card.Body>
                          {lang === 'ar' ? 
                            <ul>
                              <li>
                              مبادرة يمكن أن تشمل المسؤولية الاجتماعية للشركات (مبادرة المسؤولية الاجتماعية للشركات أو مبادرة صحة السكان أو مبادرة الصحة العامة التي يتخذها رجال الأعمال على المستوى الوطني لتعزيز الإدماج الاجتماعي والمجتمعات المستدامة وتعزيز الصحة العامة ورفاهية المجتمع
                              </li>
                              <li>
                              إظهار الأدلة على تأثير البرنامج / مبادرة على المجموعة المستهدفة
                              </li>
                              <li>
                              إظهار الإبداع أو الابتكار في المحتوى أو العرض التقديمي أو التسليم أثناء الترويج للمبادرة
                              </li>
                            </ul> : 
                            <ul>
                              <li>
                              Initiative which can include Corporate Social Responsibility (CSR Initiative, Population Health Initiative or Public Health Initiative taken by the business at a national level in promoting social inclusion, sustainable communities, promoting public health and wellbeing of the community
                              </li>
                              <li>
                              Demonstrate evidence of the impact that the programme/initiative had on the target group
                              </li>
                              <li>
                              Demonstrate creativity or innovation in content, presentation or delivery while promoting the initiative
                              </li>
                            </ul>
                            }
                            
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="32"
                        handleClick={() => {
                          if (activeKeyChild === "32") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("32");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'ما نبحث عنه؟' : 'What we will look for ?' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "32" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="32">
                          <Card.Body>
                          {lang === 'ar' ? 
                          <ul>
                            <li>
                            قدم 2-3 أمثلة على المبادرات التي اتخذتها الشركة في العام الماضي على المستوى الوطني من أجل تعزيز الإدماج الاجتماعي والمجتمعات المستدامة وتعزيز الصحة العامة ورفاهية المجتمع
                            </li>
                            <li>
                            أعط 3 تأثير رئيسي للبرنامج / المبادرة المذكورة أعلاه على المجموعة المستهدفة
                            </li>
                            <li>
                            أعط أمثلة على اثنين من التدابير الفريدة التي تم اتخاذها لتعزيز المبادرات المذكورة أعلاه
                            </li>
                          </ul> : 
                          <ul>
                            <li>
                            Give 2-3 examples of initiatives that has been taken in the past 1 year  at national level by the company in order to promote social inclusion, sustainable communities, promoting public health  and wellbeing of the society
                            </li>
                            <li>
                            Give 3 key impact does the programme/ initiative mentioned above have on the target group
                            </li>
                            <li>
                            Give examples of 2 unique measures were taken to promote the initiatives mentioned above?
                            </li>
                          </ul>
                            }
                            
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="33"
                        handleClick={() => {
                          if (activeKeyChild === "33") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("33");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'شكل التقديم' : 'Format of Submission' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "33" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="33">
                          <Card.Body>
                          {lang === 'ar' ? 
                          <ul>
                            <li>
                              سيكون هذا الجزء من الكتابة (1000 كلمة)
                            </li>
                            <li>
                              سيكون هذا الجزء من الكتابة (1000 كلمة)
                            </li>
                            <li>
                              سيكون هذا الجزء من الكتابة (1000 كلمة)
                            </li>
                          </ul> : 
                          <ul>
                            <li>
                              This will be a part of 1000 word write up
                            </li>
                            <li>
                              This will be a part of 1000 word write up
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
                    <Button onClick={() => showFormView(lang === 'ar' ? 'أفضل مبادرة للعام' : 'Best Initiative of the Year', Group)} id="BestInitiativeOfTheYear">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                  </div>
                </Accordion>
            </Tab>
            <Tab className="tabChild" eventKey="tab_4"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'المُبتكر الرقمي للعام' : 'Digital Innovator of the Year' }</span>
                </Fragment>}>
                <Accordion defaultActiveKey="40">
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="40"
                        handleClick={() => {
                          if (activeKeyChild === "40") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("40");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'وصف مختصر' : 'Description' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "40" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="40">
                          <Card.Body>
                          {lang === 'ar' ? 
                              <p>
                              تُمنح هذه الجائزة لشركة التأمين الصحي ومزود الخدمات الطبية الذي يمتلك أفضل التقنيات والحلول الرقمية لتحسين أعمالهم وتجربة العميل الشاملة على مدار الـ 12 شهرًا الماضية
                              </p> : 
                              <p>
                              This Award is given to the health insurance company & Medical service provider that has best harnessed technology and digital solutions to improve their business, and overall client experience over the past 12 months
                              </p>
                            }
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>

                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="41"
                        handleClick={() => {
                          if (activeKeyChild === "41") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("41");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "41" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="41">
                          <Card.Body>
                          {lang === 'ar' ? 
                                <ul>
                                <li>
                                توضيح الحاجة لتطبيق التكنولوجيا و نتائج تفعيلها
                                </li>
                                <li>
                                استخدام المنصات الرقمية والتكنولوجيا على مدار الاثني عشر شهرًا الماضية والتي أسفرت عن نتائج إيجابية . مثال, الكفاءة وتوفير التكاليف
                                </li>
                                <li>
                                مواءمة استخدام التكنولوجيا مع أهداف المنظمة وغاياتها
                                </li>
                              </ul> : 
                              <ul>
                                <li>
                                Demonstrate the need and outcome identification process for implementation of the technology
                                </li>
                                <li>
                                Use of digital platforms and technology over the past 12 months that has resulted in positive outcomes for Instance efficiency and cost saving
                                </li>
                                <li>
                                Alignment of the use of technology with the organization’s goals and objectives
                                </li>
                              </ul>
                              }
                            
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="42"
                        handleClick={() => {
                          if (activeKeyChild === "42") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("42");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'ما نبحث عنه؟' : 'What we will look for ?' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "42" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="42">
                          <Card.Body>
                          {lang === 'ar' ? 
                              <ul>
                                <li>
                                الاحتياجات التي تمت معالجتها من خلال تنفيذ هذه المنصات الرقمية والتكنولوجيا
                                </li>
                                <li>
                                وصف المنصات الرقمية والتكنولوجيا التي كانت مستخدمة خلال الـ 12 شهرًا الماضية
                                </li>
                                <li>
                                قدم 2-3 أمثلة تتعلق بتأثير المنصات الرقمية والتكنولوجيا على الكفاءة وتوفير التكاليف
                                </li>
                                <li>
                                تقديم 2-3 أمثلة للطرق التي تساعد فيها المنصات الرقمية والتكنولوجيا المنظمة على تحقيق أهدافها وغاياتها
                                </li>
                              </ul> : 
                              <ul>
                                  <li>
                                  Needs that were being addressed through the implementation of these digital platforms and technology
                                  </li>
                                  <li>
                                  Description of digital platforms and technology that was being used over the past 12 months
                                  </li>
                                  <li>
                                  Give 2-3 Examples related to impact that digital platforms and technology had on the efficiency and cost savings
                                  </li>
                                  <li>
                                  Give 2-3 Examples of Ways in which digital platforms and technology will help the organization to achieve its goals and objectives
                                  </li>
                                </ul>
                                }
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="43"
                        handleClick={() => {
                          if (activeKeyChild === "43") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("43");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'شكل التقديم' : 'Format of Submission' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "43" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="43">
                          <Card.Body>
                          {lang === 'ar' ? 
                            <ul>
                              <li>
                              سيكون هذا الجزء من الكتابة (1000 كلمة)
                              </li>
                              <li>
                              سيكون هذا الجزء من الكتابة (1000 كلمة)
                              </li>
                              <li>
                              يجب تقديم الأرقام الخاصة بالتحسين في الكفاءة وتوفير التكاليف خلال العام الماضي في جدول كرقم وكنسبة مئوية
                              </li>
                              <li>
                              سيكون هذا الجزء من الكتابة (1000 كلمة)
                              </li>
                            </ul> : 
                            <ul>
                                <li>
                                This will be a part of 1000 word write up
                                </li>
                                <li>
                                This will be a part of 1000 word write up
                                </li>
                                <li>
                                The figures for the improvement in efficiency and cost saving over the past 1 year should be presented in a table as a figure and as a percentage 
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
                    <Button onClick={() => showFormView(lang === 'ar' ? 'المُبتكر الرقمي للعام' : 'Digital Innovator of the Year', technology)} id="DigitalInnovatorOfTheYear">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                  </div>
                </Accordion>
            </Tab>
            <Tab className="tabChild" eventKey="tab_5"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'شركة التأمين الصحي للعام' : 'Health Insurance Company of the Year' }</span>
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
                            <Fragment>
                              <p>
                              مُنحت لريادة السوق في خدمة العملاء ، وقيادة لا مثيل لها في معالجة المطالبات / التسهيل ، ونمو الأعمال ، والترويج النشط لأهمية التأمين الصحي ، وابتكار المنتجات ، والمسؤولية الاجتماعية للشركات
                              </p>
                              <strong>
                              تعتمد هذه الجائزة على تصنيف شركات التأمين:
                              </strong>
                              <p>
                              تُمنح لشركات التأمين الصحي الكبيرة والمتوسطة / الصغيرة (بنائا على أساس الأقساط)
                              </p>
                            </Fragment> : 
                            <Fragment>
                              <p>
                                Awarded for market leadership in customer service, unmatched leadership in claim handling/facilitation, business growth, active promotion of the importance of health insurance, product innovation and Corporate Social Responsibility.
                              </p>
                              <strong>
                                This award will be based on the classification of Insurance Companies:
                              </strong>
                              <p>
                                Awarded to both Large and Mid/Small size health insurance companies (based on premiums) 
                              </p>
                            </Fragment>
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
                            إظهار دليل على نمو الأعمال والربحية بشكل مستديم في محفظة التأمين الصحي
                            </li>
                            <li>
                            إظهار الدليل على الترويج الفعال لأهمية التأمين الصحي كوسيلة لحماية السكان من اعتلال الصحة
                            </li>
                            <li>
                            معالجة ووقت التسوية المطالبة
                            </li>
                            <li>
                            استخدام الأدوات والتقنيات الحديثة لتحسين تجربة المطالبات وخدمة العملاء لحاملي الوثائق 
                            </li>
                            <li>
                            شهادات العملاء
                            </li>
                            <li>
                            المبادرات و يمكن أن تشمل المسؤولية الاجتماعية للشركات (مبادرة المسؤولية الاجتماعية للشركات أو مبادرة صحة السكان أو مبادرة الصحة العامة التي تتخذها الأعمال التجارية على المستوى الوطني لتعزيز الإندماج الاجتماعي والمجتمعات المستدامة وتعزيز الصحة العامة ورفاهية المجتمع والتأثير الذي تحقق من خلال المبادرة(
                            </li>
                            <li>
                            ابتكار/ تطوير المنتجات
                            </li>
                          </ul> : 
                          <ul>
                              <li>
                              Showing evidence of sustainable business growth and profitability in its health insurance portfolio
                              </li>
                              <li>
                              Showing evidence of active promotion of the importance of health insurance as a means of protecting the population against ill health
                              </li>
                              <li>
                              Claim Processing and Settlement Time
                              </li>
                              <li>
                              Use of modern tools and technology to improve claims experience and customer service for policyholders 
                              </li>
                              <li>
                              Clients’ testimonials
                              </li>
                              <li>
                              Initiative which can include Corporate Social Responsibility (CSR Initiative, Population Health Initiative or Public Health Initiative taken by the business at a national level in promoting social inclusion, sustainable communities, promoting public health and wellbeing of the community and the impact achieved through the initiative
                              </li>
                              <li>
                              Product Innovation
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
                            دليل على النمو المستدام للأعمال والربحية (من خلال الحقائق والأرقام - نمو الإيرادات / الإيرادات ، نمو اقساط التأمين، أرقام صافي الربح للسنوات الخمس الماضية) في محفظة التأمين الصحي
                            </li>
                            <li>
                            كيف روجت الشركة لأهمية التأمين الصحي في العام الماضي (يجب تقديم 4 أمثلة على الأقل ، 2 عبر الإنترنت و 2 خارج شبكة الانترنت)
                            </li>
                            <li>
                            ما هي الرسالة الرئيسية  المستخدمة في العروض الترويجية (يجب تقديم 4 أمثلة على الأقل)؟
                            </li>
                            <li>
                            تقديم معلومات تتعلق بما يلي:
                            <ul>
                              <li>
                              عدد الشكاوى التي تم تلقيها في العام الماضي
                              </li>
                              <li>
                              نسبة تسوية المطالبات وقت تسوية المطالبات" في العام الماضي
                              </li>
                            </ul>
                            </li>
                            <li>
                            يجب تقديم مثال او اثنين  علي الأدوات والتقنيات التي تم تنفيذها في العام الماضي لتحسين تجربة تقديم المطالبات/التسويات لصاحب البوليصة
                            </li>
                            <li>
                            يجب تقديم مثال او اثنين على تأثير هذه الأدوات والتقنيات على نسبة تسوية المطالبات/التسويات  ووقت تسوية المطالبات/التسويات  
                            </li>
                            <li>
                            تقديم 5 شهادات من العملاء
                            </li>
                            <li>
                            يجب تقديم  مثال او اثنين على المبادرات التي اتخذتها الشركة في السنوات الأولى الماضية على المستوى الوطني من أجل تعزيز الإدماج الاجتماعي والمجتمعات المستدامة وتعزيز الصحة العامة ورفاهية المجتمع
                            </li>
                            <li>
                            يجب تقديم  مثال او اثنين على التأثير الناتج عن المبادرات
                            </li>
                            <li>
                            ما هو المنتج الجديد الذي تم إطلاقه / تقديمه في العام الماضي؟
                            </li>
                            <li>
                            يجب تقديم  3 أمثلة على الميزات الفريدة للمنتج؟ 
                            </li>
                            <li>
                            أعط مثالين لكيفية تأثير المنتج على العمل ومستوى رضا العملاء
                            </li>
                          </ul> : 
                             <ul>
                             <li>
                             Evidence of sustainable business growth and profitability (through facts and figures - Revenue/revenue growth, Premium growth, Net Profit Figures for the Last five Years ) in health insurance portfolio
                             </li>
                             <li>
                             How does the company promoted about the importance of health insurance in the last 1 Year (Give at least 4 Examples, 2 Online and 2 Offline)? 
                             </li>
                             <li>
                             What's the key message in the promotion (Give at least 4 Examples)?
                             </li>
                             <li>
                             Provide information related to:
                             <ul>
                               <li>
                               Number of complaints received in the past 1 Year
                               </li>
                               <li>
                               Claim settlement ratio in the past 1 Year
                               </li>
                             </ul>
                             </li>
                             <li>
                             Give 1-2 examples of tools and technologies implemented in the past 1 year to improve claim filing experience for the policy holder
                             </li>
                             <li>
                             Give 1-2 examples of Impact that these tools and technologies have on the claim settlement ratio and claim settlement time
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
                             <li>
                             What  new product has been launched/introduced in the past 1 Year? 
                             </li>
                             <li>
                             Give 3 examples of unique features of the product?
                             </li>
                             <li>
                             Give 2 examples of how the product has an impact on the business and customer satisfaction level
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
                            سيكون هذا جزءًا من كتابة 1000 كلمة “يجب تقديم الحقائق والأرقام في شكل رسم بياني”
                            </li>
                            <li>
                            سيكون هذا جزءًا من كتابة 1000 كلمة
                            </li>
                            <li>
                            سيكون هذا جزءًا من كتابة 1000 كلمة وسيتم تصديقها من خلال المستندات الداعمة حيث يجب تقديم الأرقام الخاصة بالسنة الماضية في شكل جدول
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
                            <li>
                            سيكون هذا جزءًا من كتابة 1000 كلمة
                            </li>
                          </ul> : 
                          <ul>
                              <li>
                              This will be part of 1000 word writeup Facts and figures should be presented in a bar chart format
                              </li>
                              <li>
                              This will be a part of 1000 word write up
                              </li>
                              <li>
                              This will be a part of 1000 word write up and will be justified by supporting documents where the figures for the past 1 year should be presented in a form of a table
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
                              <li>
                              This will be a part of 1000 word write up
                              </li>
                            </ul>
                            }
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <div className="btnHolder">
                    <Button onClick={() => showFormView(lang === 'ar' ? 'شركة التأمين الصحي للعام' : 'Health Insurance Company of the Year', healthInsurance)} id="HealthInsuranceCompanyOfTheYear">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                  </div>
                </Accordion>
            </Tab>
        </Tabs>
        
      </Container>
    </section>
  );
};

export default Health;