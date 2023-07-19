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
        <div className="w-[400px] mx-auto mb-16 ">
        <input
          type="email"
          id="email"
          className="bg-green-light absolute h-14 text-gray-900 text-sm rounded-2xl border-2 border-green-dark focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your E-mail"
          required=""
        />
        <button
          type="button"
          className="text-white relative left-96 top-2  bg-green-dark font-bold focus:ring-4 focus:ring-blue-300  rounded-lg text-sm h-10 w-24  "
        >
          Subscribe
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
