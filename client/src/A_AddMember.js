import React, { useState } from "react";
import "./admin.css";

export const A_AddMember = (props) => {
  let tempM = { name: "", mail: "", dob: "" };

  const handleMember = (event, v) => {
    if (v === 1) {
      tempM.name = event.target.value;
      console.log(tempM.name);
    } else if (v === 2) {
      tempM.mail = event.target.value;
      console.log(tempM.mail);
    } else {
      tempM.dob = event.target.value;
      console.log(tempM.dob);
    }
  };

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    let tmp = [...props.member];
    tmp.push(tempM);
    props.setMember(tmp);

    console.log(props.member);
  };

  return (
    <div
      id="C_form_container"
      className="A_addForm_master"
      style={{ backgroundColor: "#008080", marginLeft: "-0.9rem" }}
    >
      <h2 className="A_formHeading">Membership Form</h2>

      <form
        role="form"
        method="post"
        id="reused_form"
        onSubmit={(event) => handleMemberSubmit(event)}
      >
        <div className="row">
          <div className="col-sm-6 form-group A_memberForm">
            <label htmlFor="name"> Your Name:</label>
            <input
              type="text"
              className="form-control"
              id="C_name"
              name="name"
              required
              onChange={(event) => {
                handleMember(event, 1);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="email"> Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              onChange={(event) => {
                handleMember(event, 2);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="dob"> DOB</label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              name="birthday"
              required
              onChange={(event) => {
                handleMember(event, 3);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 form-group">
            <button
              type="submit"
              className="C_btn btn-lg btn-default pull-right"
              style={{ backgroundColor: "#ffc107" }}
            >
              Send &rarr;
            </button>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
