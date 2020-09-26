import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="header"
      style={{ position: "sticky", top: "0", zIndex: "1" }}
    >
      <Navbar.Brand href="">
        <Link to="/home">
          <img src="Logo.png" alt="" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto " id="N_firstPart">
          <Nav.Link>
            <Link to="/home">
              <span id="N_menu">Home</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/review">
              <span id="N_menu">Testimonial</span>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">
              <span id="N_menu">Contact us</span>
            </Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/login">
              {" "}
              <i className="fas fa-user-cog" id="N_menu"></i>
            </Link>
          </Nav.Link>

          <div className="footer-social-icons">
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/amin.rafaey"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/amin.rafaey"
                  className="social-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/amin.rafaey"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
