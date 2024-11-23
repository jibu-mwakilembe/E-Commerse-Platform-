import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopHeader from "../components/shared/TopHeader";
import Search from "../components/shared/Search";
import { MenuDefault } from "./transactions/MenuDefault";
import ProductCard from "./product/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
import useProductStore from "../store/productStore";
import SearchTextField from "../components/shared/SearchTextField";

const electronic = ["Electronic 1", "Electronic 2", "Electronic 3"];
const last = ["Electronic 1", "Electronic 2", "Electronic 3"];

function Products() {
  const {
    productList,
    filteredProducts,
    searchProduct,
    fetchProduct,
    isLoading,
    error,
  } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const productData = filteredProducts;
  // const productData = productDataList;

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  const totalPages = Math.ceil(productData.length / itemPerPage);

  const currentProduct = productData.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );
  const handlePageChange2 = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    searchProduct(query);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-3 flex  flex-col gap-3">
      <div className="">
        <TopHeader topHead="Products" />
      </div>
      <div className="flex flex-wrap gap-3  ">
        <div className="flex-1 bg-white">
          <SearchTextField
            placeholder="Search for products"
            onChange={handleSearch}
          />
        </div>
        <div className="flex gap-3 sm:flex-col md:flex-col w-full lg:flex-row sm:w-auto md:w-auto ">
          <MenuDefault item_type="Electronic" items={electronic} />
          <MenuDefault item_type="Best Selling" items={last} />
        </div>
      </div>
      <div className="">
        <TopHeader topHead="10 results found" />
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {currentProduct.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange2}
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
  );
}

export default Products;
