import React, { useState } from "react";
// import Modal from "../modal/Modal";
import VendorForm from "../../components/Forms/VendorForm";
import { Link } from "react-router-dom";



export default function VendorCard(props) {
  const [visible, setVisible] = useState(false);
  
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://images.unsplash.com/photo-1525441273400-056e9c7517b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="Placeholder"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://images.unsplash.com/photo-1573059224875-f1404306b3e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNoYW1wYWduZSUyMGdsYXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="Placeholder"
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
          <a href="../" target="_blank">
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
