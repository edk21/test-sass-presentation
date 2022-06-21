import React from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const Main = () => {
  return (
    <main>
      <section className="home">
        <h2 className="animate__fadeInDown">Hi, my name is: </h2>
        <Fade left>
          <h1 className="home__name">
            John <span className="home__name-last">Doe</span>
          </h1>
        </Fade>
        <Bounce left>
          <h2 className="bottom">Web Developer, Front-end Developer </h2>
        </Bounce>
      </section>
    </main>
  );
};

export default Main;
