import React, { useState } from "react";
import Image from "next/image";

interface NavBarProps {
  authorized: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ authorized }) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <nav className="bg-navbar shadow-md py-3 md:flex text-white font-primary">
      <div className="flex flex-wrap justify-between items-center mx-4 md:mx-10 md:w-full md:p-1">
        <div className="flex items-stretch">
          <Image src="/static/logo.svg" alt="logo" width="24" height="24" />
          <span className="ml-1 font-light ">NFTPool</span>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setMobileMenu(!mobileMenu)}>
          <span className="sr-only">Open menu</span>
          <svg
            className={`w-6 h-6 ${mobileMenu ? "hidden" : "static"}`}
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
          <svg
            className={`w-6 h-6 ${mobileMenu ? "static" : "hidden"}`}
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div
          className={`${
            mobileMenu ? "static" : "hidden"
          } w-full md:block md:w-auto`}>
          <ul className="flex flex-col mt-5 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {authorized ? (
              <>
                <li>
                  <a
                    href="#"
                    className="block py-3 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 md:mr-6"
                    aria-current="page">
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0">
                    Unlink Wallet
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    href="#"
                    className="block py-3 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 md:mr-6"
                    aria-current="page">
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0">
                    Connect Wallet
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
