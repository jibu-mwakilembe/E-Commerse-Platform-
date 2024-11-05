import React from "react";
import HeaderTitle from "../../components/shared/HeaderTitle";
import Search from "../../components/shared/Search";
import DropdownMenu from "./DropdownMenu";
import { MenuDefault } from "./MenuDefault";
import Table from "./Table";

const electronic = ["Electronic 1", "Electronic 2", "Electronic 3"];
const last = ["Electronic 1", "Electronic 2", "Electronic 3"];

function TransactionTable() {
  return (
    <div className="flex   w-full   flex-col gap-3 mb-3">
      <HeaderTitle title="Transactions" />
      <div className="w-full  bg-white rounded-md  border border-gray-200  items-center p-4 ">
        <div className="flex gap-3 ">
          <div className="flex-1 bg-white">
            <Search
              placeholder="Search for transactions"
              searchclass="flex border rounder-md p-2 "
              inputclass=""
            />
          </div>
          <div className="flex gap-3">
            <MenuDefault item_type="Electronic" items={electronic} />
            <MenuDefault item_type="Last 30 days" items={last} />
          </div>
        </div>
        <div className="mt-5">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;
