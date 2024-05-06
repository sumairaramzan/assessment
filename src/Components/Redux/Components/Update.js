import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUserData } from "../Features/UserDataSlice";

const Update = () => {
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "Id in the Update");

  const { User, loading } = useSelector((state) => state.cart);
 

  console.log(updateData, "Before Updating");

  useEffect(() => {
    if (id) {
      const ShowUserPopUp = User.filter((ele) => ele.id === id);
      console.log(ShowUserPopUp, "Here is the Data to Update");
      setUpdateData(ShowUserPopUp[0]);
    }
  }, []);

  const updateNewData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: [e.target.value],
    });
    console.log(updateData, "After Updating");
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    dispatch(UpdateUserData(updateData));
    navigate("/read");
  };

  return (
    <div>
      <Container className="create-css">
        <Row>
          <h3>Edit the Post</h3>
          <Col>
         

            <form onSubmit={handleSubmitt}>
              <h5>Name</h5>
              <input
                type="text"
                name="name"
                value={updateData?.name}
                autoComplete="off"
                onChange={updateNewData}
                required
              />
              <h5>Email</h5>
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={updateData?.email}
                onChange={updateNewData}
                required
              />
              <h5>Age</h5>
              <input
                type="age"
                name="age"
                value={updateData?.age}
                onChange={updateNewData}
                required
              />
              <h5>Gender</h5>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={updateData && updateData?.gender[0] === "male"}
                onChange={updateNewData}
                required
              />
              &nbsp;&nbsp; Male
              <br />
              <input
                type="radio"
                name="gender"
                value="female"
                checked={updateData && updateData?.gender[0] === "female"}
                onChange={updateNewData}
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

export default Update;
