import React, { useState, useEffect } from "react";
import "./vendorcard.css";
import VendorAPI from "../../utils/VendorAPI";
import DeleteBtn from "../DeleteBtn";

//import "react-bulma-components/dist/react-bulma-components.min.css";

function VendorCard(props) {
  const [vendors, setVendors] = useState([])
  //const [formObject, setFormObject] = useState({})

  
  useEffect(() => {
    loadVendors()
  }, [])

  function loadVendors() {
    VendorAPI.getVendors()
      .then(res => 
        setVendors(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteVendor(id) {
    VendorAPI.deleteVendor(id)
      .then(res => loadVendors())
      .catch(err => console.log(err));
  }


  return (
    <div>
      <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></img>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.vendor_name}</p>
            <p className="subtitle is-6">{props.contact_name}</p>
          </div>
        </div>

        <p className="subtitle is-6">{props.phone_number}</p>
        <p className="subtitle is-6">{props.projected_cost}</p>
        <p className="subtitle is-6">{props.actual_cost}</p>
        <div className="content">
          {props.notes}
          <a href="../images/contract.pdf">Contract</a>
          {vendors.map(vendor => (
              <DeleteBtn onClick={() => deleteVendor(vendor._id)}/>
                 
                ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default VendorCard;
