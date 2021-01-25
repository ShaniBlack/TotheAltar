import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "./Vendors.css"
import Collapsible from "react-collapsible";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);

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
    <>
      <Collapsible trigger="Bakery">
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

      <Collapsible trigger="Catering">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Florist">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Gown/Tux Shop 1">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Gown/Tux Shop 2">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Jeweler">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Music">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Officiator">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Rentals">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

      <Collapsible trigger="Venue">
        <section class="level">
          <div class="hero-body">
            <div class="columns">
              <h1 class="title"></h1>
              {vendors.map((vendor) => (
                <div class="column is-one-quarter">
                  <VendorCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Collapsible>

    </>
  );
}

// <Collapsible trigger={vendors.map((category) => (category=category.category))}>
