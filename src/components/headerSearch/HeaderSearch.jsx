import React from "react";

const HeaderSearch = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24"> {/* Sol ve sağ kenar boşlukları responsive */}
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="w-full max-w-md mx-auto mb-4 md:mb-8 lg:mb-16"> {/* Form genişliği responsive */}
          <input
            type="email"
            id="email"
            className="w-full h-14 px-4 text-gray-900 text-sm rounded-2xl border-2 border-green-dark focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your E-mail"
            required=""
          />
          <button
            type="button"
            className="block mt-2 mx-auto bg-green-dark text-white font-bold focus:ring-4 focus:ring-blue-300 rounded-lg text-sm h-10 w-24"
          >
            Subscribe
          </button>
        </div>
      </form>
      <div className="m-4">
        <img
          src="./assets/s5.png"
          alt=""
          className="block mx-auto max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeaderSearch;
