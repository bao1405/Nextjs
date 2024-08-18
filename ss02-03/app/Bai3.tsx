import React from 'react';

const FormSignup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-md rounded-lg shadow-lg px-6 py-8 bg-white">
        <h1 className="text-2xl font-bold text-center mb-4">Form Sign Up</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone number
            </label>
            <div className="flex items-center">
              <select
                id="country"
                className="w-24 border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="us">US</option>
              </select>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                placeholder="+84 (123) 456-789"
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              id="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              placeholder="Tell us a little about the project..."
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Skills
            </label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="html"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                />
                <label htmlFor="html" className="text-gray-700 text-sm">
                  HTML
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="javascript"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                />
                <label htmlFor="javascript" className="text-gray-700 text-sm">
                  JavaScript
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="uxdesign"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                />
                <label htmlFor="uxdesign" className="text-gray-700 text-sm">
                  UX design
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="reactjs"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                />
                <label htmlFor="reactjs" className="text-gray-700 text-sm">
                  ReactJS
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="css"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                />
                <label htmlFor="css" className="text-gray-700 text-sm">
                  CSS
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="java"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded"
                />
                <label htmlFor="java" className="text-gray-700 text-sm">
                  Java
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSignup;  