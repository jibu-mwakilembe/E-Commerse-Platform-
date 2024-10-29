import React from "react";

function ProgressBar({ progress, item }) {
  return (
    <div className="px-3 py-2">
      <div className="flex justify-between mb-1 ">
        <span className="text-base text-black">{item}</span>
        <span className="text-base text-black">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 rounded-full h-4"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
