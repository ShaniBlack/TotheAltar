import React, { Component } from "react";
import { ReactDOM } from "react-dom";

class VendorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Vendor: {
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
      },
    };
  }

  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      Vendor: {
        ...this.state.Vendor,
        [name]: value,
      },
    });
  };

  //this will be the function that will put the info to the server
  onCreateVendor = (e) => {
    e.preventDefault();
    console.log(this.state.Vendor);
    console.log(e.target);
  };

  render() {
    return (
      <div>
        <h2>New Vendor</h2>
        <form onSubmit={this.onCreateVendor}>
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
              <option>Gown/Tux Shop 1</option>
              <option>Gown/Tux Shop 2</option>
              <option>Jeweler</option>
              <option>Officiator</option>
              <option>Rentals</option>
              <option>Venue</option>
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
}

export default VendorForm;
