import React from 'react';
import {  Alert  } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Naffeti Belhsan</h3>

        <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/fbnaffeti/" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/belhsan_n/" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://server-liard-theta.vercel.app/auth" className="google-plus"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/naffeti-belhsan-695530215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: [license-url] */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
          Designed by <a href="https://server-liard-theta.vercel.app/auth">Belhsan Naffeti</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
