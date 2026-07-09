import React from "react";
import FacilitiesImg1 from "../assets/Facilities-img1.jpg";
import FacilitiesPlay from "../assets/Facilities-Play-Icon.png";
import facilitiesRightIcon from "../assets/facilities-right-icon.png";
import Accommodation from "../assets/Accommodation.jpg";

function Facilities() {
  return (
    <section className="facilities-sec">
      <div className="container">
        <div className="features-top-main">
          <div className="features-top-heading-wrapper">
            <div className="heading-wrapper-caption">
              <h3 className="section-title">
                Facilities <span></span>
              </h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
            </div>
          </div>
          <div className="facilities-card-wrapper">
            <div className="facilities-card">
              <div className="facilities-card-img">
                <img src={FacilitiesImg1} alt="" />
                <a href="#">
                  <img src={FacilitiesPlay} alt="" />
                </a>
              </div>
              <div className="facilities-card-caption">
                <h3>Tennis</h3>
                <ul>
                  <li>9 Clay Courts </li>
                  <li>4 Hard Courts </li>
                </ul>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
            </div>
            <div className="facilities-card">
              <div className="facilities-card-img">
                <img src={Accommodation} alt="" />
                <a href="#">
                  <img src={FacilitiesPlay} alt="" />
                </a>
              </div>
              <div className="facilities-card-caption">
                <h3>Accommodation</h3>
                <ul>
                  <li>5 Star Hotel</li>
                </ul>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-bottom-main">
          <div className="facilities-card-wrapper">
            <div className="facilities-card">
              <div className="facilities-card-img">
                <img src={FacilitiesImg1} alt="" />
                <a href="#">
                  <img src={FacilitiesPlay} alt="" />
                </a>
              </div>
              <div className="facilities-card-caption">
                <h3>Tennis</h3>
                <ul>
                  <li>9 Clay Courts </li>
                  <li>4 Hard Courts </li>
                </ul>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
            </div>
            <div className="facilities-card">
              <div className="facilities-card-img">
                <img src={Accommodation} alt="" />
                <a href="#">
                  <img src={FacilitiesPlay} alt="" />
                </a>
              </div>
              <div className="facilities-card-caption">
                <h3>Tennis</h3>
                <ul>
                  <li>9 Clay Courts </li>
                  <li>4 Hard Courts </li>
                </ul>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="facilitiesRightIcon">
        <img src={facilitiesRightIcon} className="facilitiesRightIcon" />
      </div>
    </section>
  );
}

export default Facilities;
