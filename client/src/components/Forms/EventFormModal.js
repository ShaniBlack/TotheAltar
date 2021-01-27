import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "../VendorCard/VendorCardModal";
import ScriptTag from "react-script-tag";
import EventForm from "./EventForm";

export default function VendorCaroModal(props) {
  const [isModal, setIsModal] = useState(true);
  const active = isModal ? "is-active" : "";

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
            <p className="modal-card-title is-size-2">Event Information</p>
            <button
              onClick={handleClick}
              className="delete"
              //onClick={Modal.propTypes.closeModal}
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <EventForm />
            <a className="button is-rounded is-medium">Cancel</a>
          </section>
        </div>
      </div>
      (<ScriptTag isHydrating={true} type="text/javascript" src="./Script.js" />
      );
    </div>
  );
}
