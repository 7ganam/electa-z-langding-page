import Image from 'next/image';
import Button from '@/components/ui/button';
import { useState, useEffect } from 'react';

export const NavBar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onHamburgerClick = () => {
    console.log('first');
    setShowMobileMenu((oldState) => {
      return !oldState;
    });
  };

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      console.log('hash', window.location.hash);
    } else {
      setMounted(true);
    }
  }, [isMounted]);

  return (
    <nav className="absolute z-30 w-full rounded border-gray-200 px-2 py-2.5 sm:px-4">
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
          className="z-40 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
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
          id="navbar-mobile-list "
          className={`${
            showMobileMenu ? 'block' : 'hidden'
          } z-40 w-full bg-white drop-shadow-lg md:hidden`}
        >
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50">
            <li onClick={onHamburgerClick}>
              <a
                href="#how"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100"
                aria-current="page"
              >
                How it works
              </a>
            </li>
            <li onClick={onHamburgerClick}>
              <a
                href="#services"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100"
              >
                Services
              </a>
            </li>
            <li onClick={onHamburgerClick}>
              <a
                href="#why"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100"
              >
                Why upgrade
              </a>
            </li>
            <li onClick={onHamburgerClick}>
              <a
                href="#contact"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div id="navbar-default" className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0  md:text-sm md:font-medium">
            <li className="flex items-center">
              <a
                href="#how"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                aria-current="page"
              >
                How it works
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#services"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Services
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#why"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                Why upgrade
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              >
                <div className="ml-auto">
                  <Button variant="solid">Contact us</Button>
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
