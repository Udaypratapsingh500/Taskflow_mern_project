import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://taskflow-mern-project.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );

      // Save Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 w-full py-3 rounded text-white"
        >
          Login
        </button>

        <p className="text-gray-300 text-center mt-4">
          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-blue-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;