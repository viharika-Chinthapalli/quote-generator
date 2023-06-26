import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import image from "../assets/img.png";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";

const Navbar = () => {
  const { username } = useAuthStore((state) => state.auth);
  const [{ apiData }] = useFetch(`/user/${username}`);
  return (
    <div>
      <nav className="bg-[#001C30] h-20 ">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-15 w-45" src={ image } alt="Logo" />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="ml-auto relative">
                <div>
                  <Link to="/profile">
                    <button
                      type="button"
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-20 w-20 rounded-full cursor-pointer hover:opacity-75 hover:rounded-full"
                        src={apiData?.profile || avatar}
                        alt="Profile"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
