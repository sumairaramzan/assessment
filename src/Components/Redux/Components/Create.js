import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Create.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserData } from "../Features/UserDataSlice";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const getUserData = (e) => {
    setUserData(
      {
        ...userData,
        [e.target.name]: [e.target.value],
      },
      console.log(userData, "Form Data which i'm Giving")
    );
  };
  const handleSubmitt = (e) => {
    e.preventDefault();

    dispatch(CreateUserData(userData));
    navigate("/Read");
  };

  return (
    <div>
      <Container className="create-css">
        <Row>
          <h3>Enter the Employee Data</h3>
          <Col>
            <form onSubmit={handleSubmitt}>
              <h5>Name</h5>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onChange={getUserData}
                required
              />
              <h5>Email</h5>
              <input
                type="email"
                name="email"
                autoComplete="off"
                onChange={getUserData}
                required
              />
              <h5>Age</h5>
              <input type="age" name="age" onChange={getUserData} />
              <h5>Gender</h5>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={getUserData}
                required
              />
              &nbsp;&nbsp; Male
              <br />
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={getUserData}
                required
              />
              &nbsp;&nbsp; Female
              <br />
              <br />
              <div>
                <button className="btn-submit" type="submit">
                  Submitt
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Create;
