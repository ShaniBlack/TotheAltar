import React from "react";
import "./Events.css";
// import "./event-form"

import { useAuth0 } from "@auth0/auth0-react";

export default function Events() {
  const { user } = useAuth0();
  return (
    <>
      <section class="hero">
        <div class="hero-body is-large">
          <div className="container has-text-centered is-3 is-fullhd is-4-desktop is-12-tablet is-12-mobile has-text-black">
            <h1 class="title" id="user-font">
              Hi {user.name}! Welcome back!
            </h1>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-body has-bg-image is-medium">
          <div className="container has-text-centered is-3 is-fullhd is-4-desktop is-12-tablet is-12-mobile has-text-black">
            <h1 className="title" id="hero-font">
              {/* {event.event_name} */}
            </h1>
            <h2 className="subtitle" id="hero-font">
              {/* {event.event_date} */}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
