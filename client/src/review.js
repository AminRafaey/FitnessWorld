import React, { useState, useEffect } from "react";
import "./review.css";

export const Review = () => {
  var d = new Date();
  const [comments, setComments] = useState([]);
  const getReview = () => {
    fetch("/review/allReview")
      .then((res) => res.json())
      .then((review) => setComments(review));
  };

  useEffect(() => getReview());

  const Write = () => {
    let comment = { name: "", title: "", review: "", date: "" };

    const handleCommentSubmit = (e) => {
      console.log("Bitch");

      var d = new Date();
      comment.date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
      e.preventDefault();
      fetch("/review/addReview", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "success") {
            alert("Review Posted");
            let temp = [...comments];
            temp.push(comment);
            setComments(temp);
          } else if (response.status === "fail") {
            alert("Message failed to send.");
            console.log("Fucking failed");
          }
        });
    };

    const handleUpdate = (e, value) => {
      if (value === 1) {
        comment.review = e.target.value;
      } else if (value === 2) {
        comment.title = e.target.value;
      } else {
        comment.name = e.target.value;
      }
    };
    return (
      <div className="R_body">
        <div id="R_form_container">
          <h2>Voice your opinion! Review Fitness World now</h2>
          <form
            role="form"
            method="post"
            id="reused_form"
            onSubmit={(event) => handleCommentSubmit(event)}
          >
            <div className="row">
              <div className="form-group">
                <label htmlFor="email"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  style={{ display: "inline" }}
                  onChange={(event) => handleUpdate(event, 3)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label htmlFor="name"> Title</label>
                <textarea
                  className="form-control"
                  type="textarea"
                  id="message"
                  name="message"
                  maxLength="50"
                  rows="1"
                  cols="70"
                  onChange={(event) => handleUpdate(event, 2)}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <label htmlFor="message"> Your review:</label>
                <textarea
                  className="form-control"
                  type="textarea"
                  id="message"
                  name="message"
                  maxLength="220"
                  rows="5"
                  cols="70"
                  onChange={(event) => handleUpdate(event, 1)}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-lg btn-default subBtn"
              style={{ backgroundColor: "#ffc107", marginLeft: "70%" }}
            >
              Submit &rarr;
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Read = () => {
    return (
      <div className="container ">
        <div className="row ">
          {comments.map((c) => (
            <div className="col-md-6 col-sm-12 R_readPart">
              <div className="R_commentBox R_messageArea">
                <h3>{c.title}</h3>

                <p>{c.review}</p>
                <span className="R_test"></span>
              </div>
              <h5 className="R_name">{c.name}</h5>
              <p>{c.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="R_master">
      <Write />
      <Read />
    </div>
  );
};
