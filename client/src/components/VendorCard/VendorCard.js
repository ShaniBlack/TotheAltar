import React from "react";
import "./vendorcard.css";
import DeleteBtn from "../DeleteBtn";

export default function VendorCard(props) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          ></img>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              ></img>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.vendor}</p>
            <p class="subtitle is-6">@{props.contact}</p>
          </div>
        </div>

        <div class="media-content">
          <p className="subtitle is-6">{props.phone}</p>
          <p className="subtitle is-6">{props.projected_cost}</p>
          <p className="subtitle is-6">{props.actual_cost}</p>
          <p className="subtitle is-6">{props.notes}</p>
          <a href="../images/contract.pdf">Contract</a>
          <DeleteBtn onClick={() => props.deleteVendor(props._id)} />
        </div>
      </div>
    </div>
  );
}
