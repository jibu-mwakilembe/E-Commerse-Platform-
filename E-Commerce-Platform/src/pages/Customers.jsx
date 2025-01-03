import React, { useEffect, useState } from "react";
import TopHeader from "../components/shared/TopHeader";
import Search from "../components/shared/Search";
import CustomerCard from "./customer/CustomerCard";
import { Pagination } from "@mui/material";
import useCustomerStore from "../store/customerStore";
import SearchTextField from "../components/shared/SearchTextField";

function Customers() {
  // const customerData = customerDataList;

  const {
    customerList,
    filterCustomers,
    isLoading,
    error,
    fetchCustomers,
    setSearchQuery,
  } = useCustomerStore();

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const customerData = filterCustomers || [];
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

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <p className="px-3 py-12">Loading...</p>;
  }

  if (error) {
    return <p className="px-3 py-12">{error}</p>;
  }
  return (
    <div className="px-3 py-12 flex  flex-col gap-3">
      <div className="">
        <TopHeader topHead="Customer" />
      </div>
      <div className="">
        <SearchTextField
          placeholder="Search for customers"
          onChange={handleSearch}
        />
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {currentCustomer.map((customerItem) => (
            <CustomerCard key={customerItem.id} customer={customerItem} />
          ))}
        </div>
        <div className=""></div>
        <div className="">
          <div className="flex justify-center space-x-2 mt-4">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
              sx={{
                ul: {
                  display: "flex",
                  gap: "8px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
