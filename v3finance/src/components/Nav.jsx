import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Logo from '../assets/images/logo1.png'
import { FaGlobe, FaAnchor, FaHourglassHalf, FaDatabase, FaUpload, FaCamera } from 'react-icons/fa';
export default function Nav() {
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
                                <i className="bi bi-lightning-fill m-2" style={{ "color": "#c00937", fontSize: "50px"  }}></i>
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
                                <i className="bi bi-credit-card  m-2" style={{ "color": "#c00937", fontSize: "50px"  }}></i>
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
                                <i class="bi bi-person-circle m-2" style={{ "color": "#c00937", fontSize: "50px"  }}></i>
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
                                <i className="bi bi-joystick m-2" style={{ "color": "#c00937", fontSize: "50px"  }}></i>
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
                                <i className="bi bi-cart-plus  m-2" style={{ "color": "#c00937", fontSize: "50px"  }}></i>
                                <h4 className='mt-3'>Business Focus</h4>
                                <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consectetur?</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>



                </div>

            </section>
        </>
    )
}
