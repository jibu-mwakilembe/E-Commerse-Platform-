import React from "react";
import { Link } from "react-router-dom";
import TransactionGrid from "./transactions/TransactionGrid";
import TransactionChart from "./transactions/TransactionChart";
import TransactionProgress from "./transactions/TransactionProgress";
import TransactionTable from "./transactions/TransactionTable";
import TopHeader from "../components/shared/TopHeader";

function Transactions() {
  return (
    <div className="p-3 flex  flex-col gap-3  ">
      <div className="">
        <TopHeader topHead="Transactions Overview" />
      </div>

      <TransactionGrid />
      <div className="flex flex-row w-full gap-4 mt-3">
        <TransactionChart />
        <TransactionProgress />
      </div>

      <TransactionTable />
    </div>
  );
}

export default Transactions;
