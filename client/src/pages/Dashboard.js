import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// this was made to test the Auth0 API return information.
