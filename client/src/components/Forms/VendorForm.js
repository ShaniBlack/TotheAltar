import React from "react";
//import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import VendorCardModal from "../VendorCard/VendorCardModal";
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
      <VendorCardModal createVendor={onCreateVendor} />
    </div>
  );
}

export default VendorForm;
