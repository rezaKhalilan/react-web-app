import React from "react";
import "./Footer.css";
import logo from "../../logo.svg";
import { links, social } from "../Navbar/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="lists">
          <h5 className="lists-head">Navigation :</h5>
          <ul className="lists-ul">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <Link to={url}>{icon}</Link>
              </li>
            );
          })}
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="bottom-footer">
        <h6>created by Reza Khalilan</h6>
      </div>
    </footer>
  );
};

export default Footer;
