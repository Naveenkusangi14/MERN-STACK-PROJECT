import { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
    phonenumber:""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black lg:flex lg:flex-col sm:flex sm:flex-row">
      <h1 className="font-bold text-2xl text-white underline">Contact Us</h1>
      <div className="flex flex-col items-center justify-center mt-10 sm:flex-row sm:justify-around sm:w-full">
        <img
          className="md:w-1/4 "
          src="https://growthdrivendigital.com/wp-content/uploads/2022/05/kkkk.png"
          alt="contact"
        />

        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-1/3 md:w-1/4  bg-gray-800 p-6 rounded-lg mt-6 sm:mt-0"
        >
          <label htmlFor="username" className="flex flex-col text-white">
            Username:
            <input
              name="username"
              className="bg-gray-600 px-3 py-2 rounded-md text-white"
              type="text"
              placeholder="Enter your username"
              required
              value={contact.username} // Assign value from user state
              onChange={handleInput} // Handle input changes
            />
          </label>

          <label htmlFor="email" className="flex flex-col text-white mt-4">
            Email:
            <input
              name="email"
              className="bg-gray-600 px-3 py-2 rounded-md text-white"
              type="email"
              placeholder="Enter your email"
              required
              value={contact.email} // Assign value from user state
              onChange={handleInput} // Handle input changes
            />
          </label>
          <label htmlFor="email" className="flex flex-col text-white mt-4">
            Phone Number:
            <input
              name="phonenumber"
              className="bg-gray-600 px-3 py-2 rounded-md text-white"
              type="phonenumber"
              placeholder="Enter your Mobile Number"
              required
              value={contact.phonenumber} // Assign value from user state
              onChange={handleInput} // Handle input changes
            />
          </label>

          <label htmlFor="message" className="flex flex-col text-white mt-4">
            Message:
            <textarea
              name="message"
              className="bg-gray-600 px-3 py-2 rounded-md text-white h-20"
              placeholder="Enter your message"
              required
              value={contact.message} // Assign value from user state
              onChange={handleInput} // Handle input changes
            ></textarea>
          </label>
          <button className="bg-blue-500 text-white font-semibold  px-10 py-2 rounded-md hover:bg-blue-600 mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
