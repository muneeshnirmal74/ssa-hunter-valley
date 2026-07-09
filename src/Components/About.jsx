import galleryImg1 from "../assets/gallery-img1.jpg";
import galleryImg2 from "../assets/gallery-img2.jpg";
import galleryImg3 from "../assets/gallery-img3.jpg";
import galleryImg4 from "../assets/gallery-img4.jpg";
import React, { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section className="about-us">
      <div className="container">
        <div className="heading-top">
          <h3>
            To be the first venue in the world to have
            <span> 60 multi surface courts </span>
            at one location and establish the first one-stop tennis academy in
            the Asia Pacific producing Grand Slam champions.
          </h3>
        </div>

        <div className="tab-wrapper">
          <div className="tabs">
            <button
              className={activeTab === "tab1" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("tab1")}
            >
              About Us
            </button>

            <button
              className={activeTab === "tab2" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("tab2")}
            >
              Coaches
            </button>

            <button
              className={activeTab === "tab3" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("tab3")}
            >
              Vision
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "tab1" && (
              <div className="about-wrapper">
                <div className="about-caption">
                  <h3 className="section-title">
                    About Us <span></span>
                  </h3>
                  <p>
                    To be the first venue in the world to have 60 multi surface
                    courts at one location and establish first one stop tennis
                    academy in the Asia Pacific producing grand slam champions.
                  </p>
                  <ul>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                  </ul>
                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
                <div className="gallery">
                  <div className="gallery-row-first">
                    <div className="gallery-item item-1">
                      <img src={galleryImg1} alt="Image 1" />
                    </div>

                    <div className="gallery-item item-2">
                      <img src={galleryImg2} alt="Image 2" />
                    </div>
                  </div>
                  <div className="gallery-row-second">
                    <div className="gallery-item item-3">
                      <img src={galleryImg3} alt="Image 3" />
                    </div>

                    <div className="gallery-item item-4">
                      <img src={galleryImg4} alt="Image 4" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tab2" && (
              <div className="about-wrapper">
                <div className="about-caption">
                  <h3>
                    Coaches <span></span>
                  </h3>
                  <p>
                    To be the first venue in the world to have 60 multi surface
                    courts at one location and establish first one stop tennis
                    academy in the Asia Pacific producing grand slam champions.
                  </p>
                  <ul>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                  </ul>
                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
                <div className="gallery">
                  <div className="gallery-row-first">
                    <div className="gallery-item item-1">
                      <img src={galleryImg1} alt="Image 1" />
                    </div>

                    <div className="gallery-item item-2">
                      <img src={galleryImg2} alt="Image 2" />
                    </div>
                  </div>
                  <div className="gallery-row-second">
                    <div className="gallery-item item-3">
                      <img src={galleryImg3} alt="Image 3" />
                    </div>

                    <div className="gallery-item item-4">
                      <img src={galleryImg4} alt="Image 4" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "tab3" && (
              <div className="about-wrapper">
                <div className="about-caption">
                  <h3 className="section-title">
                    Vision <span></span>
                  </h3>
                  <p>
                    To be the first venue in the world to have 60 multi surface
                    courts at one location and establish first one stop tennis
                    academy in the Asia Pacific producing grand slam champions.
                  </p>
                  <ul>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                    <li>
                      <h4>20</h4>
                      <h6>courts</h6>
                    </li>
                  </ul>
                  <a href="#" className="read-more-btn">
                    Read More
                  </a>
                </div>
                <div className="gallery">
                  <div className="gallery-row-first">
                    <div className="gallery-item item-1">
                      <img src={galleryImg1} alt="Image 1" />
                    </div>

                    <div className="gallery-item item-2">
                      <img src={galleryImg2} alt="Image 2" />
                    </div>
                  </div>
                  <div className="gallery-row-second">
                    <div className="gallery-item item-3">
                      <img src={galleryImg3} alt="Image 3" />
                    </div>

                    <div className="gallery-item item-4">
                      <img src={galleryImg4} alt="Image 4" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
