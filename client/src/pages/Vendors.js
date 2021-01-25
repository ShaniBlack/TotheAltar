import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import VendorForm from "../components/Forms/VendorForm";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    loadVendors();
  }, []);

  function loadVendors() {
    API.getVendors()
      .then((res) => setVendors(res.data))
      .catch((err) => console.log(err));
  }

  function deleteCard() {
    API.deleteVendor()
      .then((res) => loadVendors())
      .catch((err) => console.log(err));
  }

  return (
    <React.Fragment>
      <div className="bg-img">
        {visible ? (
          <VendorForm></VendorForm>
        ) : (
          <Link onClick={() => setVisible(true)}>Create New Event +</Link>
        )}
      </div>
      <Collapsible trigger="Category">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
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
    </React.Fragment>
  );
}

// <Collapsible trigger={vendors.map((category) => (category=category.category))}>
