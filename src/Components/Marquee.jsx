import React from "react";

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-content">
        <span className="fill">ADOPT</span>
        <span className="dot">•</span>
        <span className="outline">NURTURE</span>
        <span className="dot">•</span>
        <span className="fill">DELIVER</span>
        <span className="dot">•</span>

        <span className="outline">ADOPT</span>
        <span className="dot">•</span>
        <span className="fill">NURTURE</span>
        <span className="dot">•</span>
        <span className="outline">DELIVER</span>
        <span className="dot">•</span>

        <span className="fill">ADOPT</span>
        <span className="dot">•</span>
        <span className="outline">NURTURE</span>
        <span className="dot">•</span>
        <span className="fill">DELIVER</span>
      </div>
    </div>
  );
}

export default Marquee;
