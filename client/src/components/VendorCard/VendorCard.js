import React, { useState } from "react";
import Modal from "../modal/Modal";
import VendorForm from "../../components/Forms/VendorForm";
import { Link } from "react-router-dom";

export default function VendorCard(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.vendor}</p>
            <p className="subtitle is-6">Contact: {props.contact}</p>
          </div>
        </div>

        <div className="media-content">
          <p className="subtitle is-6">Phone Number: {props.phone}</p>
          <p className="subtitle is-6">
            Projected Cost: {props.projected_cost}
          </p>
          <p className="subtitle is-6">Acutal Cost: {props.actual_cost}</p>
          <p className="subtitle is-6">Notes: {props.notes}</p>
          <a link="../images/contract.pdf" download>
            View Contract{" "}
          </a>
          <button
            className="button is-small has-background-danger-light"
            id="delete-btn"
            onClick={() => props.deleteCard(props.id)}
          >
            Delete
          </button>
          {/* <div class="content has-text-centered"> */}
            <button className="button is-small has-background-danger-light"
            id="edit-btn">
              {visible ? (
                <VendorForm class="box"></VendorForm>
              ) : (
                <Link onClick={() => setVisible(true)}>Edit Vendor</Link>
              )}
            </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
