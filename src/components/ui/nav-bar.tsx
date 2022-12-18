import Image from 'next/image';
import Button from '@/components/ui/button';
import { useState } from 'react';

export const NavBar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onHamburgerClick = () => {
    setShowMobileMenu((oldState) => {
      return !oldState;
    });
  };

  return (
    <nav className="absolute w-full rounded border-gray-200 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className=" flex items-center ">
          <Image
            className=""
            src="/images/logo.png"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <div className="ml-4 font-play text-4xl font-bold">ELECTRA-Z</div>
        </div>

        <button
          id="hamburger-button"
          onClick={onHamburgerClick}
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="navbar-mobile-list"
          className={`${showMobileMenu ? 'block' : 'hidden'} w-full md:hidden`}
        >
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50">
            <li>
              <a
                href="#home"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div id="navbar-default" className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0  md:text-sm md:font-medium">
            <li className="flex items-center">
              <a
                href="#home"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#about"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                About
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Services
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                <div className="ml-auto">
                  <Button variant="solid">contact us</Button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
