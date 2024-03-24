import { NavLink } from "react-router-dom";
import Services from "./Service";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <div>
        <div className="">
          <h2 className="text-center pt-20 block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Crafting Success in a World of Flux for Your Brand
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Our expertise goes beyond the visible horizon,where strategic
            foresight becomes the beacon, guiding brands through the unknown,
            turning challenges into opportunities for robust growth.
          </p>
        </div>
        <div className="text-center lg:mt-10 text-white ">
          <NavLink
            to="/contact"
            className="bg-blue-400 p-2 mx-3 font-bold rounded-md hover:bg-red-500"
          >
            CONTACT US
          </NavLink>
          <NavLink
            to="/about"
            className="bg-blue-400 p-2 mx-3 font-bold rounded-md hover:bg-red-500"
          >
            ABOUT US
          </NavLink>
        </div>
      </div>
      <Services />
      <div className="pt-2 px-6 py-6">
        <section className="bg-gray-900 mt-10  py-1 text-white rounded-lg border border-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-center pt-10 pb-10 block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-lg sm:text-3xl">
              The next big thing could be right around the corner.{" "}
              <NavLink to="/contact" className="text-[#FBC108]">
                Book your free consultation
              </NavLink>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
