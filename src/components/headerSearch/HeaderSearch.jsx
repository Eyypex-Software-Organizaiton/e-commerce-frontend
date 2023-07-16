import React from "react";

const HeaderSearch = () => {
  return (
    <div className="">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block w-full  p-4 pl-10 text-sm text-gray-900 border-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="E-posta adresinizi yazın"
            required=""
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="m-4">
        <img src="./assets/s5.png" alt="" />
      </div>
    </div>
  );
};

export default HeaderSearch;
