import React from "react";

function ConversationGrid({ allValue, newValue, regularValue }) {
  return (
    <div className="flex gap-4 w-full ">
      <BoxWrapper>
        <div className="pl-2">
          <div className="">
            <strong className="text-base text-gray-700 font-semibold">
              All
            </strong>
          </div>
          <strong className="text-xl text-gray-700 font-semibold">
            {allValue}
          </strong>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="pl-2">
          <div className=" flex gap-2 items-center justify-center">
            <strong className="text-base text-gray-700 font-semibold">
              New
            </strong>
            <span className="text-blue-500 text-base"> (in 2023)</span>
          </div>
          <strong className="text-xl text-gray-700 font-semibold">
            {newValue}
          </strong>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="pl-2">
          <div className="">
            <strong className="text-base text-gray-700 font-semibold">
              Regular
            </strong>
          </div>
          <strong className="text-xl text-gray-700 font-semibold">
            {regularValue}
          </strong>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default ConversationGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-2 h-18 w-36 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
