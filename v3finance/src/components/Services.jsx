import React from "react";
// import capital from '../assets/images/capital.jpg'
import list from "../assets/images/list.png";
import account from "../assets/images/account.png";
import process from "../assets/images/process.png";
import calendar from "../assets/images/calendar.png";
import { Link } from "react-router-dom";
import business from "../assets/images/Business-loan-bg.png";
import edu from "../assets/images/edu (2).png";
import home from "../assets/images/home (4).png";
import gold from "../assets/images/gold.png";
import agri from "../assets/images/agri.png";
import car from "../assets/images/car.png";

export default function Services() {
  return (
    <>
      <section className="service">
        <h1 className="text-danger">Business Loan</h1>

        <div className="container  p-5 business-bg rounded-3">
          {/* <div class="wrapper">
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
            <div>
              <span class="dot"></span>
            </div>
          </div> */}
          {/* <div className="row align-items-center">
            <div className="col-lg-4 left-sec mt-3">
              <div data-aos="fade-right" data-aos-duration="400">
                <div
                  className="card border-0 mb-5"
                  // to="#smokemodelling"
                  data-bs-toggle="offcanvas"
                >
                  <div className="d-flex align-items-center">
                    <div className="card-icon p-3">
                      <img
                        src={list}
                        className="rounded-circle display-6"
                        alt="step 2"
                      />
                    </div>
                    <div className="card-body px-2 py-4 pe-3">
                      <h5 className="card-title text-capitalize mb-0 ">
                        Personal Loan
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="800">
                <div
                  className="card left-go border-0 mb-5"
                  // to="#firestategies"
                  data-bs-toggle="offcanvas"
                >
                  <div className="d-flex align-items-center">
                    <div className="card-icon p-3">
                      <img
                        src={list}
                        className="rounded-circle display-6"
                        alt="step 2"
                      />
                    </div>
                    <div className="card-body px-2 py-4 pe-3">
                      <h5 className="card-title text-capitalize mb-0">
                        Education Loan
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-duration="900">
                <div
                  className="card border-0 mb-5"
                  // to="#smokemodelling"
                  data-bs-toggle="offcanvas"
                >
                  <div className="d-flex align-items-center">
                    <div className="card-icon p-3">
                      <img src={process} alt="step 3" />
                    </div>
                    <div className="card-body px-2 py-4 pe-3">
                      <h5 className="card-title text-capitalize mb-0">
                        Home Loan
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-none d-lg-flex d-flex justify-content-center align-items-center">
              <div className="bgimage-holder">
                <img
                  src={business}
                  data-aos="flip-left"
                  data-aos-duration="1200"
                  alt="steps"
                  className="w-100 h-100"
                />
              </div>
            </div>

            <div className="col-lg-4 mt-3 right-sec">
              <div data-aos="fade-left" data-aos-duration="600">
                <div
                  className="card border-0 mb-5"
                  // to="#strecturalfire"
                  data-bs-toggle="offcanvas"
                >
                  <div className="d-flex align-items-center">
                    <div className="card-icon p-3">
                      <img src={account} alt="step 4 " />
                    </div>
                    <div className="card-body px-2 py-4 pe-3">
                      <h5 className="card-title text-capitalize mb-0">
                        Business Loan
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="700">
                <div
                  className="card right-go border-0 mb-5"
                  // to="#firesuppression"
                  data-bs-toggle="offcanvas"
                >
                  <div className="d-flex align-items-center">
                    <div className="card-icon p-3">
                      <img src={process}alt="step 5" />
                    </div>
                    <div className="card-body px-2 py-4 pe-3">
                      <h5 className="card-title text-capitalize mb-0">
                        Gold Loan
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="00">
                <div
                  className="card border-0 mb-5"
                  // to="#sprinklersystem"
                  data-bs-toggle="offcanvas"
                >
                  <div className="d-flex align-items-center">
                    <div className="card-icon p-3">
                      <img src={calendar} alt="step 6" />
                    </div>
                    <div className="card-body px-2 py-4 pe-3">
                      <h5 className="card-title text-capitalize mb-0">
                    Agriculture Loan
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mx-auto">
              <div
                className="card border-0 mb-1"
                data-aos="fade-up"
                data-aos-duration="900"
                // to="#pressrisation"
                data-bs-toggle="offcanvas"
              >
                <div className="d-flex align-items-center">
                  <div className="card-icon p-3">
                    <img src={list} alt="step 7" />
                  </div>
                  <div className="card-body px-2 py-4 pe-3">
                    <h5 className="card-title text-capitalize mb-0">
                      Vehicle Loan
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div className="row justify-content-center align-items-stretch g-4">
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-2 rounded-3">
                  <div className="text-center">
                    <img src={edu} className="img-fluid" alt="" />
                  </div>
                  <a href="">
                    {" "}
                    <p className="fs-5 text-center">Education Loan</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-2 rounded-3">
                  <div className="text-center">
                    <img src={gold} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Gold Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-2 rounded-3">
                  <div className="text-center">
                    <img src={home} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Home Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-2 rounded-3">
                  <div className="text-center">
                    <img src={agri} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Agriculture Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-2 rounded-3">
                  <div className="text-center">
                    <img src={car} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Vehicle Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-2 rounded-3">
                  <div className="text-center">
                    <img src={edu} className="img-fluid" alt="" />
                  </div>
                  <p className="fs-5 text-center">Education Loan</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" mt-3 cardshadow p-2 rounded-3">
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
      <section className="bg-success">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-8">
              <div className="bg-primary">
                <h1>hi</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-warning">
                <h1>hi</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
