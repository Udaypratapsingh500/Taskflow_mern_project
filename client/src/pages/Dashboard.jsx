import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://taskflow-mern-project.onrender.com/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");

      setDescription("");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}

      <div className="w-64 bg-gray-800 p-5">
        <h1 className="text-2xl font-bold mb-8">
          TaskFlow
        </h1>

        <ul className="space-y-4">
          <li>Dashboard</li>

          <li>My Tasks</li>

          <li>Completed</li>

          <li>Profile</li>
        </ul>

        <button
          onClick={() => {
            localStorage.removeItem("token");

            window.location.href = "/";
          }}
          className="bg-red-500 px-4 py-2 rounded mt-8"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">
          Welcome Back 🚀
        </h2>

        {/* Add Task */}

        <div className="bg-gray-800 p-5 rounded mb-8">
          <h3 className="text-xl mb-4">Add Task</h3>

          <input
            type="text"
            placeholder="Task Title"
            className="w-full p-3 mb-3 rounded bg-gray-700"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Task Description"
            className="w-full p-3 mb-3 rounded bg-gray-700"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <button
            onClick={addTask}
            className="bg-blue-500 px-5 py-2 rounded"
          >
            Add Task
          </button>
        </div>

        {/* Tasks */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-gray-800 p-5 rounded"
            >
              <h3 className="text-xl font-bold">
                {task.title}
              </h3>

              <p className="mt-2 text-gray-300">
                {task.description}
              </p>

              <button
                onClick={() =>
                  deleteTask(task._id)
                }
                className="bg-red-500 px-4 py-2 rounded mt-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;