import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "./style.css";

export default function VendorCaroModal(prop) {
  const [isModal, setIsModal] = useState(false);
  const active = isModal ? "is-active" : "";
  

  const handleClick = () => {
    setIsModal({ isModal: isModal });
  };

  return (
    <div className="App">
      <h1>Would you like to Create a Vendor?</h1>

      <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create Vendor</p>
            <button
              onClick={handleClick}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <form onSubmit={prop.createVendor}>
              <p>
                <label>
                  Vendor Name:
                  <input
                    class="field is-pulled-right"
                    type="text"
                    name="Name"
                  ></input>
                </label>
              </p>
              <p>
                <select class="field is-pulled-right" name="CategoryOption">
                  Category:
                  <option>Bakery</option>
                  <option>Catering</option>
                  <option>Florist</option>
                  <option>Jeweler</option>
                  <option>Music</option>
                  <option>Officiator</option>
                  <option>Rentals</option>
                  <option>Venue</option>
                  <option>Wedding Attire</option>
                  <option>Misc.</option>
                </select>
              </p>
              <p>
                <label>
                  Contact Name:
                  <input
                    class="field is-pulled-right"
                    type="text"
                    name="ContactName"
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
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button onClick={handleClick} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>

      <button onClick={handleClick} className="button is-small is-info">
        Show Modal
      </button>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
