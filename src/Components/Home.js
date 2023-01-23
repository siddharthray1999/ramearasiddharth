import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import logo from "../Image/logo.png";
import vector from "../Image/Vector.png";
import vector1 from "../Image/Vector (1).png";
import vector2 from "../Image/Vector (2).png";

const Home = () => {
  return (
    <div className="body-img">
      <img src={logo} alt="" className="img-logo" />
      <Navbar bg="light" expand="lg" className="navbar-back">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                style={{ color: "#FFFFFF", fontFamily: "Montserrat" }}
              >
                Home
              </Nav.Link>

              <NavDropdown
                title="Our Industries"
                id="basic-nav-dropdown"
                style={{ fontFamily: "Montserrat" }}
              ></NavDropdown>
              <NavDropdown
                style={{ fontFamily: "Montserrat" }}
                title="Our Companies"
                id="basic-nav-dropdown"
              ></NavDropdown>
            </Nav>
            <Nav.Link
              href="#Carrier"
              style={{ color: "#FFFFFF", fontFamily: "Montserrat" }}
            >
              Carrier
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              style={{
                marginLeft: "12px",
                color: "#FFFFFF",
                fontFamily: "Montserrat",
              }}
            >
              Contact
            </Nav.Link>
          </Navbar.Collapse>
          <BiSearch className="search-icon" />
        </Container>
      </Navbar>

      <div>
        <img src={vector} alt="" className="twitter-logo" />
      </div>
      <div>
        <img src={vector1} alt="" className="instagram-logo" />
      </div>
      <div>
        <img src={vector2} alt="" className="facebook-logo" />
      </div>
      <div>
        <h1 className="brand-name">
          RAMAERA <br />
          INDUSTRIES
        </h1>
        <h5 className="brand-heading">
          An incredible multi-industries approach oriented <br />
          financial independence, customer focus <br />
          and serving the best quality to the people.
        </h5>
      </div>
      <div>
        <button className="button-explore">Explore More</button>
      </div>
    </div>
  );
};

export default Home;
