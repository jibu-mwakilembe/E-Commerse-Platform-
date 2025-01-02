import React, { useEffect, useState } from "react";
import TopHeader from "../components/shared/TopHeader";
import SearchTextField from "../components/shared/SearchTextField";
import useSellerStore from "../store/SellerStore";
import Pagination from "@mui/material/Pagination";
import SellersCard from "./seller/SellersCard";

function Sellers() {
  const {
    sellerList,
    filtedSellers,
    searchSeller,
    fetchSellers,
    error,
    isLoading,
  } = useSellerStore();

  useEffect(() => {
    fetchSellers();
  }, [fetchSellers]);

  const sellersData = filtedSellers;

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const totalPages = Math.ceil(sellersData.length / itemPerPage);

  const currentSellers = sellersData.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const handleSearch = (e) => {
    const query = e.target.value;
    setCurrentPage(1);
    searchSeller(query);
  };

  if (isLoading) {
    return <p className="px-3 py-12">loading...</p>;
  }

  if (error) {
    return <p className="px-3 py-12">{error}</p>;
  }

  return (
    <div className="px-3 py-12  flex-col gap-3">
      <div className="">
        <TopHeader topHead="Sellers" />
      </div>
      <div className="bg-white">
        <SearchTextField
          placeholder="Search for sellers"
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentSellers.map((item) => (
          <SellersCard seller={item} key={item.id} />
        ))}
      </div>
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
  );
}

export default Sellers;
