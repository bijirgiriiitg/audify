import React, { useState } from "react";
import workapi from "./API/workApi.js";

const About = () => {
  const [workData] = useState(workapi);
  console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <div className="row">
            {workData.map((curElem) => {
              const { logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
