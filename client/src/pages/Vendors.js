import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Link } from "react-router-dom";
import VendorForm from "../components/Forms/VendorForm";
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
    console.log(location.state.id)
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
      <section className="hero mt-6">
          <div className="hero-body is-large">
            <div className="container welcome-banner has-text-centered is-3 is-fullhd is-4-desktop is-12-tablet is-12-mobile">
              <h1 class="title" id="user-font">
                View all your event's vendors here 
              </h1>
            </div>
          </div>
        </section>
        <div className="columns is-multiline is-fullheight is-mobile mt-6">
          <div className="column-gap is-1 position is-5 is-hidden-touch">
            <aside className="menu pt-6">
              <ul className="menu-list">
                {categories.map((category) => (
                  <a onClick={() => setCategory(category)}>{category}</a>
                ))}
              </ul>
              <div className="bg-img">
                {visible ? (
                  <VendorForm></VendorForm>
                ) : (
                  <Link onClick={() => setVisible(true)}>
                    Create New Vendor
                  </Link>
                )}
              </div>
            </aside>
          </div>
          <div className="container pt-6 pl-6 pr-6">
            <div className="columns is-multiline">
              {filteredVendors.map((vendor) => (
                <div className="column vendor-resp is-5 is-fullhd is-5-desktop is-12-tablet is-12-mobile is-offset-1 p-2">
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