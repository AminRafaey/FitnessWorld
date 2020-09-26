import React, { useState } from "react";
import "./admin.css";
import Table from "react-bootstrap/Table";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export const A_Members = (props) => {
  const d = new Date();
  const [memberForTable, setMemberForTable] = useState([...props.member]);

  const A_delMember = (mem) => {
    props.setMember(props.member.filter((m) => m !== mem));
    setMemberForTable(props.member.filter((m) => m !== mem));
    console.log(memberForTable);
  };

  const A_filterMember = (val) => {
    let filValue;
    if (val === 0) {
      setMemberForTable([...props.member]);
    } else if (val === 1) {
      setMemberForTable([...props.member]);
      setMemberForTable(
        memberForTable.filter((m) => {
          if (d.getMonth() == 0) {
            if (parseInt(m.date[7] + m.date[8]) == d.getFullYear() - 2000) {
              return true;
            } else if (
              parseInt(m.date[3]) == 12 &&
              m.date[7] + m.date[8] == d.getFullYear() - 2001
            )
              return true;
            else {
              return false;
            }
          } else if (
            parseInt(m.date[7] + m.date[8]) ==
            d.getFullYear() - 2000
          ) {
            if (parseInt(m.date[3]) >= d.getMonth()) return true;
            else return false;
          } else return false;
        })
      );
    } else {
      setMemberForTable([...props.member]);
      setMemberForTable(
        memberForTable.filter(
          (m) => parseInt(m.date[7] + m.date[8]) >= d.getFullYear() - 2001
        )
      );
    }
  };

  const A_handleSearch = (e) => {
    if (!e.target.value) {
      setMemberForTable([...props.member]);
      return;
    }
    setMemberForTable(
      memberForTable.filter((m) => {
        if (m.name.search(e.target.value) >= 0) {
          return true;
        } else {
          return false;
        }
      })
    );

    console.log(memberForTable);
  };

  return (
    <div>
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
              Last One Month
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => A_filterMember(3)}>
              Last 1 Year
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Extra</NavDropdown.Item>
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
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Date of Joining</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {memberForTable.map((m, i) => (
            <tr key={m.name}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>{m.mail}</td>
              <td>{m.dob}</td>
              <td>{m.date}</td>

              <td>
                <Button variant="danger" onClick={() => A_delMember(m)}>
                  <i class="far fa-trash-alt"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
