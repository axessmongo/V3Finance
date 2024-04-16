import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Logo from '../assets/images/logo1.png'
import { FaGlobe, FaAnchor, FaHourglassHalf, FaDatabase, FaUpload, FaCamera } from 'react-icons/fa';
import ournature1 from '../assets/images/nature1.jpg'
import ournature2 from '../assets/images/nature2.jpg'
import financialbg from '../assets/images/Planing.gif'
import profile1 from '../assets/images/profile1.png';
import img1 from '../assets/images/image1.png'
import img2 from '../assets/images/image2.png'
import img3 from '../assets/images/image3.png'
import img4 from '../assets/images/image4.png'
import img5 from '../assets/images/image5.png'
import img6 from '../assets/images/image6.png'
import img7 from '../assets/images/image7.png'
import edu from "../assets/images/edu.png";
import home from "../assets/images/home1.png";
import gold from "../assets/images/asset.png";
import agri from "../assets/images/agri1-.png";
import car from "../assets/images/car (1).png";
export default function Home() {
  const [active, setActive] = useState(false)
  return (
    <>
      {/* navbar starts */}
      <section className="navbar overflow-hidden">
        <div className='nav-banner nav-bg '>
          <nav
            className="navbar navbar-expand-lg m-auto align-items-center d-flex justify-content-lg-center justify-content-between px-3 px-lg-0"
            id="home"
          >
            <div className="text-center px-lg-5">
              <img src={Logo} className="logo px-3" alt="Logo" />
            </div>
            <button className="navbar-toggler shadow-none" onClick={() => setActive(!active)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className={`bi ${active ? "bi-x" : "bi-list"} text-white`}></i>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end shadow-none"
              id="navbarSupportedContent"
            >
              <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <div>
                    <ul class="navbar-nav heading3">
                      <li class="nav-item">
                        <a
                          class="nav-link active text-white"
                          aria-current="page"
                          id="name-nav"
                        // onClick={() => gotoTop('home1')}
                        >
                          Home
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link"
                          //  onClick={() => gotoTop('goals')}
                          id="home-nav">
                          Goals
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"
                          //  onClick={() => gotoTop('chooseus')}
                          id="home-nav">
                          ChooseUs
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"
                          //  onClick={() => gotoTop('bussiness')}
                          id="home-nav">
                          Services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"
                          //  onClick={() => gotoTop('plans')} 
                          id="home-nav">
                          Plans
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"
                          //  onClick={() => gotoTop('contact')} 
                          id="home-nav">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </section>

      {/* banner section */}
      <section className="hero-banner overflow-hidden">
        <div className="hero">
          <div className="hero-opacity text-white">

          </div>
        </div>
      </section>

      {/* Maincard section */}
      <section className='main-card overflow-hidden'>
        <div className="container-fluid my-3">
          <div className="row align-items-center justify-content-center gx-2 main-card">
            <div className="col-md-4">
              <div className="normal-card d-flex flex-column rounded-0">
                <p className='bg-no'>01</p>
                <p className=' text-white heading3 fs-5'>Big business loans, </p>
                <h1 className=' text-white heading4'>bigger possibilities</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="normal-card d-flex flex-column rounded-0">
                <p className='bg-no'>02</p>
                <p className='text-white heading3 fs-5'>We finance,</p>
                <h1 className=' heading4' style={{ color: "#900c3f" }}>India&#39;s future</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="normal-card d-flex flex-column rounded-0">
                <p className='bg-no'>03</p>
                <p className='text-white heading3 fs-5'>Competitive rates, </p>
                <h1 className='text-white heading4 '>flexible terms</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our nature section */}
      <section className='our-nature overflow-hidden'>
        <div className='area position-relative'>
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div className='container'>
            <div className='row py-5'>
              <div className='col-md-5 d-flex justify-content-center align-items-center'>
                <div className='pt-3'>
                  <h4 className='text-white'>Our <span className=''> Goal</span></h4>
                  <h2 className='pt-4 text-light'>We Finance It. Secure Funding for Your Ambitions with Sarvamangala.</h2>
                  <h4 className='pt-4 text-light'>Growth Never Stops.</h4>
                </div>
              </div>

              <div className='col-md-7'>
                <div className='row'>
                  <div className='d-flex pt-3'>
                    <div className='col-5'>
                      <div className='nature-part1'>
                        <img src={ournature1} alt="" className='img-fluid rounded-2' />
                      </div>
                    </div>
                    <div className='col-7'>
                      <div className='nature-part2'>
                        <img src={ournature2} alt="" className='img-fluid rounded-2' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
      {/* 
            Why choose us section */}
      {/* <section className='choose-us'>
                <div className="feat bg-gray pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="section-head col-sm-12">
                                <h4><span className='text-dark heading4'>Why Choose</span> Us?</h4>
                                <p className='heading3 text-white'>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know how to handle it. With working knowledge of online, SEO, and social media.</p>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item"> <span className="icon feature_box_col_one"><FaGlobe /></span>
                                    <h6 className='heading3'>Modern Design</h6>
                                    <p className='heading3'>We use the latest technology for the latest world because we know the demand of peoples.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item"> <span className="icon feature_box_col_two"><FaAnchor /></span>
                                    <h6 className='heading3'>Creative Design</h6>
                                    <p className='heading3'>We are always creative and always listen to our customers to make the best design.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item"> <span className="icon feature_box_col_three"><FaHourglassHalf /></span>
                                    <h6 className='heading3'>24 x 7 User Support</h6>
                                    <p className='heading3'>If our customer has any problem and any query always demand of peoples. happy to help them.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item"> <span className="icon feature_box_col_four"><FaDatabase /></span>
                                    <h6 className='heading3'>Business Growth</h6>
                                    <p className='heading3'>Everyone wants to live on top of the mountain, but all the happiness and growth occur while you're climbing it.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item"> <span className="icon feature_box_col_five"><FaUpload /></span>
                                    <h6 className='heading3'>Market Strategy</h6>
                                    <p className='heading3'>Holding back technology to preserve broken business models is like to veto combustion engine to protect their horseshoes.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="item"> <span className="icon feature_box_col_six"><FaCamera /></span>
                                    <h6 className='heading3'>Affordable cost</h6>
                                    <p className='heading3'>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap. word too much and it becomes cheap.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      <section className='choose-us mt-4 overflow-hidden text-center'>
        <h4 className='text-center mt-3'> Why choose us ?</h4>
        <div class="container choose d-flex flex-wrap justify-content-center">
          <div class="card-body">
            <div class="box">
              <div class="content">
                <h2>01</h2>
                < i class="bi bi-ticket m-2 " style={{ "color": "#c00937", fontSize: "50px" }}></i>
                <h4 className='mt-3'>Big Ticket Loans</h4>
                <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consectetur?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="box">
              <div class="content">
                <h2>02</h2>
                <i className="bi bi-lightning-fill m-2" style={{ "color": "#c00937", fontSize: "50px" }}></i>
                <h4 className='mt-3'>Competitive Rates</h4>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="box">
              <div class="content">
                <h2>03</h2>
                <i className="bi bi-credit-card  m-2" style={{ "color": "#c00937", fontSize: "50px" }}></i>
                <h4 className='mt-3' >Flexible Repayment</h4>
                <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, ab!</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="box">
              <div class="content">
                <h2>04</h2>
                <i class="bi bi-person-circle m-2" style={{ "color": "#c00937", fontSize: "50px" }}></i>
                <h4 className='mt-3'>Expert Support</h4>
                <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consectetur?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="box">
              <div class="content">
                <h2>05</h2>
                <i className="bi bi-joystick m-2" style={{ "color": "#c00937", fontSize: "50px" }}></i>
                <h4 className='mt-3'>Fast Approvals</h4>
                <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consectetur?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="box">
              <div class="content">
                <h2>06</h2>
                <i className="bi bi-cart-plus  m-2" style={{ "color": "#c00937", fontSize: "50px" }}></i>
                <h4 className='mt-3'>Business Focus</h4>
                <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consectetur?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>



        </div>

      </section>
      {/* Our Services section */}
      <section className="service">
        <h1 className="text-danger text-center">Our Services</h1>

        <div className="container  p-5 business-bg rounded-3">
          <div>
            <div className="row justify-content-center align-items-stretch g-4">
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={edu} className="img-fluid" alt="" />
                  </div>

                  <p className="fs-5 text-center">Personal Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={gold} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Gold Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={home} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Home Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={agri} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Agriculture Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={car} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Vehicle Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={edu} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Business Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={edu} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Education Loan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Bubble  animated section */}
      <section className='bubble-bee bg-dark'>
        <div className='bubbles'>

          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='fin-img'>
                  <img src={financialbg} alt="" className='img-fluid w-75' />
                </div>
              </div>
              <div className='col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <div className=''>
                    <h4 className='text-white mt-4'>Plan for Tommorrow, <span className=''> Today</span></h4>
                    <p className='text-white mt-4'>Building a secure financial future requires a well-rounded approach. At Sarvamangala Financial
                      Services, we offer comprehensive financial planning services that encompass:</p>
                  </div>

                  <div className=''>
                    <ul className='fin-ul'>
                      <li className='text-light'> <span className='fs-5'>👉🏻 Investment Planning</span>
                        <p className='fin-li-p'>Grow your wealth and achieve your long-term goals.</p>
                      </li>
                      <li className='text-light'> <span className='fs-5'>👉🏻 Retirement Planning</span>
                        <p className='fin-li-p'>Retire comfortably a personalized retirement plan.</p>
                      </li>
                      <li className='text-light'> <span className='fs-5'>👉🏻 Tax Planning</span>
                        <p className='fin-li-p'> Minimize your tax burden & maximize your returns.</p>
                      </li>
                      <li className='text-light'> <span className='fs-5'>👉🏻 Estimate Planing</span>
                        <p className='fin-li-p'>Secure your loved ones' financial future.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
      </section>

      {/* Clarification section */}
      <section className=" certi bg-success mt-5">
        <div className="container">
          <div className="row py-3 clarif">
            <div className="col-md-8">
              <div className="text-white text-center fs-4 fw-semibold py-4 ">
                <p>Schedule an appointment with a financial advisor today!</p>
                <p>We're here to help you achieve your financial dreams!</p>
              </div>
            </div>
            <div className="col-md-4 align-items-center d-flex justify-content-center">
              <div className=" ">
                <button className="py-2 px-3">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      testimonal section */}
      <section className='testimonial'>
        <div class="container testing text-center mt-4">
          <h4 className='heading4 text-dark'>Success <span className='heading4' style={{ color: "#900c3f" }}> Stories</span></h4>


        </div>
        <div className="contaner-fluid mt-5">
          <div id="carouselExampleControls" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                    <div class="card ">
                      <div class="face front-face">
                        <img src={profile1}
                          alt="" className="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Rajesh
                        </div>
                        <div class="designation heading3 fs-6 text-dark ">Textile Factory Owner<span className='heading3 text-center d-block'>(Coimbatore)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3  text-dark">
                          <p>&quot;Sarvamangala&#39;s loan helped us expand our manufacturing unit. Now we can take on bigger
                            orders and create more jobs in our town. Great support!</p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1}
                          alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Priya
                        </div>
                        <div class="designation heading3  fs-6 text-dark">Restaurant Owner<span className='text-center d-block heading3'> (Delhi)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-dark">
                          &quot;Never thought getting a loan for my restaurant could be this easy. The team was very helpful
                          throughout the process. Thanks, Sarvamangala!
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-  d-none d-lg-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Akash &amp; Meena
                        </div>
                        <div class="designation heading3  fs-6 text-dark">Tech Startup Founders <span className='text-center heading3 d-block'>(Bangalore)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-dark">
                          <p> &quot;As a young entrepreneur, access to funds was a big hurdle. Sarvamangala believed in our
                            vision and provided the loan that kickstarted our business. Forever grateful!&quot;</p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                    <div class="card ">
                      <div class="face front-face">
                        <img src={profile1}
                          alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Mr. &amp; Mrs.Patel,

                        </div>
                        <div class="designation heading3 fs-6 text-dark ">Dairy Farm Owners <span className='text-center heading3 d-block'>(Gujarat)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-dark">
                          <p>Interest rates were a big concern, but Sarvamangala offered a very competitive deal. Now we
                            can focus on growing our business without the worry of high loan repayments.</p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1}
                          alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Vikram
                        </div>
                        <div class="designation heading3  fs-6 text-dark">Construction Company CEO <span className='heading3 text-center d-block'>(Mumbai)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-dark">
                          Been with Sarvamangala for years now. They understand the needs of our business and have
                          always been there to support us during our growth journey. Reliable partner!
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-lg-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1} alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Kavitha
                        </div>
                        <div class="designation heading3  fs-6 text-dark">Boutique Owner<span className='heading3 d-block text-center'>(Hyderabad)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-dark">
                          <p> Appreciated the clear communication and transparency throughout the loan process. No
                            hidden fees, which is a big relief! Thanks, Sarvamangala.</p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                    <div class="card ">
                      <div class="face front-face">
                        <img src={profile1}
                          alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Sunil &amp; Sonali,
                        </div>
                        <div class="designation heading3 fs-6 text-dark ">Travel Agency Owners <span className='heading3 d-block text-center'>(kolkata)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-dark">
                          <p>Taking a loan can be stressful, but Sarvamangala&#39;s friendly and professional approach made it
                            a smooth experience. Highly recommend!</p>
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                    <div class="card">
                      <div class="face front-face">
                        <img src={profile1}
                          alt="" class="profile" />
                        <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                          Ranjit,
                        </div>
                        <div class="designation heading3  fs-6 text-dark">Printing Press Owner
                          <span className='heading3 d-block text-center'>(Chennai)</span></div>
                      </div>
                      <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial heading3 text-dark">
                          Our business took a hit during the pandemic. Sarvamangala helped us get back on track with a
                          flexible repayment plan. Thank you for being a lifesaver!
                        </div>
                        <span class="fas fa-quote-right"></span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* faq section */}

      <section className='faq'>
        <div>
          <h4 className='nature-primary1 heading4 text-white text-center mt-4'><span style={{ color: "#900c3f" }}>FAQ</span> </h4>

          <div class="container overflow-hidden acc-bg  mt-4" id="placement-accordion">
            <div class="accordion" id="accordionExample">
              <div class="row justify-content-center ">
                <div class="col-md-6" data-aos="fade-left" data-aos-duration="600">
                  <div class="accordion-item">
                    <h2 class="accordion-header ">
                      <button
                        class="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <div class="pe-2 col-2">
                          <img
                            src={img1}
                            class="rounded-2"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div className='heading3 text-dark'> What kind of loans does Sarvamangala offer?</div>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p className='heading3' >
                          Sarvamangala specializes in providing business loans to large enterprises. Our minimum loan amount is ₹5 crore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div class="pe-2 col-2">
                          <img
                            src={img2}
                            class="rounded-2"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div className='heading3  text-dark'>What factors do you consider a loan application?</div>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p className='heading3 '>
                          We assess a variety of factors, including your company's financial health, credit history, business plan, and the purpose of the loan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div class="pe-2 col-2">
                          <img
                            src={img3}
                            class="rounded-2"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div className='heading3 text-dark'>What types of collateral are acceptable for your loans?</div>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p className='heading3'>
                          Depending on the loan details, we may accept various forms of collateral, which could include real estate, equipment, or inventory.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" data-aos="fade-right" data-aos-duration="600">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFourth"
                        aria-expanded="false"
                        aria-controls="collapseFourth"
                      >
                        <div class="pe-2 col-2">
                          <img
                            src={img4}
                            class="rounded-2"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div className='heading3  text-dark'>What are the interest rates for your loans?</div>
                      </button>
                    </h2>
                    <div
                      id="collapseFourth"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p className='heading3'>
                          Interest rates are determined based on your creditworthiness, loan amount, and loan term. We offer competitive rates in the market.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <div class="pe-2 col-2">
                          <img
                            src={img5}
                            class="rounded-2"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div className='heading3 text-dark'>What is the typical loan approval timeframe?</div>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p className='heading3'>
                          The approval process can vary depending on the complexity of your loan request. We strive to provide a decision as quickly as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <div class="pe-2 col-2 ">
                          <img
                            src={img6}
                            class="rounded-2"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div className='head heading3 text-dark'>What documents do I need to submit with my loan application?</div>
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body ">
                        <p className='heading3'>
                          The required documents will vary depending on your specific situation. Generally, you can expect to provide financial statements, business plans, tax returns, and ownership information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 mt-md-4"
                  data-aos="fade-down"
                  data-aos-duration="700"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        <div class="pe-2 col-2">
                          <img
                            src={img7}
                            class="rounded-2"
                            width="40px"
                            height="40px"
                          />
                        </div>
                        <div className='heading3 text-dark'>Can I apply for a loan online?</div>
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p className='heading3'>
                          Currently, we do not offer online loan applications. However, you can contact us to discuss your needs and initiate the application process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section className='our-footer'>
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta py-4">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>1010 Avenue, sw 54321, chandigarh</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="fas fa-phone"></i>
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>9876543210 0</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="far fa-envelope-open"></i>
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>mail@info.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content py-4">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <h1 className='text-light'>Company Logo </h1>
                    </div>
                    <div className="footer-text">
                      <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="footer-social-icon">
                      <span>Follow us</span>
                      <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                      <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                      <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">about</a></li>
                      <li><a href="#">services</a></li>
                      <li><a href="#">portfolio</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Our Services</a></li>
                      <li><a href="#">Expert Team</a></li>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Latest News</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button><i className="fab fa-telegram-plane"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </section>

    </>
  )
}
