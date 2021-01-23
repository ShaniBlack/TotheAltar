import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import API from "../utils/API";
//import DeleteBtn from "../DeleteBtn";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  //const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadVendors();
  }, []);

  function loadVendors() {
    API.getVendors()
      .then((res) => setVendors(res.data))
      .catch((err) => console.log(err));
  }

  function deleteVendor(id) {
    API.deleteVendor(id)
      .then((res) => loadVendors())
      .catch((err) => console.log(err));
  }

  return (
    <Wrapper>
      <Title>Vendors List</Title>
      {vendors.map((vendor) => (
        <VendorCard
          id={vendor.id}
          key={vendor.id}
          vendor={vendor.vendor_name}
          contact={vendor.contact_name}
          phone={vendor.phone_number}
          projected_cost={vendor.projected_cost}
          actual_cost={vendor.actual_cost}
          notes={vendor.notes}
        />
      ))}
    </Wrapper>
  );
}
