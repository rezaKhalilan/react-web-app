import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
