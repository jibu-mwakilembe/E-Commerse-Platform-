import React from "react";
import { Link } from "react-router-dom";
import TransactionGrid from "./transactions/TransactionGrid";
import TransactionChart from "./transactions/TransactionChart";
import TransactionProgress from "./transactions/TransactionProgress";
import TransactionTable from "./transactions/TransactionTable";
import TopHeader from "../components/shared/TopHeader";

function Transactions() {
  return (
    <div className="px-3 py-12 flex  flex-col gap-3  ">
      <div className="">
        <TopHeader topHead="Transactions Overview" />
      </div>
      <div className="">
        <TransactionGrid />
      </div>

      <div className="flex flex-wrap  lg:flex-row md:flex-col sm:flex-col w-full gap-4 mt-3">
        <TransactionChart />
        <TransactionProgress />
      </div>

      <TransactionTable />
    </div>
  );
}

export default Transactions;
