import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
   // Updates the Event with the given id
   updateEvent: function(id) {
    return axios.patch("/api/events/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
   // Updates the User with the given id
   updateUser: function(id) {
    return axios.patch("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }, 
  
  // Gets all vendors
  getVendors: function() {
    return axios.get("/api/vendors");
  },
  // Gets the Vendor with the given id
  getVendor: function(id) {
    return axios.get("/api/vendors/" + id);
  },
  // Updates the Vendor with the given id
  updateVendor: function(id) {
    return axios.patch("/api/vendors/" + id);
  },
  // Deletes the Vendor with the given id
  deleteVendor: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a Vendor to the database
  saveVendor: function(vendorData) {
    return axios.post("/api/vendors", vendorData);
  }
};
