import React from "react";
import craigTiley from "../assets/craig-tiley-img.jpg";
import stephenFarrow from "../assets/stephen-farrow.jpg";
import cameronPearson from "../assets/cameron-pearson.jpg";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Craig Tiley",
      designation: "CEO Tennis Australia & Australian Open",
      image: craigTiley,
    },
    {
      id: 2,
      name: "Stephen Farrow",
      designation: "CEO Tennis Australia & Australian Open",
      image: stephenFarrow,
    },
    {
      id: 3,
      name: "Cameron Pearson",
      designation: "CEO Tennis Australia & Australian Open",
      image: cameronPearson,
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="features-top-heading-wrapper">
          <div className="heading-wrapper-caption">
            <h3 className="section-title">
              Meet our professionals <span></span>
            </h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
          </div>
          <a href="#" className="register-btn">
            View All
          </a>
        </div>

        <div className="team-wrapper">
          {teamMembers.map((val) => {
            return (
              <div className="team-card" key={val.id}>
                <img src={val.image} alt={val.name} />
                <div className="team-caption">
                  <h3>{val.name}</h3>
                  <p>{val.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
