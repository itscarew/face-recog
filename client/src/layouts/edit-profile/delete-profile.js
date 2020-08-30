import React, { useState } from "react";
import Button from "../../components/button";
import Modal from "react-modal";

const DeleteAccount = ({ deleteCurrentUser }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="mx-8">
      <h2 className="text-red-600 text-3xl">Danger Zone</h2>
      <Button className="bg-red-600 hover:bg-red-700" onClick={openModal}>
        Delete Account
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col justify-center m-8">
          <h2 className="text-2xl">You are about to delete your account !</h2>
          <div className="flex justify-center mt-4">
            <Button
              className="w-full flex items-center justify-center bg-purple-600   text-white m-4 p-2 rounded "
              onClick={closeModal}
            >
              NO
            </Button>
            <Button
              className="w-full flex items-center justify-center bg-red-600 text-white m-4 p-2  rounded "
              onClick={deleteCurrentUser}
            >
              GO AHEAD
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteAccount;
