import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex">
      <small>
        Made with ❤ by <strong className="imp-data">Kirti Sharma </strong>
      </small>

      <div className="footer-links flex">
        <a href="https://github.com/kirti2602">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kirti--sharma/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/_keeerti">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
