import React from "react";
import ProgressBar from "./ProgressBar";
import HeaderTitle from "../../components/shared/HeaderTitle";

function TransactionProgress() {
  return (
    <div className="flex  w-[20rem] flex-col gap-3">
      <HeaderTitle title="Most Sold Items" />
      <div className="w-full h-[23rem] bg-white border rounded-md">
        <div className="">
          <ProgressBar progress="70" item="Jeans" />
          <ProgressBar progress="40" item="Shirts" />
          <ProgressBar progress="60" item="Belts" />
          <ProgressBar progress="80" item="Caps" />
          <ProgressBar progress="20" item="Others" />
        </div>
      </div>
    </div>
  );
}

export default TransactionProgress;
