import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Collapsible from "react-collapsible";
import VendorForm from "../components/VendorCard/VendorForm";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const manageForm = () => setShowForm(!showForm);

  useEffect(() => {
    loadVendors();
  }, []);

  function loadVendors() {
    API.getVendors()
      .then((res) => setVendors(res.data))
      .catch((err) => console.log(err));
  }

  function deleteCard(id) {
    API.deleteVendor(id)
      .then((res) => loadVendors())
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <button class="button is-success" onClick={manageForm}>
        Add New Vendor
      </button>

      {showForm ? (
        <div class="modal">
          <div class="modal-background">
            <div class="modal-card">
              <VendorForm />
            </div>
          </div>
        </div>
      ) : null}
      <Collapsible trigger="Category">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column">
                  <VendorCard
                    deleteCard={deleteCard}
                    id={vendor.id}
                    key={vendor.id}
                    vendor={vendor.vendor_name}
                    contact={vendor.contact_name}
                    phone={vendor.phone_number}
                    projected_cost={vendor.projected_cost}
                    actual_cost={vendor.actual_cost}
                    notes={vendor.notes}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>
    </div>
  );
}

// <Collapsible trigger={vendors.map((category) => (category=category.category))}>
