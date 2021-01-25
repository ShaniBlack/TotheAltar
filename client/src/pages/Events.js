import React, { Component, useState } from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import EventForm from "../components/Forms/EventForm";

export default function Events() {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <div className="bg-img">
        {visible ? (
          <EventForm></EventForm>
        ) : (
          <Link onClick={() => setVisible(true)}>Create New Event +</Link>
        )}
        <figure className="image">
          <img src="https://images.unsplash.com/photo-1513725673171-537abba17912?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlZGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        </figure>
      </div>
    </React.Fragment>
  );
}
