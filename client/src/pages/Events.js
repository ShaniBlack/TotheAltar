import React from "react";
import { Link } from "react-router-dom";

// function makeEvent() {
//   return (
//     <form on Submit={this.handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

export default function Events() {
  return (
    <div className="bg-img">
      {/* <Link onClick={() => makeEvent()}> Creat New Event +</Link> */}
      <figure className="image">
        <img src="https://images.unsplash.com/photo-1513725673171-537abba17912?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlZGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
      </figure>
    </div>
  );
}
