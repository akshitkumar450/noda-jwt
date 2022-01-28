import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:3000/signup", {
      email,
      password,
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>login</button>
      </form>
    </div>
  );
}

export default Login;
