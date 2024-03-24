import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center  bg-gray-900   ">
      <div className="flex justify-center flex-wrap gap-6 p-4 text-gray-500 font-medium">
        <NavLink to="/" className="hover:text-red-400 text-white">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-red-400 text-[#FBC108]">
          About
        </NavLink>
        <NavLink to="/service" className="hover:text-red-400 text-[#FBC108]">
          Services
        </NavLink>

        <NavLink to="/contact" className="hover:text-red-400 text-[#FBC108]">
          Contact
        </NavLink>
      </div>

      <div className="flex justify-center space-x-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://messenger.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
            alt="Messenger"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/30/000000/twitter.png"
            alt="Twitter"
          />
        </a>
      </div>

      <p className="text-center text-[#FBC108] font-medium">
        &copy; 2023 Company Ltd. All rights reserved.
      </p>
    </footer>
  );
}
