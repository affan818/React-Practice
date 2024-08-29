import React, { useContext, useState } from "react";
import userContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username, password);
  };

  return (
    <div>
      <h5>Form useContext</h5>
      <input
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        value={password}
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
