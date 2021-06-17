import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import plus from '../../dist/img/plus.svg';
import { Container, Accordion, Card, useAccordionToggle, Button, Col, Row, Form } from 'react-bootstrap';


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
export default function ApplyForm(props) {

useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  const formik = useFormik({
    initialValues: {
        companyName: "",
        companyType: "",
        companyUrl: "",
        companyDescription: "",
        contactTitle: "",
        contactNo: "",
        emailAddress: "",
        awardList: props.formName,
        callEntry: "",
        ContactName: "",
        CompanyLogo: "",
        AttachFile1: "",
        AttachFile2: ""
    },
    validationSchema: Yup.object({
        companyName: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        companyType: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        companyUrl: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        companyDescription: Yup.string()
            .min(100, lang === 'ar' ? '100 حرف على الاقل' : "Mininum 100 characters")
            .max(7000, lang === 'ar' ? 'لا يزيد عن 7000 حرف' : "Maximum 7000 characters")
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        contactTitle: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        contactNo: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        emailAddress: Yup.string()
            .email("Invalid email format")
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        awardList: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        callEntry: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        ContactName: Yup.string()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" ),
        CompanyLogo: Yup.mixed()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" )
            .test('fileSize', lang === 'ar' ? 'حجم الملف كبير' : "File is too large", value => value ? value.size <= 999999999999999 : null)
            .test('fileType', lang === 'ar' ? 'PDF فقط' : "PDF Only", value => value ? ['application/pdf'].includes(value.type) : null ),
        AttachFile1: Yup.mixed()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" )
            .test('fileSize', lang === 'ar' ? 'حجم الملف كبير' : "File is too large", value => value ? value.size <= 999999999999999 : null)
            .test('fileType', lang === 'ar' ? 'PDF فقط' : "PDF Only", value => value ? ['application/pdf'].includes(value.type) : null ),
        AttachFile2: Yup.mixed()
            .required(lang === 'ar' ? 'حقل مطلوب!' : "Required!" )
            .test('fileSize', lang === 'ar' ? 'حجم الملف كبير' : "File is too large", value => value ? value.size <= 999999999999999 : null)
            .test('fileType', lang === 'ar' ? 'PDF فقط' : "PDF Only", value => value ? ['application/pdf'].includes(value.type) : null ),
    }),
    onSubmit: values => {
        let CompanyLogoFile = values.CompanyLogo;
        let AttachFile1File = values.AttachFile1;
        let AttachFile2File = values.AttachFile2;
        let formData = new FormData();
        formData.append('CompanyLogo', CompanyLogoFile);
        formData.append('AttachFile1', AttachFile1File);
        formData.append('AttachFile2', AttachFile2File);
        const options = {
            headers: {
                'Authorization': 'hkjmgfrdklytrslssadjyrmakeinssocmdynkg',
                "Content-Type": "multipart/form-data"
            }
        };

        axios.post(`http://89.189.232.130/api/Nomination/UploadNomination?
            &companyName=${values.companyName}
            &companyType=${values.companyType}
            &companyUrl=${values.companyUrl}
            &companyDescription=${values.companyDescription}
            &contactTitle=${values.contactTitle}
            &contactNo=${values.contactNo}
            &emailAddress=${values.emailAddress}
            &awardList=${values.awardList}
            &callEntry=${values.callEntry}
            &ContactName=${values.ContactName}`,
        formData,
        options)
        .then(res => {
             console.log('Res ',res)
        })
        .catch(err => {
            console.log('Err ', err)
        });
    },
  });
  const [activeKeyChild, setActiveKeyChild] = useState("30");
  return (
    <Container>
        <div className="applyFormHeader">
            <img src={props.awardIcon} alt="icon" />
            <h3>{props.formName}</h3>
        </div>
        <div className="tabChild">
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
                        <span>{lang === 'ar' ? 'معايير الأهلية' : 'Eligibility Criteria' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "30" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="30">
                          <Card.Body>
                            {lang === 'ar' ? 
                            <ul>
                                <li>
                                يتم الترحيب بالمشاركات من جميع المنظمات الدولية والمحلية)شركات التأمين و (TPAs)  ومقدمي الخدمات الطبية ( التي تعمل بنشاط في المملكة العربية السعودية
                                </li>
                                <li>
                                بخصوص الجائزة الفردية ، يمكن للمرشحين أن يرشحوا أنفسهم بأنفسهم أو يمكن أن يتم ترشيحهم من قبل شركة التأمين
                                </li>
                                <li>
                                يجب تنفيذ المنتج / المبادرة / الابتكار / الخدمة بالكامل في عمليات المملكة العربية السعودية للمنظمة المشاركة
                                </li>
                                <li>
                                يجب تطوير المنتج / المبادرة / الابتكار / الخدمة المطبقة داخل المنظمة المشاركة. لا يمكن للمؤسسة المشاركة نيابة عن وحداتها الشقيقة أو المنظمة الأم
                                </li>
                            </ul>
                            : 
                            <ul>
                                <li>
                                Entries are welcomed from all international and local organizations (Insurance companies, Third Party Administrators (TPAs), and Medical Service Providers) actively operating in Saudi Arabia.
                                </li>
                                <li>
                                For individual award the candidates can self-nominate themselves or can be nominated by insurance company.
                                </li>
                                <li>
                                The product/initiative/innovation/service should be completely executed in the Saudi Arabian operations of the participant organization.
                                </li>
                                <li>
                                The product/initiative/innovation/service nominated applied must be developed within the participating organization. An organization cannot participate on behalf of its sister units or parent organization
                                </li>
                            </ul>
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
                        <span>{lang === 'ar' ? 'إرشادات الدخول' : 'Entry Guidelines' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "31" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="31">
                          <Card.Body>
                            {lang === 'ar' ? 
                            <ul>
                                <li>
                                اقرأ معايير فئة الجائزة التي تريد المشاركة فيها
                                </li>
                                <li>
                                يجب أن يكون جميع المشاركات شرحًا مكتوبًا باللغة الإنجليزية ويجب أن تتناول على وجه التحديد معايير الجائزة التي تم الاشتراك فيها. يجب ألا يزيد عدد الكلمات المكتوبة عن 1000 كلمة ويجب إرفاقها كملف PDF. إذا تجاوز عدد الكلمات 1000 كلمة ، فسيتم إهمال الكلمات الزائدة من قبل القضاة
                                </li>
                                <li>
                                يجب تقديم المعلومات الداعمة الإضافية باللغة الإنجليزية كملف PDF - بحد أقصى 3 صفحات
                                </li>
                                <li>
                                اكمال نموذج الترشيح عبر الإنترنت وتحميل ملفًا مكتوبًا يضم 1000 كلمة مع مواد داعمة إضافية مع النموذج وارسال مشاركتك عبر الإنترنت
                                </li>
                            </ul>
                            : 
                            <ul>
                              <li>
                              Read the criteria for the award category for which you want to enter
                              </li>
                              <li>
                              All entries must be a written explanation in English and must specifically address the award criteria for which entry has been made. The write-up should not be more 1,000 words and should be attached as a PDF. Should the word count exceed 1,000 words, the excess words will be neglected by the judges
                              </li>
                              <li>
                              Additional supporting information should be supplied in English as a PDF – to a limit of 3 pages 
                              </li>
                              <li>
                              Complete the online nomination form and upload the 1000 word write-up together with additional supporting material with the form and submit your entry online
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
                        <span>{lang === 'ar' ? 'قاعدة الدخول' : 'Rule of Entry' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "32" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="32">
                          <Card.Body>
                            {lang === 'ar' ? 
                            <strong>
                            من خلال إرسال المشاركة ، يؤكد المشارك أنه قد قرأ ووافق على "قواعد الدخول" ويفهم أن هذه القواعد تنطبق الآن:
                            </strong>
                            : 
                            <strong>
                            By submitting an entry, the entrant confirms they have read and agreed with the ‘Rules of entry’ and understand these now apply:
                            </strong>
                            }
                            {lang === 'ar' ? 
                            <ul>
                                <li>
                                الدخول مجاني تمامًا
                                </li>
                                <li>
                                يجب استكمال جميع حقول استمارة الترشيح من جميع النواحي. ستؤدي النماذج غير المكتملة إلى فقدان الأهلية
                                </li>
                                <li>
                                سيتم قبول المشاركات باللغة الإنجليزية فقط ، بما في ذلك الوثائق الداعمة
                                </li>
                                <li>
                                يجب استلام جميع الإدخالات بواسطة <strong>XXXX يتم تأكيدها من قبل CCHI</strong>
                                </li>
                                <li>
                                إذا كنت تدخل في أكثر من فئة جائزة ، فيجب ملء استمارة ترشيح منفصلة لكل جائزة علي حدي
                                </li>
                                <li>
                                تحتفظ CCHI بالحق في استخدام شعار الشركة الوافدة للتسويق المرتبط بجوائز CCHI في المطبوعات أو وسائل التواصل الاجتماعي أو على موقعنا الإلكتروني
                                </li>
                                <li>
                                تحتفظ CCHI بالحق في الاحتفاظ بشعارات الشركة وتفاصيل الشركة لنشرها لاحقًا فيما يتعلق بجوائز CCHI
                                </li>
                                <li>
                                إذا رغب أحد المشتركين في الانسحاب من الجوائز ، يرجى إبلاغ CCHI كتابيًا في أي وقت حتى أسبوعين قبل حفل توزيع الجوائز النهائي
                                </li>
                                <li>
                                يرجى التأكد من أن المعلومات المقدمة دقيقة وصحيحة. لا تتحمل CCHI أي مسؤولية عن أي معلومات مقدمة بشكل غير صحيح
                                </li>
                                <li>
                                إذا لزم الأمر ، سيقوم الحكام بإجراء مقابلات مع المرشحين للتحقق من صحة جوانب معينة من الترشيح المقدم
                                </li>
                                <li>
                                سيكون قرار لجنة التحكيم نهائيًا وملزمًا لجميع المرشحين
                                </li>
                                <li>
                                سيتم الإعلان عن الفائزين في <strong>XXXX يتم تأكيدها من قبل CCHI</strong> في حفل توزيع الجوائز الذي يقام في فندق خمس نجوم <strong>XXXX يتم تأكيدها من قبل CCHI</strong> والبث الافتراضي 
                                </li>
                                <li>
                                تحتفظ CCHI بالحق في رفض أي دخول لأي سبب من الأسباب
                                </li>
                                <li>
                                سيؤدي تقديم طلب في فئة الجائزة غير ذات الصلة إلى رفض المشاركة
                                </li>
                                <li>
                                قد يتضمن إدخالك أيضًا تقديم معلومات حساسة و / أو توفير مواد الملكية الفكرية الخاصة بك. يجب تمييز هذه المعلومات الحساسة على أنها "سرية تمامًا". نتعهد باحترام كل هذه الإشعارات فيما يتعلق بالتغطية التحريرية والدعاية
                                </li>
                            </ul>
                            : 
                            <ul>
                              <li>
                              Entry is completely free of charge
                              </li>
                              <li>
                              All fields of the nomination form must be completed in all respect; incomplete forms will result in disqualification
                              </li>
                              <li>
                              Entries will be accepted in English language only, including the supporting documentation
                              </li>
                              <li>
                              All entries must be received by <strong>XXXX (To be confirmed by CCHI)</strong>
                              </li>
                              <li>
                              If you are entering in more than one award category, then a separate nomination form has to be filled for each entry
                              </li>
                              <li>
                              CCHI reserves the right to use entrants company logo for associated marketing of the CCHI awards in print, social media or on our website
                              </li>
                              <li>
                              CCHI reserves the right to retain company logos and company detail for subsequent publication in relation to the CCHI awards
                              </li>
                              <li>
                              Should a Participant wish to withdraw from the Awards, kindly inform CCHI in writing at any time up to two weeks prior to the final awards ceremony
                              </li>
                              <li>
                              Please ensure that the information submitted is accurate and correct. CCHI accepts no responsibility for any incorrectly submitted information
                              </li>
                              <li>
                              If required, Judges will conduct interviews with nominees to validate certain aspects of the submitted nomination
                              </li>
                              <li>
                              The jury decision will be final and binding on all nominees
                              </li>
                              <li>
                              The winners will be announced on <strong>XXXX (To be confirmed by CCHI)</strong> at an award ceremony held in a Five Star hotel <strong>(Venue to be confirmed by CCHI)</strong> and virtual streaming 
                              </li>
                              <li>
                              CCHI reserves the right to reject any entry for any reason
                              </li>
                              <li>
                              Submitting entry for non-relevant award category will lead to rejection of the entry
                              </li>
                              <li>
                              Your entry may also involve submitting sensitive information and/or supplying your intellectual property material. Such sensitive information should be marked up as ‘strictly in confidence’. We will undertake to respect all such notification with regard to editorial coverage and publicity
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
                        <span>{lang === 'ar' ? 'دعوة الدخول' : 'Format of Submission' }</span>
                        <img alt="img" src={plus} className={activeKeyChild === "33" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="33">
                          <Card.Body>
                            {lang === 'ar' ? 
                            <ul>
                                <li>
                                سيتم الإعلان عن الدعوة للمشاركة في الجوائز من خلال منصة إعلامية واحدة أو أكثر والبريد الإلكتروني وموقع الجوائز الرسمي
                                </li>
                                <li>
                                يمكن للمشترك التقدم للحصول على الجوائز عن طريق الدخول إلى الموقع الإلكتروني <a href="www.cchi.gov.sa" target="_blank">www.cchi.gov.sa</a> وملء استمارة الترشيح مع تحميل شرح الكتابة والوثائق الداعمة مباشرة على استمارة الترشيح
                                </li>
                            </ul>
                            : 
                            <ul>
                              <li>
                              The call for entries for the awards will be announced through one or more media platforms, Email and the official awards website
                              </li>
                              <li>
                              A participant can apply for the awards by logging onto the website <a href="www.cchi.gov.sa" target="_blank">www.cchi.gov.sa</a> and filling the nomination form along with uploading the write up explanation and the supporting documents directly on nomination form
                              </li>
                            </ul>
                            }
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                </Accordion>
            </div>
        <Form className="applyForm" onSubmit={formik.handleSubmit}>
        <div className="formHeader">
            {lang === 'ar' ? 'نموذج الترشح' : 'Nomination Form' }
        </div>
        <Row>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'اسم الشركة' : 'Company Name' }</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyName"
                        placeholder={lang === 'ar' ? 'اسم الشركة' : 'Company Name' }
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyName && formik.touched.companyName ? (
                    <Form.Text className="text-muted">{formik.errors.companyName}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'نوع الشركة' : 'Company Type' }</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyType"
                        placeholder={lang === 'ar' ? 'نوع الشركة' : 'Company Type' }
                        value={formik.values.companyType}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyType && formik.touched.companyType ? (
                    <Form.Text className="text-muted">{formik.errors.companyType}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'رابط موقع الشركة' : 'Company Url' }</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyUrl"
                        placeholder={lang === 'ar' ? 'رابط موقع الشركة' : 'Company Url' }
                        value={formik.values.companyUrl}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyUrl && formik.touched.companyUrl ? (
                    <Form.Text className="text-muted">{formik.errors.companyUrl}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'عنوان التواصل' : 'Contact Title' }</Form.Label>
                    <Form.Control
                        type="text"
                        name="contactTitle"
                        placeholder={lang === 'ar' ? 'عنوان التواصل' : 'Contact Title' }
                        value={formik.values.contactTitle}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.contactTitle && formik.touched.contactTitle ? (
                    <Form.Text className="text-muted">{formik.errors.contactTitle}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'رقم التواصل:' : 'Contact Number' }</Form.Label>
                    <Form.Control
                        type="number"
                        name="contactNo"
                        placeholder={lang === 'ar' ? 'رقم التواصل:' : 'Contact Number' }
                        value={formik.values.contactNo}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.contactNo && formik.touched.contactNo ? (
                    <Form.Text className="text-muted">{formik.errors.contactNo}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'البريد الالكتروني' : 'Email Address' }</Form.Label>
                    <Form.Control
                        type="email"
                        name="emailAddress"
                        placeholder={lang === 'ar' ? 'البريد الالكتروني' : 'Email Address' }
                        value={formik.values.emailAddress}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.emailAddress && formik.touched.emailAddress ? (
                    <Form.Text className="text-muted">{formik.errors.emailAddress}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'نوع الجائزة' : 'Award type' }</Form.Label>
                    <Form.Control
                        disabled
                        type="text"
                        name="awardList"
                        value={props.formName}
                    />
                    {formik.errors.awardList && formik.touched.awardList ? (
                    <Form.Text className="text-muted">{formik.errors.awardList}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'كيف سمعت عن المسابقة ؟' : 'How did you hear about the call for entry?' }</Form.Label>
                    <Form.Control
                        as="select"
                        name="howYouHear"
                    >
                        <option>{lang === 'ar' ? 'اختر طريقة' : 'Chose a method' }</option>
                        <option>{lang === 'ar' ? 'الايميل' : 'Email' }</option>
                        <option>{lang === 'ar' ? 'مواقع التواصل الاجتماعي' : 'Social Media' }</option>
                        <option>{lang === 'ar' ? 'موقع' : 'Website' }</option>
                        <option>{lang === 'ar' ? 'بيان صحفي - مقال اخباري' : 'Press Release - News Article' }</option>
                        <option>{lang === 'ar' ? 'صديق' : 'Word of mouth' }</option>
                        <option>{lang === 'ar' ? 'محرك بحث قوقل' : 'Google Search Engine' }</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'دعوة الدخول' : 'Call Entry' }</Form.Label>
                    <Form.Control
                        type="text"
                        name="callEntry"
                        placeholder={lang === 'ar' ? 'دعوة الدخول' : 'Call Entry' }
                        value={formik.values.callEntry}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.callEntry && formik.touched.callEntry ? (
                    <Form.Text className="text-muted">{formik.errors.callEntry}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'اسم التواصل' : 'Contact Name' }</Form.Label>
                    <Form.Control
                        type="text"
                        name="ContactName"
                        placeholder={lang === 'ar' ? 'اسم التواصل' : 'Contact Name' }
                        value={formik.values.ContactName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.ContactName && formik.touched.ContactName ? (
                    <Form.Text className="text-muted">{formik.errors.ContactName}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'وصف مختصر عن الشركة: 1000 كلمة كحد أقصى' : 'Brief description about the company: (1000 words Max)' }</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="companyDescription"
                        value={formik.values.companyDescription}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyDescription && formik.touched.companyDescription ? (
                    <Form.Text className="text-muted">{formik.errors.companyDescription}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'شعار الشركة' : 'Company Logo' }</Form.Label>
                    <Form.Control
                        type="file"
                        name="CompanyLogo"
                        placeholder={lang === 'ar' ? 'شعار الشركة' : 'Company Logo' }
                        onChange={(event) => {
                            formik.setFieldValue("CompanyLogo", event.currentTarget.files[0]);
                        }}
                    />
                    {formik.errors.CompanyLogo && formik.touched.CompanyLogo ? (
                    <Form.Text className="text-muted">{formik.errors.CompanyLogo}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'المرفق الاول' : 'Attach File 1' }</Form.Label>
                    <Form.Control
                        type="file"
                        name="AttachFile1"
                        placeholder={lang === 'ar' ? 'المرفق الاول' : 'Attach File 1' }
                        onChange={(event) => {
                            formik.setFieldValue("AttachFile1", event.currentTarget.files[0]);
                        }}
                    />
                    {formik.errors.AttachFile1 && formik.touched.AttachFile1 ? (
                    <Form.Text className="text-muted">{formik.errors.AttachFile1}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col md={12} lg={6}>
                <Form.Group>
                    <Form.Label>{lang === 'ar' ? 'المرفق الثاني' : 'Attach File 2' }</Form.Label>
                    <Form.Control
                        type="file"
                        name="AttachFile2"
                        placeholder={lang === 'ar' ? 'المرفق الثاني' : 'Attach File 2' }
                        onChange={(event) => {
                            formik.setFieldValue("AttachFile2", event.currentTarget.files[0]);
                        }}
                    />
                    {formik.errors.AttachFile2 && formik.touched.AttachFile2 ? (
                    <Form.Text className="text-muted">{formik.errors.AttachFile2}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <div className="btnHolder">
            <Button variant="primary" type="submit">{lang === 'ar' ? 'تقديم' : 'Submit' }</Button>
        </div>
        </Form>
    </Container>
  );
}