import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import image from "../assets/img.png";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { username } = useAuthStore((state) => state.auth);
  const [{ apiData }] = useFetch(`/user/${username}`);

  return (
    <nav className= "bg-[#001C30] fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className={`${styles.navbar} flex-shrink-0`}>
            <Link to="/">
              <img
                className="h-10 sm:h-12 md:h-14 lg:h-16"
                src={image}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center ml-auto">
            <div className={`${styles.relative} relative`}>
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
                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto rounded-full cursor-pointer hover:opacity-75 hover:rounded-full"
                    src={apiData?.profile || avatar}
                    alt="Profile"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;