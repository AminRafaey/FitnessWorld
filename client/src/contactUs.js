import React, { useState } from "react";
import "./contactUs.css";
export const Contact = () => {
  return (
    <div className="fluid-container">
      <div className="C_master C_foot">
        <div className="C_left">
          <div className="C_one">
            <i className="fas fa-map-marker-alt C_fa-map-marker"></i>
            <p className="C_map" style={{ paddingLeft: "150px" }}>
              <br />
              Address:
              <br /> House no. 425
            </p>
          </div>
          <div className="C_two">
            <i
              className="fa fa-phone C_fa-phone"
              style={{ marginRight: "50px" }}
            ></i>
            <p className="C_phone">
              <br />
              Contact #:
              <br /> +923348035644
            </p>
          </div>
          <div className="C_three">
            <i className="fa fa-clock-o C_fa-clock-o"></i>
            <p>
              <br />
              Meeting Hours:
              <br /> Monday-Saturday
              <br /> 18:00-22:00
            </p>
          </div>
        </div>
        <div className="C_right">
          <h1>
            <Right />
          </h1>
        </div>
      </div>
    </div>
  );
};

const Right = () => {
  const [mailInfo, setMailInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMailInfo = (e, val) => {
    let temp = { ...mailInfo };
    if (val === 3) {
      temp.message = e.target.value;
      setMailInfo(temp);
    } else if (val === 2) {
      temp.email = e.target.value;
      setMailInfo(temp);
    } else if (val === 1) {
      temp.name = e.target.value;
      setMailInfo(temp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mailInfo);
    console.log(JSON.stringify(mailInfo));

    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(mailInfo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };

  const sexy = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(mailInfo));
  };

  return (
    <div className="C_body">
      <div id="C_form_container">
        <h2>Contact Us</h2>
        <p>
          {" "}
          Please send your message below. We will get back to you at the
          earliest!{" "}
        </p>
        <form
          role="form"
          method="post"
          id="reused_form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="row">
            <div className="col-sm-12 form-group">
              <label htmlFor="message"> Message:</label>
              <textarea
                className="form-control"
                type="textarea"
                id="C_message"
                name="message"
                maxLength="6000"
                rows="7"
                onChange={(event) => {
                  handleMailInfo(event, 3);
                }}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="name"> Your Name:</label>
              <input
                type="text"
                className="form-control"
                id="C_name"
                name="name"
                required
                onChange={(event) => {
                  handleMailInfo(event, 1);
                }}
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="email"> Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                onChange={(event) => {
                  handleMailInfo(event, 2);
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
        <div
          id="success_message"
          style={{ width: "100%", height: "100%", display: "none" }}
        >
          {" "}
          <h3>Posted your message successfully!</h3>{" "}
        </div>
        <div
          id="error_message"
          style={{ width: "100%", height: "100%", display: "none" }}
        >
          {" "}
          <h3>Error</h3> Sorry there was an error sending your form.{" "}
        </div>
      </div>
    </div>
  );
};
