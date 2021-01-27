import React, { useState } from "react";
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
      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title is-size-2">Event Information</p>
            <button
              onClick={handleClick}
              className="delete"
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
