import axios from "axios";
import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3000/signup", {
        email,
        password,
      });
    } catch (err) {
      alert(err.response.data.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={signup}>
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
        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
