import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center bg-gray-900">
        <div className="flex flex-col items-center">
          <h1 className="text-[120px] font-extrabold text-red-300">404</h1>
          <p className="text-2xl font-medium text-gray-200 mb-6">
            Page Not Found
          </p>
          <NavLink
            to="/"
            className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
          >
            Go Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
