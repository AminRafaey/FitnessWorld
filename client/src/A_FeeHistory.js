import "./admin.css";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const A_FeeHistory = (props) => {
  const [Fmember, setFMember] = useState([...props.member]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();

  const F_handleEnable = (mem) => {
    console.log(document.getElementsByClassName(mem.name)[0].disabled);

    document.getElementsByClassName(mem.name)[0].disabled = false;
  };

  const F_handleFeeStatus = (mem) => {
    if (mem.fee3 === false) mem.fee3 = true;
    else mem.fee3 = false;
    let temp = [...props.member];
    temp[temp.indexOf(mem)] = mem;
    props.setMember(temp);
    console.log(Fmember);
    console.log(props.member);
  };

  const A_handleSearch = (e) => {
    if (!e.target.value) {
      setFMember([...props.member]);
      return;
    }
    setFMember(
      Fmember.filter((m) => {
        if (m.name.search(e.target.value) >= 0) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  const A_filterMember = (val) => {
    if (val === 0) {
      setFMember([...props.member]);
    } else if (val === 1) {
      setFMember(props.member.filter((m) => m.fee3 === true));
    } else if (val === 2) {
      setFMember(props.member.filter((m) => m.fee3 === false));
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar bg="light" expand="lg" className="row">
        <Nav
          className="mr-auto"
          className="col-md-4 col-sm-6"
          style={{ flexDirection: "row" }}
        >
          <NavDropdown title="Filter" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => A_filterMember(0)}>
              All
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => A_filterMember(1)}>
              Paid
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => A_filterMember(2)}>
              Unpaid
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form
          inline
          className="col-md-8 col-sm-6"
          style={{ flexWrap: "nowrap" }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(event) => A_handleSearch(event)}
            size="20px"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>{monthNames[d.getMonth()] + "-" + d.getFullYear()}</th>
            <th>{monthNames[d.getMonth() - 1] + "-" + d.getFullYear()}</th>
            <th>{monthNames[d.getMonth() - 2] + "-" + d.getFullYear()}</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {Fmember.map((m, i) => (
            <tr key={m.name}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>
                <input
                  type="checkBox"
                  id="male"
                  className={m.name}
                  name=""
                  value="feeOne"
                  checked={m.fee3}
                  disabled={true}
                  onChange={() => F_handleFeeStatus(m)}
                />
              </td>
              <td>
                <input
                  type="checkBox"
                  id="male"
                  className={m.name}
                  name=""
                  value="feeTwo"
                  checked={m.fee2}
                  disabled={true}
                />
              </td>
              <td>
                <input
                  type="checkBox"
                  id="male"
                  className={m.name}
                  name=""
                  value="feeOne"
                  checked={m.fee1}
                  disabled={true}
                />
              </td>
              <td>
                <Button variant="info" onClick={() => F_handleEnable(m)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="row">
        <div className="col-sm-12 form-group">
          <button
            type="submit"
            className="C_btn btn-lg btn-default pull-right"
            style={{ backgroundColor: "#17a2b8", borderColor: "#17a2b8" }}
          >
            Send &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
