import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventForm from "../components/Forms/EventForm";
import API from "../utils/API";
import "./Events.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Moment from "react-moment";

export default function Events(props) {
  const { user } = useAuth0();
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((event) => event.user_email === user.email)
    );
  }, [user.email, events]);

  function consoleArt() {
    console.log("-oooooooo/-      .+ooooooooo:  +ooo+        oooo/");
    console.log("+MMMMMMMMMMm+   -NMMMMMMMMMMs  +MMMM:      /MMMM/");
    console.log("+MMMNyyydMMMMy  /MMMMyyyyyyy/   mMMMd      mMMMd");
    console.log("+MMMm    :MMMM. /MMMN           /MMMM/    /MMMM:");
    console.log("+MMMm    .MMMM- /MMMN            dMMMm    mMMMh");
    console.log("+MMMm    .MMMM- /MMMMyyyy+       :MMMM/  +MMMM-");
    console.log("+MMMm    .MMMM- /MMMMMMMMy        hMMMm  NMMMy");
    console.log("+MMMm    .MMMM- /MMMMoooo:        -MMMM+oMMMM-");
    console.log("+MMMm    .MMMM- /MMMN              yMMMmNMMMy");
    console.log("+MMMm    +MMMM. /MMMN              .MMMMMMMM.");
    console.log("+MMMMdddNMMMMo  /MMMMddddddd+       sMMMMMMs");
    console.log("+MMMMMMMMMNh:   .mMMMMMMMMMMs        yMMMMs");
    console.log(".///////:-        -/////////-         .::.");
  }

  function loadEvents() {
    API.getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err))
      .then(consoleArt());
  }

  const heroClick = (id) => {
    props.setCurrentEventId(id);
    history.push("/vendors", { id });
  };

  return (
    <>
      <div className="events">
        <section className="hero mt-6">
          <div className="hero-body is-large">
            <div className="container has-text-centered is-3 is-fullhd is-4-desktop is-12-tablet is-12-mobile has-text-black">
              <h1 class="title" id="user-font">
                Hi {user.name}! Welcome back!
              </h1>
            </div>
          </div>
        </section>

        {filteredEvents.map((event) => (
          <section className="hero">
            <div className="hero-body has-bg-image is-medium">
              <div className="container has-text-centered is-3 is-fullhd is-4-desktop is-12-tablet is-12-mobile has-text-black">
                <div className="wrapper" onClick={() => heroClick(event.id)}>
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
                    <Moment format="h:mm a">{event.event_date}</Moment>
                  </h1>
                </div>
              </div>
            </div>
          </section>
        ))}
        <div className="create-event">
          {visible ? (
            <EventForm></EventForm>
          ) : (
            <Link onClick={() => setVisible(true)}>Create New Event +</Link>
          )}
        </div>
      </div>
    </>
  );
}
