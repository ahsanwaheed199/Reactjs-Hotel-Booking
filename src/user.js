import Auth from "./components/auth";
import React from 'react'
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";

function User() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App1">
      {error && <p className="error1">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? < Dashboard/> : <Auth />} </>}
    </div>
  );
}

export default User;
