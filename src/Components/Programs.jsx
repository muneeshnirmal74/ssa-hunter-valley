import React from "react";
import AcademyImg from "../assets/Academy-Img.jpg";
import CampsImg from "../assets/Camps-Img.png";
import PerformanceImg from "../assets/Performance-Img.jpg";

function Programs() {
  return (
    <section className="programs-sec">
      <div className="container">
        <div className="features-top-heading-wrapper">
          <div className="heading-wrapper-caption">
            <h3 className="section-title">
              Programs <span></span>
            </h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <a href="#" className="register-btn">
            Register Now
          </a>
        </div>

        <div className="programs-card-wrapper">
          <div className="programs-card">
            <img src={AcademyImg} alt="" />
            <div className="programs-card-caption">
              <h4>Academy</h4>
              <p>Live and train with us</p>
            </div>
          </div>
          <div className="programs-card">
            <img src={CampsImg} alt="" />
            <div className="programs-card-caption">
              <h4>Academy</h4>
              <p>Live and train with us</p>
            </div>
          </div>
          <div className="programs-card">
            <img src={PerformanceImg} alt="" />
            <div className="programs-card-caption">
              <h4>Academy</h4>
              <p>Live and train with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
