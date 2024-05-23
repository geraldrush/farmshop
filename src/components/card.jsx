import React from 'react'

const card = () => {
  return (
    <>
    
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
        </div>
    
    </>
  )
}

export default card