import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./VendorCardModal";
import ScriptTag from "react-script-tag";
import VendorForm from "../Forms/VendorForm";

export default function VendorCaroModal(props) {
  const [isModal, setIsModal] = useState(true);
  const active = isModal ? "is-active" : "";
  // const Modal = ({ closeModal, setIsModal }) => {
  //   if (!setIsModal) {
  //     return null;
  //   }
  // };

  // Modal.propTypes = {
  //   closeModal: React.PropTypes.func.isRequired,
  //   modalState: React.PropTypes.bool.isRequired,
  //   title: React.PropTypes.string,
  // };

  const handleClick = () => {
    setIsModal({ isModal: isModal });
  };

  return (
    <div>
      {/* <button
        onClick={handleClick}
        className="button is-small is-info"
      ></button> */}
      {/* <h1>Vendor Information</h1> */}
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title is-size-2">Vendor Information</p>
            <button
              onClick={handleClick}
              className="delete"
              //onClick={Modal.propTypes.closeModal}
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <VendorForm />
            <a className="button">Cancel</a>
          </section>
        </div>
      </div>
      (<ScriptTag isHydrating={true} type="text/javascript" src="./Script.js" />
      );
    </div>
  );
}
