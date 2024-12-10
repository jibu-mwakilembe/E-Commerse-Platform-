import React from "react";

function SellerProfitProgressBar({ item, progress, profit }) {
  return (
    <div>
      <div className="px-3 py-2">
        <div className="flex justify-between gap-3 mb-1 ">
          <div className="flex gap-3">
            <span className="text-base text-black">{item}</span>
            <span className="text-base text-blue-500">({progress}%)</span>
          </div>
          <div className="">
            <h2>{profit}</h2>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 rounded-full h-2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SellerProfitProgressBar;
