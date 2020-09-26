import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./admin.css";
import { A_Members } from "./A_Members";
import { A_AddMember } from "./A_AddMember";
import { A_FeeHistory } from "./A_FeeHistory";
import { Switch, Route, useHistory } from "react-router-dom";

export const Admin = () => {
  const d = new Date();
  const [member, setMember] = useState([
    {
      name: "Ali",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
      fee1: true,
      fee2: true,
      fee3: false,
    },
    {
      name: "hamza",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
      fee1: true,
      fee2: true,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(),
      fee1: true,
      fee2: true,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
      fee1: true,
      fee2: false,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
      fee1: false,
      fee2: true,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: "12/3/2018",
      fee1: true,
      fee2: true,
      fee3: true,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: "12/3/2019",
      fee1: false,
      fee2: false,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: "12/3/2019",
      fee1: true,
      fee2: false,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(),
      fee1: true,
      fee2: true,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: "12/2/2020",
      fee1: true,
      fee2: true,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
      fee1: true,
      fee2: true,
      fee3: false,
    },
    {
      name: "Amin",
      mail: "amin@gmail.com",
      dob: "1999-08-11",
      date: "12/2/2020",
      fee1: true,
      fee2: true,
      fee3: false,
    },
  ]);

  return (
    <div>
      <A_header />
      <div className="row">
        <div className="col-md-3 A_left">
          <A_SideBar />
        </div>
        <div className="col-md-9">
          <Switch>
            <Route exact path="/admin/addMember">
              <A_AddMember member={member} setMember={setMember} />
            </Route>
            <Route exact path="/admin/members">
              {console.log("Member")}
              <A_Members member={member} setMember={setMember} />
            </Route>
            <Route exact path="/admin/duesStatus">
              <A_FeeHistory member={member} setMember={setMember} />
            </Route>
            <Route exact path="/admin/">
              <A_Members member={member} setMember={setMember} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const A_header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        className="A_header"
        style={{ position: "sticky", top: "0", zIndex: "1", height: "90px" }}
      >
        <Navbar.Brand href="#home">
          <Link to="/home">
            <img src="Logo.png" alt="" />
          </Link>
        </Navbar.Brand>

        <Nav id="A_secondPart">
          <Nav.Link href="#link">
            <img
              src="profile.jpg"
              alt="Profile"
              className="A_profile"
              style={{ float: "right" }}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

const A_SideBar = () => {
  return (
    <Navbar bg="dark" expand="lg" id="A_bar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ width: "25px" }}>
        <Nav
          className="mr-auto "
          id="A_firstPart"
          style={{ flexDirection: "column" }}
        >
          <Nav.Link>
            <Link to="/admin/addMember">
              <Button variant="dark" className="A_options">
                <i class="fas fa-address-card A_icon1"></i>
                Add Member
              </Button>{" "}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/admin/members">
              <Button variant="dark" className="A_options">
                <i class="fas fa-users A_icon2"></i>
                Members
              </Button>{" "}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Button variant="dark" className="A_options">
              <i class="fas fa-bullhorn A_icon3"></i> Make Public
            </Button>{" "}
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/admin/duesStatus">
              <Button variant="dark" className="A_options">
                <i class="fas fa-hand-holding-usd A_icon4"></i> Dues Status
              </Button>{" "}
            </Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Button variant="dark" className="A_options ">
              Extra
            </Button>{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
