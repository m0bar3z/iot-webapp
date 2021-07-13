import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Image, Container, Col, Row } from 'react-bootstrap';
import ScrollButton from './ScrollButton';
import { Link } from 'react-router-dom'

import logo from '../../img/teamx-logo.svg'
import iotBg from '../../img/bg_5.jpg'

import loginScreen from './../../img/login.png'
import registerScreen from './../../img/register.png'
import panelScreen from './../../img/panel.png'
import shareScreen from './../../img/share.png'

library.add(fab, fas)

function Home () {
    return (
        <>
            <Container fluid className="parallax">
                <Row className="pt-5 pe-5 text-light">
                    <Col sm={10} md={6} lg={5}>
                        <h2 className="mt-5 mb-4">سیستم مدیریت کلید</h2>
                        <p className="h5">
                         سیستم امنیتی مدیریت کلید هوشمند یا الکترونیک دارای ساختار امنیتی پیشرفته ای
                         می باشد که در اصل امنیت محل سکونت شما و یا کسب و کار شما را افزایش می دهد
                         .
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4 pe-5">
                    <Col sm={12} md={12} lg={6}>
                        <Button className="w-25">دریافت برنامه</Button>
                        <Link to="/panel">
                            <Button className="w-25 mx-5">ورود به نسخه وب</Button>
                        </Link>
                    </Col>
                </Row>
                <div className="wave">
                    <svg xmlSpace="preserve" viewBox="0 0 1995 128" y="128" x="2000" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1999.5,22.2c-346-0.6-524.6-4.7-878.8,4.4c-286.6,7.4-442.3,54-608.1,51.2C307.3,74.3,202.5,5-0.5,28.1v100.4l2000-0.5V22.2z" fill="#f4f5f7" opacity="0.2"></path>
                        <path d="M-0.3,46.1C251,15.3,440.9,84.7,499.6,98.4c54.7,12.8,122.5,12,186.7-5.3c154.2-41.6,315.5-70.9,475.2-67.5s324.6,22.4,484.3,19.7c133-2.3,302.8,1.7,352.8,3.7c0,21.3,0,80,0,80H-0.5L-0.3,46.1z" fill="#f4f5f7" opacity="0.2"></path>
                        <path d="M2000,41.2c-139.8-12.7-219.9-10.8-360.2-11.2c-285.5-0.8-487.5,18-736.2,51.1C647,115.4,546.7,116.4,199.2,53.6C140.3,43,59.5,45.6-0.5,52.3V130h2000L2000,41.2z" fill="#f4f5f7" opacity="0.4"></path>
                        <path d="M1634.6,50.1c-193.8,11.9-366.9,24.9-569,50c-110.2,13.7-221.2,21.5-332.3,19.6c-187-3.3-344.5-29.7-560.9-69.8c-122.2-22.6-172.8-4-172.8-4V130h1998V46C1997.5,46,1831,38.1,1634.6,50.1z" fill="#f4f5f7"></path>
                    </svg>
                </div>
            </Container>


            <Container className="text-center">
                <Row className="mt-5 pt-5">
                    <Col lg={5} className="mx-auto d-none d-md-block d-lg-block">
                        <Image className="w-100 h-auto" src={iotBg}/>
                    </Col>
                </Row>
                <Row className="m-2">
                    <h2>سیستم مدیریت کلید چیست؟</h2>
                </Row>
                <Row className="text-secondary m-2">
                    <h4>سامانه مدیریت و نظارت بر کلید های ساختمان</h4>
                </Row>
                <Row className="m-2 ">
                    <Col lg={5} className="m-auto">
                        <p>
                            با نصب نرم افزار بر روی گوشی یا از طریق پنل مدیریتی وبسایت
                            میتوانید به راحتی به کلید های مدنظر خود نظارت داشته باشید
                            و آن ها را مدیریت کنید.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className="mt-5 mb-1">
                        <h5>مهم ترین ویژگی های این سیستم:</h5>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center user-select-none">
                    <Col sm={5} md={5} lg={2} className="shake m-3">
                        <h5 className="mb-3">امنیت</h5>
                        <FontAwesomeIcon icon={['fas', 'user-shield']} size="3x" />
                    </Col>
                    <Col sm={5} md={5} lg={2} className="shake m-3">
                        <h5 className="mb-3">چند کاربره</h5>
                        <FontAwesomeIcon icon={['fas', 'users']} size="3x" />
                    </Col>
                    <Col sm={5} md={5} lg={2} className="shake m-3">
                        <h5 className="shake mb-3">همگام سازی</h5>
                        <FontAwesomeIcon icon={['fas', 'network-wired']} size="3x" />
                    </Col>
                    <Col sm={5} md={5} lg={2} className="shake m-3">
                        <h5 className="mb-3">به صرفه</h5>
                        <FontAwesomeIcon icon={['fas', 'dollar-sign']} size="3x" />
                    </Col>
                </Row>

                <div className="border-bottom border-dark w-75 m-auto mt-5 mb-5"></div>
            </Container>


            <Container className="mt-5">
                <Row className="infoBox mb-5 w-75 mx-auto m-lg-0">
                    <Col lg={7} className="pt-5 pe-5 pb-3">
                        <FontAwesomeIcon icon={['fas', 'user-shield']} size="3x" />
                        <span className="m-3 h4">امنیت</span>
                        <p className="mt-3 w-75 d-block">
                            استفاده از این دستگاه نه تنها شما را به سطح بالاتری از امنیت می رساند
                            بلکه باعث ایجاد هماهنگی بیشتر بین اجزای خانه یا محل کار شما خواهد شد. لازم نیست نگران هک شدن هم باشید.
                            <br></br>
                            این برنامه مطمئناً با گذشت زمان بروزرسانی می شود.
                            این امر باعث می شود سازندگان بتوانند به سرعت ایرادات آن را برطرف کرده و هرگونه نقص در کدهای سیستم را برطرف کنند.
                             <br></br>
                            اگر به دنبال انتقال به سطح جدیدی از فناوری هستید ، این محصول انتخاب مناسبی برای شماست.
                        </p>
                    </Col>
                    <Col lg={5} className="align-self-center d-none d-lg-block">
                        <div className="iphon m-auto">
                            <div className="box_top">
                            <div className="box box1"></div>
                            <div className="box box2"></div>
                            <div className="clear"></div>
                            </div>
                            <img className="pic" src={loginScreen} alt="" />
                            <div className="box3"></div>
                        </div>
                    </Col>
                </Row>

                <Row className="infoBox mb-5 mx-auto ms-lg-0 me-lg-auto w-75 ">
                    <Col lg={5} className="align-self-center d-none d-lg-block">
                        <div className="iphon m-auto">
                            <div className="box_top">
                            <div className="box box1"></div>
                            <div className="box box2"></div>
                            <div className="clear"></div>
                            </div>
                            <img className="pic" src={panelScreen} alt="" />
                            <div className="box3"></div>
                        </div>
                    </Col>
                    <Col lg={7} className="pt-5 pe-5 pb-3">
                        <FontAwesomeIcon icon={['fas', 'users']} size="3x" />
                        <span className="m-3 h4">چند کاربره</span>
                        <p className="mt-3 w-75 d-block">
                            با استفاده از این سیستم میتوانید برای اعضای خانواده، کارکنان شرکت یا هر فردی که
                            مد نظر شما میباشد کنترل و مدیریت کلید های مورد نظر را به اشتراک
                            بگذارید.
                        </p>
                    </Col>
                </Row>

                <Row className="infoBox mb-5 mx-auto m-lg-0 w-75">
                    <Col lg={7} className="pt-5 pe-5 pb-3">
                        <FontAwesomeIcon icon={['fas', 'network-wired']} size="3x" />
                        <span className="m-3 h4">همگام سازی</span>
                        <p className="mt-3 w-75 d-block">
                            ،همگام سازی کلید هوشمند با سایر کلید ها بصورت همزمان امکان پذیر میباشد

                        </p>
                        <p>
                            به عنوان مثال مدیریت درب منزل و اتاق ها
                            و بررسی وضعیت آن هابصورت همزمان از طریق اپلیکیشن گوشی یا پنل وبسایت امکان پدیر میباشد.
                        </p>
                    </Col>
                    <Col lg={5} className="align-self-center d-none d-lg-block">
                        <div className="iphon m-auto">
                            <div className="box_top">
                            <div className="box box1"></div>
                            <div className="box box2"></div>
                            <div className="clear"></div>
                            </div>
                            <img className="pic" src={registerScreen} alt="" />
                            <div className="box3"></div>
                        </div>
                    </Col>
                </Row>

                <Row className="infoBox mb-5 mx-auto ms-lg-0 me-lg-auto w-75 ">
                    <Col lg={5} className="align-self-center d-none d-lg-block">
                        <div className="iphon m-auto">
                            <div className="box_top">
                            <div className="box box1"></div>
                            <div className="box box2"></div>
                            <div className="clear"></div>
                            </div>
                            <img className="pic" src={shareScreen} alt="" />
                            <div className="box3"></div>
                        </div>
                    </Col>
                    <Col lg={7} className="pt-5 pe-5 pb-3">
                        <FontAwesomeIcon icon={['fas', 'dollar-sign']} size="3x" />
                        <span className="m-3 h4">به صرفه</span>
                        <p className="mt-3 w-75 d-block">
                            تنها با تهیه یک دستگاه مدیریت هوشمند میتوانید تمامی کلید های
                            موجود در محل کار را به راحتی مدیریت و کنترل کنید
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="infoSection" fluid>
                <Row>
                    <Col sm={10} md={8} lg={4} className="m-auto text-center mt-5 text-light">
                       <h3 className="mb-3">چرا باید از کلید هوشمند استفاده کنیم؟</h3>
                        <p className="">
                            بسیاری از مدیران مشاغل،
                            ترجیح می ‌دهند با استفاده از سیستم مدیریت کلید، امنیت دفتر مدیریت و محل کار گروهشان را مدیریت و تأمین کنند.

                            با این دستگاه می توانید.
                            در هر شرایطی تنها با دسترسی به اینترنت می‌توانید به حساب کاربری خود متصل شوید؛
                            تا وضعیت کلید های خود را بررسی کنید و آن ها را مدیریت کنید
                        </p>
                        <Link to="/login">
                            <Button className="btn-primary mt-4">ورود به نسخه وب</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>

            <footer className="footerSection">
                <Container className="py-2 text-center text-md-end text-lg-end">
                    <Row>
                        <Col sm={8} md={4} lg={4} className="m-auto my-4">
                            <h4>
                                درباره تیم ایکس
                            </h4>
                            <div className="border-bottom border-dark my-3 m-auto"></div>
                            <p>
                                کار تیم ایکس این است که نیروهای حرفه ای مورد نیاز شما در زمینه برنامه نویسی فراهم کند.
                                و یا اینکه نیروهای کاری شما را آموزش دهد.
                                <br></br>
                                ما از توسعه دهندگان پشتیبانی و حمایت می کنیم تا به رشد آنها و در نتیجه رشد کاری شما، کمک کنیم.
                                آموزش و اجاره تیم های متخصص و کارآمد ، زمینه کاری ماست.
                            </p>
                        </Col>
                        <Col sm={8} md={4} lg={4} className="m-auto my-4">
                            <h4>بخش های سایت</h4>
                            <div className="border-bottom border-dark my-3 m-auto"></div>
                            <ul className="contactus">
                                <li><a href="/register">ثبت نام</a></li>
                                <li><a href="">قوانین ومقررات</a></li>
                                <li><a href="/panel">ورود به پنل مدیریت</a></li>
                                <li><a href="">دریافت نسخه اندروید برنامه</a></li>
                                <li><a href="">درباره تیم ایکس</a></li>
                                <li><a href="">تماس با ما</a></li>
                            </ul>
                        </Col>
                        <Col sm={8} md={4} lg={4} className="m-auto my-4">
                            <h4>ارتباط با ما</h4>
                            <div className="border-bottom border-dark my-3 m-auto"></div>
                            <p>شما میتوانید با استفاده از یکی از راه های زیر با ما ارتباط برقرار کنید:</p>
                            <ul className="contactus">
                                <li><a href="">Facebook</a></li>
                                <li><a href="">Instagram</a></li>
                                <li><a href="">Contact us</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="border border-dark  m-auto my-4"></div>
                    <Row className="mt-3">
                        <Col className="text-center" lg={12}>
                            <Image src={logo} height="54px" rounded />
                        </Col>
                    </Row>
                </Container>
            </footer>
            <ScrollButton />
        </>
    )
}

export default Home