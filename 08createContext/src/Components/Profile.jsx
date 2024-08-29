import React, { useContext } from "react";
import userContext from "../Context/userContext";

function Profile() {
  const { user } = useContext(userContext);
  if (!user) return <p>Please Login</p>;
  return <>Wellcome: {user} </>;
}

export default Profile;
