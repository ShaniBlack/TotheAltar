import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./Events.css";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";

import { useAuth0 } from "@auth0/auth0-react";

export default function Events() {
  const { user } = useAuth0();
  const [events, setEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadEvents();
  }, []);

  function loadEvents() {
    API.getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }

  const heroClick = (id) => {
    history.push("/vendors");
  };
  // API.getEvent(id)
  // .then((res) => setEvents(res.data))
  // .catch((err) => console.log(err));

  return (
    <>
      <section className="hero">
        <div className="hero-body is-large">
          <div className="container has-text-centered is-3 is-fullhd is-4-desktop is-12-tablet is-12-mobile has-text-black">
            <h1 class="title" id="user-font">
              Hi {user.name}! Welcome back!
            </h1>
          </div>
        </div>
      </section>

      {events.map((event) => (
        <section className="hero">
          <div className="hero-body has-bg-image is-medium">
            <div className="container has-text-centered is-3 is-fullhd is-4-desktop is-12-tablet is-12-mobile has-text-black">
              <h1 className="title" id="hero-font"></h1>
              <div className="wrapper" onClick={heroClick}>
                <h1
                  className="columns is-centered has-text-weight-bold"
                  id="event-font"
                >
                  {event.event_name}
                </h1>
                <h1
                  className="columns is-centered has-text-weight-bold"
                  id="event-font"
                >
                  <Moment format="dddd, MMMM do, YYYY">
                    {event.event_date}
                  </Moment>
                </h1>
                <h1
                  className="columns is-centered has-text-weight-bold"
                  id="event-font"
                >
                  <Moment format="h:mm a">
                   {event.event_date}
                  </Moment>
                </h1>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
