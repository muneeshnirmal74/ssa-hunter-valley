import React from "react";
import CoachesBg from "../assets/Our-Coaches-Bg.png";
import readMoreArrow from "../assets/read-more-arrow.svg";
import eventsRightImg from "../assets/events-right-img.png";

function Coache() {
  return (
    <section className="coache-section">
      <div className="coache-left">
        <img src={CoachesBg} />
        <div className="coache-left-caption">
          <h3 className="section-title">
            Our Coaches <span></span>
          </h3>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <a href="#" className="read-btn">
            Read More <img src={readMoreArrow} />
          </a>
        </div>
      </div>
      <div className="coache-right">
        <img src={eventsRightImg} />
        <div className="coache-left-caption">
          <h3 className="section-title">
            Events <span></span>
          </h3>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <a href="#" className="read-btn">
            Read More <img src={readMoreArrow} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Coache;
