import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./VendorCardModal";
import ScriptTag from "react-script-tag";
import VendorForm from "../Forms/VendorForm";
//var Modal = require("react-bootstrap-modal");

export default function VendorCaroModal(props) {
  const [isModal, setIsModal] = useState(true);
  const active = isModal ? "is-active" : "";
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleClick = () => {
    setIsModal({ isModal: isModal });
  };

  return (
    <div>
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title is-size-2">Vendor Information</p>
            <button
              onClick={handleClick}
              className="delete"
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
