import React from "react";
import galleryImg5 from "../assets/gallery-img5.jpg";
import galleryImg6 from "../assets/gallery-img6.jpg";

function Features() {
  return (
    <section className="key-features-sec">
      <div className="container">
        <div className="key-features-top">
          <div className="features-top-heading-wrapper">
            <div className="heading-wrapper-caption">
              <h3 className="section-title">
                key Features <span></span>
              </h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <a href="#" className="register-btn">
              Register Now
            </a>
          </div>
          <div className="key-features-card-wrapper">
            <div className="key-features-card">
              <ul>
                <li>First venue in the world</li>
                <li>
                  First venue in the world to have 60 multi surface courts (20
                  clay & 30 hard + 10 natural grass) at one location alongside a
                  stadium
                </li>
                <li>
                  First facility in the world to have capabilities to hold WTA &
                  ATP events on any three court surface at one location
                </li>
                <li>
                  First tennis academy in the world to have capabilities to
                  stage WTA & ATP events too
                </li>
                <li>
                  First venue in the world with tennis academy, Equestrian
                  Centre, 18 holes golf course, Exhibition Centre, Aboriginal
                  Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and
                  airport all in 500 meters radius
                </li>
                <li>First one stop tennis acaderny inAsia Pacific</li>
              </ul>
            </div>
            <div className="key-features-card">
              <ul>
                <li>First venue in the world</li>
                <li>
                  First venue in the world to have 60 multi surface courts (20
                  clay & 30 hard + 10 natural grass) at one location alongside a
                  stadium
                </li>
                <li>
                  First facility in the world to have capabilities to hold WTA &
                  ATP events on any three court surface at one location
                </li>
                <li>
                  First tennis academy in the world to have capabilities to
                  stage WTA & ATP events too
                </li>
                <li>
                  First venue in the world with tennis academy, Equestrian
                  Centre, 18 holes golf course, Exhibition Centre, Aboriginal
                  Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and
                  airport all in 500 meters radius
                </li>
                <li>First one stop tennis acaderny inAsia Pacific</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="key-features-bottom">
          <div className="features-top-heading-wrapper">
            <div className="heading-wrapper-caption">
              <h3 className="section-title">
                A Glimpse of Excellence <span></span>
              </h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <a href="#" className="register-btn">
              Register Now
            </a>
          </div>

          <div className="features-bottom-card-wrapper">
            <div className="features-bottom-card">
              <img src={galleryImg5} alt="" />
            </div>
            <div className="features-bottom-card">
              <img src={galleryImg6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
