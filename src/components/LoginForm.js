import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
      
      onLogin(username);  // pass the username to the onLogin function
    } else {
      alert("Hibás felhasználónév vagy jelszó!");
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Felhasználónév:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Jelszó:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Bejelentkezés</button>
    </form>
  );
}

export default LoginForm;
