// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="hdr flx_a_cntr">
      <div className="hdr_wraper flx_a_sb">
        <div className="hdr_left  flx_a_cntr">BINYAM</div>
        <nav className="hdr_nav flx_a">
          <a className="hdr_link" href="#home">
            Home
          </a>
          <a className="hdr_link" href="#about">
            About
          </a>
          <a className="hdr_link" href="#projects">
            Projects
          </a>
          <a className="hdr_link" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
