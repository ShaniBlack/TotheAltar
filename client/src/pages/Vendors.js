import React, { useState, useEffect } from "react";
import VendorCard from "../components/VendorCard/VendorCard";
import API from "../utils/API";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "./Vendors.css";
// import Collapsible from "react-collapsible";

export default function Vendors(props) {
  const [vendors, setVendors] = useState([]);
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
      <div className="columns is-multiline is-fullheight">
        <div className="column-gap is-1 position">
          <aside className="menu">
            <ul class="menu-list">
              {categories.map((category) => (
                <a onClick={() => setCategory(category)}>{category}</a>
              ))}
            </ul>
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

      {/* <section className="hero">
        <div className="hero-body has-bg-image is-small"> */}
      {/* <Collapsible trigger="Bakery" onOpening = {() => setCategory("Bakery")}> */}
      {/* <a onClick={() => setCategory("Bakery")}>Bakery</a> */}
      {/* <section className="level"> */}
      {/* </section> */}
      {/* </Collapsible> */}
      {/* </div>
      </section> */}

      {/* <section className="hero">
        <div className="hero-body has-bg-image is-small">
          <Collapsible trigger="Florist" onOpen = {() => setCategory("Florist")}>
            <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-small">
          <Collapsible trigger="Gown/Tux Shop 1" onOpen = {() => setCategory("Gown/Tux1")}>
            <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-small">
        <Collapsible trigger="Gown/Tux Shop 2" onOpen = {() => setCategory("Gown/Tux2")}>
            <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-small" id="Jeweler">
          <Collapsible trigger="Jeweler">
          <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-small">
          <Collapsible trigger="Music" onOpen = {() => setCategory("Music")}>
          <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-small">
          <Collapsible trigger="Officiator" onOpen = {() => setCategory("Officiator")}>
          <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-small">
          <Collapsible trigger="Rentals" onOpen = {() => setCategory("Rentals")}>
          <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-small">
          <Collapsible trigger="Venue" onOpen = {() => setCategory("Venue")}>
            <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>

      <section className="hero"> 
        <div className="hero-body has-bg-image is-small">
          <Collapsible trigger="Miscellaneous" onOpen = {() => setCategory("Miscellaneous")}>
          <section className="level">
                <div className="columns">
                  <h1 className="title"></h1>
                  {filteredVendors.map((vendor) => (
                    <div className="column is-one-quarter">
                      <VendorCard />
                    </div>
                  ))}
                </div>
            </section>
          </Collapsible>
        </div>
      </section>*/}
    </>
  );
}

{
  /* // <Collapsible trigger={vendors.map((category) => (category=category.category))}> */
}
