import React from "react";
import LaunchingIcon from "../assets/Vector-img.png";
import LaunchingRight from "../assets/launching-right-img.png";

function Launching() {
  return (
    <section className="launching-section">
      <div className="launching-caption">
        <h3>Launching </h3>
        <h2>signature slam academy Hunter Valley</h2>
        <h4>SSA Connectivity</h4>
        <ul>
          <li>
            <img src={LaunchingIcon} alt="Location icon" />
            <p>hunter valley golf and country club</p>
            <span className="border"></span>
            <span className="text">220m</span>
          </li>
          <li>
            <img src={LaunchingIcon} alt="Location icon" />
            <p>rydges resort hunter valley</p>
            <span className="border"></span>
            <span className="text">220m</span>
          </li>
          <li>
            <img src={LaunchingIcon} alt="Location icon" />
            <p>cressnock airport</p>
            <span className="border"></span>
            <span className="text">220m</span>
          </li>
          <li>
            <img src={LaunchingIcon} alt="Location icon" />
            <p>cressnock CBD</p>
            <span className="border"></span>
            <span className="text">220m</span>
          </li>
          <li>
            <img src={LaunchingIcon} alt="Location icon" />
            <p>nulkaba public school</p>
            <span className="border"></span>
            <span className="text">220m</span>
          </li>
          <li>
            <img src={LaunchingIcon} alt="Location icon" />
            <p>cressnock hospital</p>
            <span className="border"></span>
            <span className="text">220m</span>
          </li>
          <li>
            <img src={LaunchingIcon} alt="Location icon" />
            <p>mcdonalds, KFC, Oporto</p>
            <span className="border"></span>
            <span className="text">220m</span>
          </li>
        </ul>
      </div>
      <div className="launching-img">
        <img src={LaunchingRight} alt="Signature Slam Academy Hunter Valley" />
      </div>
    </section>
  );
}

export default Launching;
