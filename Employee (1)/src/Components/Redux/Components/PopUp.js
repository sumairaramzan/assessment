import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function Example({ setClosePopUp, setOpenPopUp, id }) {
 
  const allUser = useSelector((state) => state.cart.User);
  const ShowUserPopUp = allUser.filter((ele) => ele.id === id);
  console.log(ShowUserPopUp, "Here is the Data in the Popup to be Display");
  return (
    <>
      <h2>Data in the Modal</h2>
      <Modal show={setOpenPopUp} backdrop="static" keyboard={false}>
        <div className="p-4">
          <h3>Name: &nbsp;{ShowUserPopUp[0].name}</h3>
          <p>Email: &nbsp;{ShowUserPopUp[0].email}</p>
          <h5>Gender: &nbsp;{ShowUserPopUp[0].gender}</h5>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={setClosePopUp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;
