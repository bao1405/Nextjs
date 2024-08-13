import React from 'react';
const InputLabel = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Input Label</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="w-72 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Input Label"
        />
      </div>
      <div className="flex items-center mb-4 ">
        <label className="mr-4">Label</label>
        <input type="checkbox" className="form-checkbox" style={{marginLeft:"215px"}}  checked/>
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-4">Label</label>
        <input type="checkbox" className="form-checkbox" style={{marginLeft:"215px"}}  />
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-4">Label</label>
        <input type="checkbox" className="form-checkbox" style={{marginLeft:"215px"}} />
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-4">Label</label>
        <input type="checkbox" className="form-checkbox" style={{marginLeft:"215px"}}  checked />
      </div>
      <div className="flex">
        <button className="bg-white text-black border border-blue-300 font-bold py-1 min-w-36 px-4 rounded-md mr-2">
          Clear
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 w-36 px-4 rounded-md">
          Apply
        </button>
      </div>
    </div>
  );
};

export default InputLabel;
