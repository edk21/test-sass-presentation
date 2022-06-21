import React from "react";
import { aboutJobs } from "./aboutJobs";

const About = () => {
  return (
    <main>
      <section className="about">
        <div className="about__bio__image">
          <div className="about__bio">
            <h2 className="text-secondary">BIO</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </div>
        <div className="jobs">
          {aboutJobs.map((job, index) => (
            <div key={index} className="jobs__job">
              <h2 className="text-secondary">{job.date}</h2>
              <h3>{job.company}</h3>
              <h6>{job.company}</h6>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
