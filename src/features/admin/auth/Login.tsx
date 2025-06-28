import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../../context/adminContext";

export default function AdminLogin() {
  const { loginAdmin, addAdmin } = useAdmin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const admins = [
    { username: "admin1", password: "pass1" },
    { username: "admin2", password: "pass2" },
    { username: "admin3", password: "pass3" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    const matchedAdmin = admins.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (matchedAdmin) {
      setError("");
      localStorage.setItem("isAdmin", "true"); // Save login status
      navigate("/admin");

      loginAdmin(username);
      addAdmin(username);
      navigate("/admin");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 border rounded shadow p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
