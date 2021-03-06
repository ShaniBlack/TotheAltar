import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function EventForm() {
  const history = useHistory();
  const { user } = useAuth0();

  const onCreateEvent = (e) => {
    e.preventDefault();
    API.saveEvent({
      event_name: e.target.Name.value,
      event_date: e.target.Date.value,
      bride_groom1: e.target.SpouseOneName.value,
      bride_groom2: e.target.SpouseTwoName.value,
      budget: e.target.Budget.value,
      estimated_guests: e.target.EstGuest.value,
      user_email: user.email,
    }).then(() => history.push("/vendors"));
  };

  return (
    <div>
      <h2>New Event</h2>
      <form onSubmit={onCreateEvent}>
        <p>
          <label>
            Event Name:
            <input
              className="field is-pulled-right is-9"
              type="text"
              name="Name"
            ></input>
          </label>
        </p>
        <p>
          <label>
            Event Date:
            <input
              className="field is-pulled-right"
              type="text"
              name="Date"
            ></input>
          </label>
        </p>
        <p>
          <label>
            Event SpouseOneName:
            <input
              className="field is-pulled-right"
              type="text"
              name="SpouseOneName"
            ></input>
          </label>
        </p>
        <p>
          <label>
            Event SpouseTwoName:
            <input
              className="field is-pulled-right"
              type="text"
              name="SpouseTwoName"
            ></input>
          </label>
        </p>
        <p>
          <label>
            Event Budget:
            <input
              className="field is-pulled-right"
              type="text"
              name="Budget"
            ></input>
          </label>
        </p>
        <p>
          <label>
            Event EstGuest:
            <input
              className="field is-pulled-right"
              type="text"
              name="EstGuest"
            ></input>
          </label>
        </p>
        <button className="button is-rounded is-medium">Submit</button>
      </form>
    </div>
  );
}

export default EventForm;
