import React from "react";
import { IoBagHandle } from "react-icons/io5";
function TransactionGrid() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="pl-2 flex-1  ">
          <span className="text-sm text-gray-500 text-base text-[21px]  ">
            Total Sales
          </span>
          <div className=" items-center mt-2">
            <strong className="text-xl text-gray-700 font-semibold">
              $34525.68
            </strong>
            <p className="text-sm text-[#676767] text-[12px]  ">
              We have sold 123 items
            </p>
          </div>
        </div>
        <div className="rounded-full h-12 w-12 flex items-center justify-center">
          <img src="./src/assets/icon-blue.jpg" alt="icon" />
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="pl-2 flex-1  ">
          <span className="text-sm text-gray-500 text-base text-[21px]  ">
            Todays Revenue
          </span>
          <div className=" items-center mt-2">
            <strong className="text-xl text-gray-700 font-semibold">
              $8.2K
            </strong>
            <p className="text-sm text-[#676767] text-[12px]  ">
              Availabale to payout
            </p>
          </div>
        </div>
        <div className="rounded-full h-12 w-12 flex items-center justify-center">
          <img src="./src/assets/icon-orange.png" alt="icon-orange" />
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="pl-2 flex-1  ">
          <span className="text-sm text-gray-500 text-base text-[21px]  ">
            In Escrow
          </span>
          <div className=" items-center mt-2">
            <strong className="text-xl text-gray-700 font-semibold">
              $8.2K
            </strong>
            <p className="text-sm text-[#676767] text-[12px]  ">
              Availabale to payout
            </p>
          </div>
        </div>
        <div className="rounded-full h-12 w-12 flex items-center justify-center">
          <img src="./src/assets/icon-chungwa.png" alt="icon-chungwa" />
        </div>
      </BoxWrapper>
    </div>
  );
}

export default TransactionGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-2 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
