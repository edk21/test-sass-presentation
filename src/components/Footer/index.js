import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social__icons">
        <a href="#" className="social__icon iconTwitter">
          <FaTwitter />
        </a>
        <a href="#" className="social__icon iconFacebook">
          <FaFacebookF />
        </a>
        <a href="#" className="social__icon iconInsta">
          <FaInstagram />
        </a>
        <a href="#" className="social__icon inconGithub">
          <FaGithub />
        </a>
      </div>
      <div className="copyright">&copy; Copyright 2022</div>
    </footer>
  );
};

export default Footer;
