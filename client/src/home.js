import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

const program = [
  { name: "Fitness Studio", img: "program/fitnessStudio.jpg" },
  { name: "Yoga", img: "program/yoga.jpg" },
  { name: "Personal Training", img: "program/personalTraining.jpg" },
];

export const Start = () => {
  return (
    <div className="container-fluid H_start">
      <h1>Fitness World</h1>
      <p>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do te irure
        <br />
        dolor in reprehenderit in voluptate velit esse
        <br />
        cillum dolore eu fugiat nulla pariatur. C/O <br />
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br /> Ut enim ad minim veniam, quis nostrud exercitation
        <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br /> Duis au
        <br />
      </p>
      <Nav.Link href="#link">
        <a href="#H_forScroll">
          {" "}
          <Button variant="warning" id="H_memberBtn">
            Pay a Visit
          </Button>
        </a>
      </Nav.Link>
    </div>
  );
};

export const Program = () => {
  return (
    <div className="H_program" style={{ backgroundColor: "#ffc107" }}>
      <h2>Our Programs</h2>
      <div className="container">
        <div className="items d-flex justify-content-around flex-wrap">
          {program.map((p) => (
            <Card style={{ width: "18rem" }} key={p.name}>
              <Card.Img variant="top" src={p.img} style={{ height: "15rem" }} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Nav.Link href="#link">
                  <Button variant="warning" id="H_memberBtn">
                    Become A Member
                  </Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Coach = () => {
  const coach = [
    {
      name: "Coach One",
      img: "Coach/coach2.jpg",
      history:
        "Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Coach Two",
      img: "Coach/coach1.png",
      history:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="H_master">
      <h1>Coaches</h1>
      <div className="H_coach container">
        <div className="row">
          <div className="col-md-6">
            <div className="H_first">
              <div className="H_head">
                <img
                  src={coach[0].img}
                  alt="Generic placeholder"
                  style={{
                    height: "20rem",
                    width: "15rem",
                    float: "left",
                  }}
                />
              </div>
              <div className="H_body">
                <h5>{coach[0].name}</h5>
                <p>
                  {coach[0].history}
                  <div className="footer-social-icons">
                    <ul className="social-icons">
                      <a
                        href="https://www.facebook.com/amin.rafaey"
                        className="social-icon"
                      >
                        <li>
                          <i className="fab fa-facebook-f"></i>
                        </li>
                      </a>

                      <a
                        href="https://www.facebook.com/amin.rafaey"
                        className="social-icon"
                      >
                        <li>
                          <i className="fab fa-twitter"></i>
                        </li>{" "}
                      </a>

                      <a
                        href="https://www.facebook.com/amin.rafaey"
                        className="social-icon"
                      >
                        {" "}
                        <li>
                          <i className="fab fa-linkedin-in"></i>
                        </li>{" "}
                      </a>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="H_second">
              <div className="H_head">
                <img
                  src={coach[1].img}
                  alt="Generic placeholder"
                  style={{
                    height: "20rem",
                    width: "15rem",
                    float: "left",
                  }}
                />
              </div>
              <div className="H_body">
                <h5>{coach[1].name}</h5>
                <p>
                  {coach[1].history}
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>
        <br />
        <br />
        <br />
        <br />
      </span>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="row H_foot" id="H_forScroll">
      <div className="col-sm-4">
        <i
          className="fas fa-map-marker-alt H_fa-map-marker"
          style={{ fontSize: "60px" }}
        ></i>
        <p className="H_map">
          <br />
          Address:
          <br /> House no. 425
        </p>
      </div>
      <div className="col-sm-4">
        <i className="fa fa-phone H_fa-phone" style={{ fontSize: "60px" }}></i>
        <p className="H_phone">
          <br />
          Contact #:
          <br /> +923348035644
        </p>
      </div>
      <div className="col-sm-4">
        <i
          className="fa fa-clock-o H_fa-clock-o"
          style={{ fontSize: "60px" }}
        ></i>
        <p>
          <br />
          Meeting Hours:
          <br /> Monday-Saturday 18:00-22:00
        </p>
      </div>
    </div>
  );
};
