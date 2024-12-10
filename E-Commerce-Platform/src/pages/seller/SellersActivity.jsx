import React from "react";
import HeaderTitle from "../../components/shared/HeaderTitle";
import SellerActivityChart from "./SellerActivityChart";
import TopHeader from "../../components/shared/TopHeader";
import ProgressBar from "../transactions/ProgressBar";
import SellerProfitProgressBar from "./SellerProfitProgressBar";
function SellersActivity({}) {
  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="">
        <HeaderTitle title="Revenue" />
      </div>
      <div className="flex flex-wrap  lg:flex-row md:flex-col sm:flex-col w-full gap-4 mt-3 ">
        <div className="flex flex-1 flex-col gap-3  ">
          <SellerActivityChart />
        </div>
        <div className="flex flex-wrap flex-col gap-3  lg:w-[20rem] md:w-full  gap-3 ">
          <div className="bg-white border rounded-md w-3/4 px-2 py-1">
            <TopHeader topHead="Total profit" />
            <strong className="text-blue-500 text-xl font-semibold ">
              TZS 600,560.43
            </strong>
          </div>
          <HeaderTitle title="Profit by category" />
          <div className="bg-white border rounded-md">
            <SellerProfitProgressBar
              item="Electronic"
              progress="40"
              profit="TZS 45,300.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellersActivity;
