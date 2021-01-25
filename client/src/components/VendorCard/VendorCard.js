import React from "react";
// import Vendors from "./pages/Vendors.js"

export default function VendorCard(props) {
  
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.vendor}</p>
            <p class="subtitle is-6">Contact: {props.contact}</p>
          </div>
        </div>

        <div class="media-content">
          <p className="subtitle is-6">Phone Number: {props.phone}</p>
          <p className="subtitle is-6">Projected Cost: {props.projected_cost}</p>
          <p className="subtitle is-6">Acutal Cost: {props.actual_cost}</p>
          <p className="subtitle is-6">Notes: {props.notes}</p>
          <a href="../" target="_blank">View Contract  </a>
          <button class="button is-small is-danger" onClick={() => props.deleteCard(props.key)}>Delete</button>
          <button class="button is-small is-info">Update</button>
        </div>
      </div>
    </div>
  );
}
