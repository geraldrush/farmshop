import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="sticky top-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div>
                    <svg
                      className="w-10 mr-20 cursor-pointer tracking-wider"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <input
                      type="search"
                      className="relative hidden md:block p-1 border border-gray-200 rounded-full text-center"
                      placeholder="Enter Your Location..."
                    />
                    <svg
                      className="w-6 absolute left-12 top-1.5 sm:block md:hidden"
                      data-slot="icon"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-evenly items-center md:justify-center">
                  <div>
                    <a href="#">
                      <svg
                        className="w-6 mr-4"
                        data-slot="icon"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="btn">
                      Login/Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </nav>
    </>
  )
}

export default Navbar