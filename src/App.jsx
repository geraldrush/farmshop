import React from 'react';

const App = () => {
  return (
    <>
      <div className="text-gray-600 bg-gradient-to-tl from-gray-400 via-orange-300 to-green-300">
        <div className="grid sticky top-0 shadow-md z-10 bg-gradient-to-tl from-white via-orange-300 to-green-300">
          <div className="grid m-5 sticky top-0">
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
          </div>
        </div>

        <main>
          <div className="m-0">
            <img
              className="w-full object-cover h-[50vh] cover"
              src="img/restaurant.jpg"
              alt="Restaurant"
            />
          </div>

          <div className="px-6 py-6">
            <h2 className="font-bold mt-12 pb-2 border-b border-gray-200 text-center text-xl">
              On Promo
            </h2>
            <div className="mt-2 mb-2 flex justify-between overflow-x-auto gap-10">
              <div className="whitespace-wrap bg-white rounded-md overflow-hidden shadow-md p-0 relative sm:flex justify-center min-w-full md:flex justify-start ">
                <div>
                  <img
                    src="img/restaurant.jpg"
                    alt="plums"
                    className="w-max sm:h-48 object-cover"
                  />
                  <div className="sticker">
                    <svg
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
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      ></path>
                    </svg>
                    <span>14% Off</span>
                  </div>
                </div>
                <div className="ml-10 mt-2">
                  <div className="pr-5">
                    <span className="font-bold">Grilled Salmon</span>
                    <span className="block text-gray-500 text-sm mt-1">
                      2200 sells
                    </span>
                    <span className="flex text-gray-500 text-sm mt-1">
                      <svg
                        className="w-5"
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        ></path>
                      </svg>
                      110 likes
                    </span>
                    <span className="block font-bold text-gray-500 text-sm mt-2">
                      Cost: $5
                    </span>
                  </div>
                  <div>
                    <button className="btn bg-green-500 text-white mt-2">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md p-0 relative sm:flex justify-center min-w-full md:flex justify-center w-1/3">
                <div>
                  <img
                    src="img/restaurant.jpg"
                    alt="plums"
                    className="w-max sm:h-48 object-cover"
                  />
                  <div className="sticker">
                    <svg
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
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      ></path>
                    </svg>
                    <span>20% Off</span>
                  </div>
                </div>
                <div className="ml-10 mt-2">
                  <div className="pr-5">
                    <span className="font-bold">Grilled Chicken</span>
                    <span className="block text-gray-500 text-sm mt-1">
                      1800 sells
                    </span>
                    <span className="flex text-gray-500 text-sm mt-1">
                      <svg
                        className="w-5"
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        ></path>
                      </svg>
                      130 likes
                    </span>
                    <span className="block font-bold text-gray-500 text-sm mt-2">
                      Cost: $7
                    </span>
                  </div>
                  <div>
                    <button className="btn bg-green-500 text-white mt-2">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md p-0 relative sm:flex justify-center min-w-full md:flex justify-center w-1/3">
                <div>
                  <img
                    src="img/restaurant.jpg"
                    alt="plums"
                    className="w-max sm:h-48 object-cover"
                  />
                  <div className="sticker">
                    <svg
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
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      ></path>
                    </svg>
                    <span>10% Off</span>
                  </div>
                </div>
                <div className="ml-10 mt-2">
                  <div className="pr-5">
                    <span className="font-bold">Pasta Carbonara</span>
                    <span className="block text-gray-500 text-sm mt-1">
                      1500 sells
                    </span>
                    <span className="flex text-gray-500 text-sm mt-1">
                      <svg
                        className="w-5"
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        ></path>
                      </svg>
                      90 likes
                    </span>
                    <span className="block font-bold text-gray-500 text-sm mt-2">
                      Cost: $6
                    </span>
                  </div>
                  <div>
                    <button className="btn bg-green-500 text-white mt-2">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
