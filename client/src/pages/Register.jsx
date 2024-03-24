import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
const URL = "http://localhost:4000/api/v1/auth/register"
export default function Register() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        reset();
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.log("register error", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-black">
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
            Welcome to Hasio!
          </h1>
          {showSuccessMessage && (
            <div className="mb-4 bg-green-200 text-green-800 p-2 rounded-md">
              Account created successfully! You can now login.
            </div>
          )}
          {error && (
            <div className="mb-4 bg-red-200 text-red-800 p-2 rounded-md">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Username
              </label>
              <input
                {...register("username", { required: true })}
                type="text"
                name="username"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">Username is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                {...register("fullName", { required: true })}
                type="text"
                name="fullName"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">Full Name is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                name="email"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">Valid email is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">Password is required</p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <p>If you already have an account,</p>
              <NavLink
                to="/login"
                className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login here
              </NavLink>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
