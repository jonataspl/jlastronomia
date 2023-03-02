import React from "react";
import "./../components/styled.css";

const Modal = ({ showModal, closeModal, children }) => {
  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
