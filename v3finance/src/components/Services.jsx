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
    </>
  );
}
