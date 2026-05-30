import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://taskflow-mern-project.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(response.data);

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-green-500 hover:bg-green-600 w-full py-3 rounded text-white"
        >
          Register
        </button>

        <p className="text-gray-300 text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-400"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;