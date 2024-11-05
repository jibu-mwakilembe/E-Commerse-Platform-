import React from "react";

function ConversationProgress({ item, progress, value }) {
  return (
    <div className="px-3 py-2">
      <div className="flex justify-between mb-1 ">
        <div className=" flex gap-2">
          <span className="text-sm text-gray-500">{item}</span>
          <span className="text-sm text-blue-500">({progress}%)</span>
        </div>
        <span className="text-sm text-black mr-3">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 rounded-full h-2"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ConversationProgress;
