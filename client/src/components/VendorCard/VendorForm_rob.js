import React, { useEffect, useState } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import API from "../../utils/API";

function VendorForm() {
  const [formObject, setFormObject] = useState({
    vendor_name: "",
    category: "",
    contact_name: "",
    phone_number: "",
    email: "",
    address: "",
    projected_cost: "",
    actual_cost: "",
    contract: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.name &&
      formObject.category &&
      formObject.phoneNumber &&
      formObject.category &&
      formObject.projectedCost
    ) {
      API.saveVendor({
        vendor_name: formObject.name,
        category: formObject.category,
        contact_name: formObject.contactName,
        phone_number: formObject.phoneNumber,
        email: formObject.email,
        address: formObject.address,
        projected_cost: formObject.projectedCost,
        actual_cost: formObject.actualCost,
        contract: formObject.contract,
      }).catch((err) => console.log(err));
    }
  }

  return (
    <form>
      <label>
        Vendor Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <label>
        Cateogry:
        <input type="text" name="category" onChange={handleInputChange} />
      </label>
      <label>
        Contact Name:
        <input type="text" name="contactName" onChange={handleInputChange} />
      </label>
      <label>
        Phone Number:
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" onChange={handleInputChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" onChange={handleInputChange} />
      </label>
      <label>
        Protected Cost:
        <input type="text" name="projectedCost" onChange={handleInputChange} />
      </label>
      <label>
        Actual Cost:
        <input type="text" name="actualCost" onChange={handleInputChange} />
      </label>
      <label>
        Contract:
        <input type="text" name="contract" onChange={handleInputChange} />
      </label>
      <input type="submit" value="Submit" />
      <button
        class="button is-success"
        disabled={
          !(
            formObject.name &&
            formObject.category &&
            formObject.phoneNumber &&
            formObject.category &&
            formObject.projectedCost
          )
        }
      />
    </form>
  );
}
export default VendorForm;
