import React from "react";
// import capital from '../assets/images/capital.jpg'
import list from "../assets/images/list.png";
import account from "../assets/images/account.png";
import process from "../assets/images/process.png";
import calendar from "../assets/images/calendar.png";
import { Link } from "react-router-dom";
import business from "../assets/images/Business-loan-bg.png";
import edu from "../assets/images/edu.png";
import home from "../assets/images/home1.png";
import gold from "../assets/images/asset.png";
import agri from "../assets/images/agri1-.png";
import car from "../assets/images/car (1).png";
import contact from "../assets/images/conatct.png";




export default function Services() {
  return (
    <>
      <section className="service">
        <h1 className="text-danger">Our Services</h1>

        <div className="container  p-5 business-bg rounded-3">
          <div>
            <div className="row justify-content-center align-items-stretch g-4">
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-1">
                  <div className="text-center">
                    <img src={edu} className="img-fluid" alt="" />
                  </div>

                  <p className="fs-5 text-center">Education Loan</p>
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
                  <p className="fs-5 text-center">Education Loan</p>
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

            {/* <section className="page_breadcrumb">
                <div className="page_breadcrumb_shape_one float-bob-x">
                    <img src="https://html.tonatheme.com/2024/financer/assets/images/icons/shape_icon_13.png" alt="" />
                </div>
                <div className="page_breadcrumb_shape_two float-bob-y">
                    <img src="https://html.tonatheme.com/2024/financer/assets/images/icons/shape_icon_1.png" alt="" />
                </div>
               
            </section> */}

            <section className='my-5 contacting contact'>
      <h4 className='heading4 text-white text-center mt-5'>Contact <span className='heading4' style={{ color: "#900c3f" }}> Us</span></h4>

                <div className="container image1">
                    <div className="row">
                        <div className="col-lg-4 col-xl-5">
                            {/* <img src="https://img.freepik.com/free-vector/new-message-concept-landing-page_23-2148317868.jpg?w=996&t=st=1712302963~exp=1712303563~hmac=8bf9f260cce7fcca238d84db1ab62b9a688255b05abfc2fc1f27cb1615c00717" alt="" className='img-fluid mt-5   ' /> */}
                            <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15551.53761857054!2d80.24327300000002!3d12.979244600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712314931884!5m2!1sen!2sin"
                                    width="100%" // Adjust width as needed
                                    height="450" // Adjust height as needed
                                    style={{ border: '0', borderRadius: '15px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps"
                                ></iframe>
                            </div>                      </div>
                        <div className="col-lg-8 col-xl-7">
                            <div class="">
                                <div class=" ">
                                    <div class="screen">
                                        <div class="screen-header">
                                            <div class="screen-header-left">
                                                <div class="screen-header-button close"></div>
                                                <div class="screen-header-button maximize"></div>
                                                <div class="screen-header-button minimize"></div>
                                            </div>
                                            <div class="screen-header-right">
                                                <div class="screen-header-ellipsis"></div>
                                                <div class="screen-header-ellipsis"></div>
                                                <div class="screen-header-ellipsis"></div>
                                            </div>
                                        </div>
                                        <div class="screen-body bg">
                                            <div class="screen-body-item left">
                                                <div class="app-title ">

                                                    <img src={contact} alt="" className='img-fluid' />
                                                </div>
                                                <div class="app-contact heading3">CONTACT INFO : +62 81 314 928 595</div>
                                            </div>
                                            <div class="screen-body-item">
                                                <div class="app-form">
                                                    <div class="app-form-group">
                                                        <input class="app-form-control heading5" placeholder="NAME" />
                                                    </div>
                                                    <div class="app-form-group">
                                                        <input class="app-form-control heading5" placeholder="EMAIL" />
                                                    </div>
                                                    <div class="app-form-group">
                                                        <input class="app-form-control heading5" placeholder="CONTACT NO" />
                                                    </div>
                                                    <div class="app-form-group message">
                                                        <input class="app-form-control heading5" placeholder="MESSAGE" />
                                                    </div>
                                                    <a href='#' class='primary-btn text-center'>
                                                        <span className='text-center heading3'>Submit</span>
                                                        <div class='liquid'></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <button type="submit">Submit</button> */}


                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
            <section class="contact_info_section pt_150 pb_120">
                <div class="container ">

                    <div class="row hovering-eff">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="contact_block_one mb_30 aos-init aos-animate " data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                                <div class="contact_block_icon"><i class="bi bi-geo-alt"></i></div>
                                <div class="contact_block_title heading4"style={{color:"#c0093f"}}><h4>Our Location</h4></div>
                                <div class="contact_block_text heading3 fs-6"><p>Anna Nagar, <br />Chennai-600101</p></div>
                                
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="contact_block_one mb_30 aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="550">
                                <div class="contact_block_icon"><i class="bi bi-envelope"></i></div>
                                <div class="contact_block_title heading4 " style={{color:"#c0093f"}}><h4>Email Address</h4></div>
                                <div class="contact_block_text heading3 "><p><a href="#" className='contact1'>  info@sarvamangalainvest.in</a> <br/><a href="#" className='contact1'>  info@sarvamangalainvest.in</a> </p></div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="contact_block_one mb_30 aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                                <div class="contact_block_icon"><i class="bi bi-telephone"></i></div>
                                <div class="contact_block_title heading4"style={{color:"#c0093f"}}><h4>Phone Number</h4></div>
                                <div class="contact_block_text heading3"><p>Emergency Cases <br /><a href="#" className='contact1'>  04426155554</a></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}
