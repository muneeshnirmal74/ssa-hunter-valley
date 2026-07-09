import React from "react";
import banner1 from "../assets/banner1.png";
import Arrow from "../assets/Arrow-down.svg";

function Banner() {
  return (
    <section className="banner-section">
      <img
        src={banner1}
        alt="SSA Hunter Valley Banner"
        className="banner-img"
      />

      <div className="banner-center-caption">
        <h3>SSA HUNTER VALLEY</h3>

        <h2>
          Grow Your Game with the <strong>Professionals</strong>
        </h2>

        <ul>
          <li>Adopt</li>
          <li>Nurture</li>
          <li>Deliver</li>
        </ul>

        <div>
          <a href="/" className="register-btn">
            Register Now
          </a>
        </div>
      </div>

      <div className="banner-right-caption">
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-angle-double-left"></i> Weather
            </a>
          </li>

          <li className="active">
            <a href="/">
              <h4>Hunter Valley</h4>

              <div className="right-caption-wrapper">
                <h3>
                  19°
                  <sup>C</sup>
                </h3>

                <p>
                  <strong>Weather</strong>
                  <br />
                  Saturday, 8 PM
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/">
              <i className="fa-solid fa-chevrons-left"></i> Ongoing Matches
            </a>
          </li>

          <li>
            <a href="/">
              <i className="fa-solid fa-chevrons-left"></i> Score
            </a>
          </li>
        </ul>
      </div>

      <div className="bottom-arrow">
        <img src={Arrow} alt="Arrow Down" />
      </div>
    </section>
  );
}

export default Banner;
