import React from "react";
// import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useLocation } from "react-router-dom";

function VendorForm() {
  // const history = useHistory();

  let location = useLocation();

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
      event_id: location.state.id,
    });
    // .then(() => history.push("/vendors"));
  };

  return (
    <div>
      <h2>New Vendor</h2>
      <form onSubmit={onCreateVendor}>
        <p>
          <label>
            Vendor Name:
            <input type="text" name="Name"></input>
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
            <input type="text" name="ContactName"></input>
          </label>
        </p>
        <p>
          <label>
            Phone Number:
            <input type="text" name="PhoneNumber"></input>
          </label>
        </p>
        <p>
          <label>
            Vendor Email:
            <input type="text" name="Email"></input>
          </label>
        </p>
        <p>
          <label>
            Vendor Address:
            <input type="text" name="Address"></input>
          </label>
        </p>
        <p>
          <label>
            Projected Cost:
            <input type="text" name="ProjectedCost"></input>
          </label>
        </p>
        <p>
          <label>
            Actual Cost:
            <input type="text" name="ActualCost"></input>
          </label>
        </p>
        <p>
          <label>
            Contract:
            <input type="text" name="Contract"></input>
          </label>
        </p>
        <p>
          <label>
            Notes:
            <input type="text" name="Notes"></input>
          </label>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default VendorForm;
