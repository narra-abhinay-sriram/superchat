// ItemList.jsx
import React from 'react';

export default function ItemList({title, description, logo}) {
  return (
    <div className="flex flex-col items-center bg-slate-100 shadow-md rounded-lg p-1 w-full max-w-[320px] mx-auto">
      <img 
        src={logo} 
        alt={title} 
        className="w-full h-32 md:h-40 object-cover rounded-lg mb-4" 
      />
      <div className="text-start w-full p-3">
        <p className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </p>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}