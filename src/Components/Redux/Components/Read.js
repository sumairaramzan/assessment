import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserData, ShowUserData } from "../Features/UserDataSlice";
import "./Read.css";
import { ThreeDots } from "react-loader-spinner";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";

const Read = () => {
  const [popupId, setPopUpId] = useState("");
  const [showPopUpModal, setShowPopUpModal] = useState(false);

  const setShowPopUp = () => {
    setShowPopUpModal(true);
  };

  const setClosePopUp = () => {
    setShowPopUpModal(false);
  };

  const { User, error, loading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowUserData());
  }, []);

  const handleDelete = (deleteId) => {
    dispatch(DeleteUserData(deleteId));
  };

  return (
    <div>
      <h3 className="text-center">Employee Details</h3>
      <Container className="read-css-container">
        {error ? (
          <h5>Error in the data</h5>
        ) : loading ? (
          <h5>
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </h5>
        ) : User && User.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {User.map((userData) => (
                <tr key={userData.id}>
                  <td>{userData.name}</td>
                  <td>{userData.email}</td>
                  <td>{userData.age}</td>
                  <td>
                    <Button
                      onClick={() => [setPopUpId(userData.id), setShowPopUp()]}
                    >
                      View
                    </Button>
                    <Link className="m-3" to={`/update/${userData.id}`}>
                      Update
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(userData.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h5>No data available</h5>
        )}
      </Container>
      {showPopUpModal && (
        <PopUp
          setClosePopUp={setClosePopUp}
          setOpenPopUp={setShowPopUp}
          id={popupId}
        />
      )}
    </div>
  );
};

export default Read;
