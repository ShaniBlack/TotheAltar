import React from "react";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

function VendorForm(props) {
  const history = useHistory();
  const onCreateVendor = (e) => {
    e.preventDefault();
    API.saveVendor({
      vendor_name: e.target.Name.value,
      category: e.target.CategoryOption.value,
      phone_number: e.target.PhoneNumber.value,
      email: e.target.Email.value,
      address: e.target.Address.value,
      projected_cost: e.target.ProjectedCost.value,
      actual_cost: e.target.ActualCost.value,
      contract: e.target.Contract.value,
      notes: e.target.Notes.value,
      event_id: props.currentEventId,
    })
      .then(props.loadVendors)
      .then(() => history.push("/"));
  };

  return (
    <div className="box">
      <h2>New Vendor</h2>
      <form onSubmit={onCreateVendor}>
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
          <label>
            Category:
            <select class="field is-pulled-right" name="CategoryOption">
              <option>Bakery</option>
              <option>Catering</option>
              <option>Florist</option>
              <option>Jeweler</option>
              <option>Music</option>
              <option>Officiator</option>
              <option>Rentals</option>
              <option>Venue</option>
              <option>Wedding Attire</option>
              <option>Miscellaneous</option>
            </select>
          </label>
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
    </div>
  );
}

export default VendorForm;
