import React, { useState } from "react";
import userContext from "./userContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ setUser, user }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
