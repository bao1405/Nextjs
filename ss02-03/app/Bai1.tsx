import React from 'react';

export default function Bai1() {
  return (
    <div>
      <p className='text-black'>Label</p>
        <input 
          type="text" 
          placeholder='Placeholder' 
          className='p-2 w-60 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md'
          style={{padding:"5px"}}
        />
    </div>
  );
}
