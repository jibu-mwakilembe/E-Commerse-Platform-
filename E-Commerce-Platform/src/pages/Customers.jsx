import React, { useEffect, useState } from "react";
import TopHeader from "../components/shared/TopHeader";
import Search from "../components/shared/Search";
import CustomerCard from "./customer/CustomerCard";
import { Pagination } from "@mui/material";
import useCustomerStore from "../store/customerStore";

function Customers() {
  // const customerData = customerDataList;

  const { customerList, getCustomers } = useCustomerStore();
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const customerData = customerList;
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const totalPages = Math.ceil(customerData.length / itemPerPage);
  const currentCustomer = customerData.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <div className="p-3 flex  flex-col gap-3">
      <div className="">
        <TopHeader topHead="Customer" />
      </div>
      <div className="">
        <Search
          placeholder="Search for customers"
          inputclass="flex  bg-white"
          searchclass="flex bg-white border border-gray-200 "
        />
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {currentCustomer.map((customerItem) => (
            <CustomerCard key={customerItem.Id} customer={customerItem} />
          ))}
        </div>
        <div className="">
          <div className="flex justify-center space-x-2 mt-4">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
              className={{
                ul: "space-x-2",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
