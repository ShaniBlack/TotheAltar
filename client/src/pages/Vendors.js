import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import VendorForm from "../components/Forms/VendorForm";
import vendorsCss from "./Vendors.css";

export default function Vendors(props) {
  const [vendors, setVendors] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [category, setCategory] = useState("");
  const categories = [
    "Bakery",
    "Catering",
    "Florist",
    "Jeweler",
    "Music",
    "Officiator",
    "Rentals",
    "Venue",
    "Wedding Attire",
    "Miscellaneous",
  ];
  useEffect(() => {
    loadVendors();
  }, []);

  useEffect(() => {
    setFilteredVendors(
      vendors.filter((vendor) => vendor.category === category)
    );
  }, [category, vendors]);

  function loadVendors() {
    API.getVendors()
      .then((res) => {
        setVendors(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteCard(id) {
    API.deleteVendor(id)
      .then((res) => loadVendors())
      .catch((err) => console.log(err));
  }

  return (
    <>
    <div className="vendors">
      <div className="columns is-multiline is-fullheight mt-6">
        <div className="column-gap is-1 position">
          <aside className="menu pt-6">
            <ul class="menu-list">
              {categories.map((category) => (
                <a onClick={() => setCategory(category)}>{category}</a>
              ))}
            </ul>
            <div className="bg-img">
              {visible ? (
                <VendorForm></VendorForm>
              ) : (
                <Link onClick={() => setVisible(true)}>Create New Event +</Link>
              )}
            </div>
          </aside>
        </div>

        <div className="container">
          <div className="columns is-multiline">
            {filteredVendors.map((vendor) => (
              <div className="column is-5">
                <VendorCard
                  className="box"
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
      </div>
      </div>
    </>
  );
}
