import React, { Fragment, useState, useEffect } from 'react';
import { Container, Tabs, Tab, Accordion, Card, useAccordionToggle, Button  } from 'react-bootstrap';
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
const Medical = () => {
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
    showForm ? <ApplyForm formName={formName} awardIcon={awardIcon} /> : <section className="awardsTabs customAwardsTabs">
      <div className="awardsTabsHeader">
      {lang === 'ar' ? 'جوائز مقدمي الخدمات الصحية' : 'Medical Service Providers Awards' }
      </div>
      <Container>
        <Tabs defaultActiveKey="tab_2" id="uncontrolled-tab-example">
            <Tab className="tabChild" eventKey="tab_2"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'مقدم خدمات طبية للعام' : 'Medical Provider of the Year' }</span>
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
                          <Fragment>
                          <p>
                          ستمنح الجائزة تقديراً لمقدمي الخدمات الطبية الذين أحدثوا تأثيراً في قطاع الرعاية الصحية من خلال الاستثمارات الكبرى والشراكة والصفقات التجارية في العام الماضي وقدمت مبادرات مبتكرة كان لها تأثير إيجابي على رضا العملاء وصناعة الرعاية الصحية.
                          </p>
                          <strong>
                          تعتمد هذه الجائزة على تصنيف مقدمي الخدمات الطبية:
                          </strong>
                          <p>
                          تُمنح لمقدمي الرعاية الصحية الكبيرة والمتوسطة / الصغيرة (بناءً على عدد الأسرة)
                          </p>
                        </Fragment>
                          : 
                          <Fragment>
                            <p>
                            The award will recognize medical providers which have made an impact in the healthcare sector through major investment ,partnership ,business deal in the past one year and introduced innovative initiatives that made a positive impact on its customer satisfaction and healthcare industry
                            </p>
                            <strong>
                            This award will be based on the classification of Medical Providers:
                            </strong>
                            <p>
                            Awarded to both Large and Mid/Small size healthcare providers (based on the number of beds) 
                            </p>
                          </Fragment>
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
                            تقديم دلائل على نمو الأعمال المستديم 
                            </li>
                            <li>
                            تأثير الشراكة الاستراتيجية / العلاقات التجارية أو الاستثمار الكبير الذي حققه مقدم الخدمة وتأثيره على قطاع الرعاية الصحية في المملكة العربية السعودية
                            </li>
                            <li>
                            تم اتخاذ مبادرات لتقديم تجربة محسنة للمريض تتمحور حول رحلة المريض من البداية إلى النهاية (من الحصول على موعد إلى إعداد الفواتير و عملية الفوترة إلى متلقي الرعاية الصحية)
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
                              Show Evidence of sustainable business growth 
                              </li>
                              <li>
                              The impact of the strategic partnership/Business Relationships or major investment that provider has made and its impact on the wider healthcare sector in KSA 
                              </li>
                              <li>
                              Taken initiatives to deliver improved patient experience centered around patient journey from start to finish (From getting an appointment to billing to the billing process to  receiving healthcare)
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
                            دليل على النمو المستدام للأعمال والربحية (من خلال الحقائق والأرقام - نمو الإيرادات / الإيرادات ، أرقام صافي الربح للسنوات الخمس الماضية) في محفظة التأمين الصحي
                            </li>
                            <li>
                            تقديم وصفًا للشراكات الإستراتيجية الرئيسية أو الاستثمارات الرئيسية التي تمت في العام الماضي
                            </li>
                            <li>
                            الاهداف الرئيسية وراء الشراكات الإستراتيجية أو الاستثمارات الكبيرة 
                            </li>
                            <li>
                            تقديم 4-5 أمثلة على النتائج الرئيسية والأثر الذي تحقق من خلال الشراكات أو الاستثمارات في قطاع التأمين الصحي في المملكة العربية السعودية
                            </li>
                            <li>
                            أظهر الحاجة إلى تنفيذ مبادرة جديدة لتحسين تجربة المريض في العام الماضي
                            </li>
                            <li>
                            وصفً للمبادرة
                            </li>
                            <li>
                            أعط 3 أمثلة عن تأثيرها على مستوى رضا العملاء
                            </li>
                            <li>
                            تقديم 5 شهادات من العملاء
                            </li>
                            <li>
                            تقديم  مثال او اثنين على المبادرات التي اتخذتها الشركة في السنوات الأولى الماضية على المستوى الوطني من أجل تعزيز الإدماج الاجتماعي والمجتمعات المستدامة وتعزيز الصحة العامة ورفاهية المجتمع
                            </li>
                            <li>
                            تقديم  مثال او اثنين على التأثير الذي تم تحقيقه من خلال المبادرة
                            </li>
                          </ul>
                            : 
                            <ul>
                            <li>
                            Evidence of sustainable business growth and profitability (through facts and figures -Revenue/revenue growth and Net Profit Figures for the Last five Years)
                            </li>
                            <li>
                            Give description about the major strategic partnership or the major investment made in the past 1 Year
                            </li>
                            <li>
                            Key objective behind pursuing the strategic partnership or the major investment
                            </li>
                            <li>
                            Give 4-5 Examples of  key outcome and the impact achieved through the partnership or the major investment on the wider KSA health insurance sector
                            </li>
                            <li>
                            Demonstrate the need to implement a new initiative to enhance patient experience in the past 1 Year
                            </li>
                            <li>
                            Give description about the initiative
                            </li>
                            <li>
                            Give 3 examples of what impact does it have on the customer satisfaction level
                            </li>
                            <li>
                            Provide 5 client testimonials
                            </li>
                            <li>
                            Give 1-2 examples of initiatives taken in the past 1 years  at national level by the company in order to promote social inclusion, sustainable communities, promoting public health  and wellbeing of the society
                            </li>
                            <li>
                            Give 1-2 Examples of impact that have achieved been through the initiative
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
                          سيكون هذا جزءًا من كتابة 1000 كلمة "ويجب تقديم نمو الإيرادات / الإيرادات وأرقام صافي الربح للسنوات الخمس الماضية في شكل رسم بياني"
                          </li>
                          <li>
                          سيكون هذا جزءًا من 1000 كلمة كتابة
                          </li>
                          <li>
                          سيكون هذا جزءًا من 1000 كلمة كتابة
                          </li>
                          <li>
                          يجب تقديم هذا من خلال المستندات الداعمة
                          </li>
                          <li>
                          سيكون هذا جزءًا من 1000 كلمة كتابة
                          </li>
                        </ul>
                          : 
                          <ul>
                              <li>
                              This will be part of 1000 word writeup and Revenue/revenue growth and Net Profit Figures for the Last five Years should be presented in a bar chart format
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
                    <Button onClick={() => showFormView(lang === 'ar' ? 'مقدم الخدمة الصحية للعام' : 'Health Provider of the Year', healthInsurance)} id="HealthProviderOfTheYear">{lang === 'ar' ? 'ترشح' : 'Nominate' }</Button>
                  </div>
                </Accordion>
            </Tab>
            <Tab className="tabChild" eventKey="tab_3"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>{lang === 'ar' ? 'أفضل خدمة عملاء' : 'Best Customer Service' }</span>
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
                            <p>
                            ستمنح الجائزة لشركات التأمين التي ستظهر مستوى ممتازًا من رعاية العملاء مدعومة بمعايير واضحة: سرعة تسوية المطالبات ، سهولة التواصل مع شركة التأمين ، الشفافية وسهولة العملية ومستوي معرفة الموظف والاحتراف
                            </p> : 
                            <p>
                            The Award will be given to insurance companies which will demonstrate an excellent level of customer care backed by clear standards: Speed of claim settlement, Ease of communicating with insurer, Transparency and ease of process and employee knowledge and professionalism
                            </p>
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
                        <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' } </span>
                        <img alt="img" src={plus} className={activeKeyChild === "31" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="31">
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
                  <span>{lang === 'ar' ? 'أفضل مبادرة للعام' : 'Best Initiative of the Year' }</span>
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
                        eventKey="51"
                        handleClick={() => {
                          if (activeKeyChild === "51") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("51");
                          }
                        }}
                      >
                        <span>{lang === 'ar' ? 'معيار التقييم' : 'The evaluation criteria' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "51" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="51">
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
        </Tabs>
        
      </Container>
    </section>
  );
};

export default Medical;