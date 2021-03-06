import React from "react";

export default function Modal(props) {
  return (
    <div>
      <div class="container">
        <br />

        <p>
          <link
            class="button is-secondary modal-button is-small"
            data-target="#modal"
          >
            Launch image modal
          </link>
        </p>
        <div id="modal" class="modal">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div>
              <form>
                <p>
                  <label>
                    Vendor Name:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.vendor}
                    ></input>
                  </label>
                </p>
                <p>
                  <select name="CategoryOption">
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
                      class="input is-focused"
                      type="text"
                      name={props.contact}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Phone Number:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.phone}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Vendor Email:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.email}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Vendor Address:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.address}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Projected Cost:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.projected_cost}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Actual Cost:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.actual_cost}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Contract:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.contract}
                    ></input>
                  </label>
                </p>
                <p>
                  <label>
                    Notes:
                    <input
                      class="input is-focused"
                      type="text"
                      name={props.notes}
                    ></input>
                  </label>
                </p>
                <button>Submit</button>
              </form>
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    </div>
  );
}
