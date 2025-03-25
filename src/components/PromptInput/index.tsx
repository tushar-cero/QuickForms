import React, { memo } from "react";

export const PromptInput = memo(() => {
  return (
    <div className="flex-center px-8 py-6 rounded-tl-lg rounded-bl-none rounded-tr-lg rounded-br-none max-w-2xl mx-auto bg-white">
      <form className="w-full">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Type here"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
});
