import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Link } from "react-router-dom";
import VendorForm from "../components/Forms/VendorForm";
import VendorCardModal from "../components/VendorCard/VendorCardModal";
import "./Vendors.css";
import { useLocation } from "react-router-dom";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [category, setCategory] = useState("");
  const [editVendor, setEditVendor] = useState([]);

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

  let location = useLocation();

  useEffect(() => {
    //console.log(location.state.id);
    loadVendors();
  }, []);

  useEffect(() => {
    setFilteredVendors(
      vendors.filter(
        (vendor) =>
          vendor.category === category && vendor.event_id === location.state.id
      )
    );
  }, [category, vendors, location.state]);

  function loadVendors() {
    API.getVendors()
      .then((res) => {
        setVendors(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadVendor(id) {
    API.getVendor(id)
      .then((res) => {
        setEditVendor(res.data);
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
              <ul className="menu-list">
                {categories.map((category) => (
                  <a onClick={() => setCategory(category)}>{category}</a>
                ))}
              </ul>
              {/* <VendorForm/> */}
              <div className="bg-img">
                {visible ? (
                  <VendorForm
                  setFilteredVendors={setFilteredVendors} 
                  />
                ) : (
                  <Link
                    class="has-text-weight-bold"
                    onClick={() => setVisible(true)}
                  >
                    Create New Vendor
                  </Link>
                )}
              </div>
            </aside>
          </div>
          <div className="container pt-6">
            <div className="columns is-multiline">
              {filteredVendors.map((vendor) => (
                <div className="column is-5">
                  <VendorCard
                    className="box"
                    deleteCard={deleteCard}
                    editCard={loadVendor}
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
