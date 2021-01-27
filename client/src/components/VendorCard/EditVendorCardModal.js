import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./VendorCardModal";
import ScriptTag from "react-script-tag";

export default function EditVendorCaroModal(props) {
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
            <div className="box">
              <h2>Edit Vendor</h2>
              <form onSubmit={props.onCreateVendor}>
                <p>
                  <label>
                    Vendor Name:
                    {props.vendor}
                  </label>
                </p>
                <p>
                  <label>
                    Category: {props.category}
                  </label>
                </p>
                <p>
                  <label>
                    Contact Name:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name={props.category}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Phone Number:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name="PhoneNumber"
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Vendor Email:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name="Email"
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Vendor Address:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name="Address"
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Projected Cost:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name="ProjectedCost"
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Actual Cost:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name="ActualCost"
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Contract:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name="Contract"
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Notes:
                    <input
                      class="field is-pulled-right"
                      type="text"
                      name="Notes"
                    ></input>
                  </label>
                </p>
                <button>Submit</button>
              </form>
            </div>
            <a className="button">Cancel</a>
          </section>
        </div>
      </div>
      (<ScriptTag isHydrating={true} type="text/javascript" src="./Script.js" />
      );
    </div>
  );
}
