import React from "react";
import SSAlogoFooter from "../assets/SSA-logo-footer.png";

function Footer() {
  const navLinks = [
    "About Us",
    "Coaches",
    "News",
    "Matches",
    "Events",
    "FAQs",
    "Programs",
    "Amenities",
    "Blogs",
  ];
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src={SSAlogoFooter} />
          </div>
          <div className="footer-right">
            <div className="footer-right-top">
              <ul>
                {navLinks.map((val) => {
                  return (
                    <li key={val}>
                      <a href="#">{val}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer-right-bottom">
              <div className="location">
                <h4>signature slam academy</h4>
                <p>30 wills hill road, lovedale, nSW</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true"></i> + 91
                      5642589752
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      info@ssagroup.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-link">
                <h4>Connect with us</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="condition-sec">
        <div className="container">
          <ul>
            <li>
              <a href="#">terms and condition</a>
            </li>
            <li>
              <a href="#">
                © 2023 all rights reserved www.signatureslamacademy.com{" "}
              </a>
            </li>
            <li>
              <a href="#">privacy policy </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
