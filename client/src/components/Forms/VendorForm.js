import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import VendorCardModal from "../VendorCard/VendorCardModal";

function VendorForm() {
  const history = useHistory();

  const [Vendors, setVendors] = useState({
    Name: "",
    Category: "",
    ContactName: "",
    PhoneNumber: "",
    Email: "",
    Address: "",
    ProjectedCost: "",
    ActualCost: "",
    Contract: "",
    Notes: "",
  });

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
    }).then(() => history.push("/vendors"));
  };
  //MODAL SCRIPT ITEMS--------------------------------
  // const modal = document.querySelector(".modal");
  // const btn = document.querySelector("#btn");
  // const close = document.querySelector(".modal-close");

  // btn.addEventListener("click", function () {
  //   modal.style.display = "block";
  // });

  // close.addEventListener("click", function () {
  //   modal.style.display = "none";
  // });

  // window.addEventListener("click", function (event) {
  //   if (event.target.className === "modal-background") {
  //     modal.style.display = "none";
  //   }
  // });

  return (
    <div>
      <VendorCardModal
      createVendor={onCreateVendor}/>
      {/* <button class="button is-primary" id="btn">
        Create Vendor
      </button>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content"></div>
        <div class="box">
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
          <button class="modal-close is-large" aria-label="close">
            Model
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default VendorForm;
