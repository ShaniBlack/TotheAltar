import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "./Vendors.css";
import VendorForm from "../components/Forms/VendorForm";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";


export default function Vendors(props) {
  const [vendors, setVendors] = useState([]);
  const { user } = useAuth0();
  const [editVendor, setEditVendor] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [category, setCategory] = useState("");
  const [visible, setVisible] = useState(false);
  const history = useHistory();

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
    <div className="vendor-container">
      <div className="columns is-multiline is-fullheight">
        <div className="column-gap is-1 position">
          <aside className="menu">
            <link className="menu-list">
              {categories.map((category) => (
                <a onClick={() => setCategory(category)}>{category}</a>
              ))}
            </link>
                <div class="content has-text-centered">
                  <div>
                    {visible ? (
                      <VendorForm></VendorForm>
                    ) : (
                      <Link onClick={() => setVisible(true)}>
                        Create New Vendor +
                      </Link>
                    )}
                  </div>
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
  );
}
