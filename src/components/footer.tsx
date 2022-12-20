import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer: React.FC = () => {
  return (
    <div className=" mt-[100px] flex w-full flex-col items-center">
      <footer className="relative w-full bg-slate-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="font-play text-3xl text-slate-700">
                Lets keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-slate-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-blue-700 shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
                <button
                  className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-slate-800 shadow-lg outline-none focus:outline-none"
                  type="button"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  {/* <span className="text-slate-500 mb-2 block text-sm font-semibold uppercase">
                    Useful Links
                  </span> */}
                  {/* <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  {/* <span className="text-slate-500 mb-2 block text-sm font-semibold uppercase">
                    Other Resources
                  </span> */}
                  {/* <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 hover:text-slate-800 block pb-2 text-sm font-semibold"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-slate-500">
                Copyright © <span id="get-current-year">2023</span>
                <a
                  href="#"
                  className="text-slate-500 hover:text-gray-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' electra-z'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
