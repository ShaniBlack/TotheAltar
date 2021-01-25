import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: {
        Name: "",
        Date: "",
        SpouseOneName: "",
        SpouseTwoName: "",
        Budget: "",
        EstGuest: "",
      },
    };
  }

  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      Event: {
        ...this.state.Event,
        [name]: value,
      },
    });
  };

  //this will be the function that will put the info to the server
  onCreateEvent = (e) => {
    e.preventDefault();
    // console.log({
    //   event_name: e.target.Name.value,
    //   event_date: e.target.Date.value,
    //   bride_groom1: e.target.SpouseOneName.value,
    //   bride_groom2: e.target.SpouseTwoName.value,
    //   budget: e.target.Budget.value,
    //   estimated_guests: e.target.EstGuest.value,
    // });
    API.saveEvent({
      event_name: e.target.Name.value,
      event_date: e.target.Date.value,
      bride_groom1: e.target.SpouseOneName.value,
      bride_groom2: e.target.SpouseTwoName.value,
      budget: e.target.Budget.value,
      estimated_guests: e.target.EstGuest.value,
    }).then();
    // send info 2 server
    // direct them to new page
  };

  render() {
    return (
      <div>
        <h2>New Event</h2>
        <form onSubmit={this.onCreateEvent}>
          <p>
            <label>
              Event Name:
              <input type="text" name="Name"></input>
            </label>
          </p>
          <p>
            <label>
              Event Date:
              <input type="text" name="Date"></input>
            </label>
          </p>
          <p>
            <label>
              Event SpouseOneName:
              <input type="text" name="SpouseOneName"></input>
            </label>
          </p>
          <p>
            <label>
              Event SpouseTwoName:
              <input type="text" name="SpouseTwoName"></input>
            </label>
          </p>
          <p>
            <label>
              Event Budget:
              <input type="text" name="Budget"></input>
            </label>
          </p>
          <p>
            <label>
              Event EstGuest:
              <input type="text" name="EstGuest"></input>
            </label>
          </p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
