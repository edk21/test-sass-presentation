import React from "react";
import { FaEnvelopeOpen, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <h2>Contact Me...</h2>
        <div className="contact__list">
          <Roll left>
            <div className="contact__email">
              <FaEnvelopeOpen /> Email
              <div className="text-secondary">email@email.com</div>
            </div>
          </Roll>
          <Bounce top>
            <div className="contact__phone">
              <FaMobileAlt /> Phone
              <div className="text-secondary">+32 02 458 98 78</div>
            </div>
          </Bounce>
          <Slide right>
            <div className="contact__phone">
              <FaMapMarkerAlt /> Address
              <div className="text-secondary">123 main street</div>
            </div>
          </Slide>
        </div>
      </section>
    </main>
  );
};

export default Contact;
