import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopHeader from "../components/shared/TopHeader";
import Search from "../components/shared/Search";
import { MenuDefault } from "./transactions/MenuDefault";
import ProductCard from "./product/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "@mui/material/Pagination";

const electronic = ["Electronic 1", "Electronic 2", "Electronic 3"];
const last = ["Electronic 1", "Electronic 2", "Electronic 3"];

const productData = [
  {
    image: "./src/assets/deki.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/radioplay.png",
    name: "Mp3 Music Player",
    details: "White, fairtrade certified, cotton",
    price: "TZS 20,000.12",
  },
  {
    image: "./src/assets/ammitter.png",
    name: "Mini Mp3 player",
    details: "White, fairtrade certified, cotton",
    price: "TZS 15,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/ammitter.png",
    name: "Mini Mp3 player",
    details: "White, fairtrade certified, cotton",
    price: "TZS 15,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    image: "./src/assets/radio.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
];

function Products() {
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-3 flex  flex-col gap-3">
      <div className="">
        <TopHeader topHead="Products" />
      </div>
      <div className="flex gap-3 ">
        <div className="flex-1 bg-white">
          <Search
            placeholder="Search for products"
            searchclass="flex border rounder-md p-2 "
            inputclass=""
          />
        </div>
        <div className="flex gap-3">
          <MenuDefault item_type="Electronic" items={electronic} />
          <MenuDefault item_type="Best Selling" items={last} />
        </div>
      </div>
      <div className="">
        <TopHeader topHead="10 results found" />
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {currentProduct.map((item, index) => (
            <ProductCard product={item} key={index} />
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
            className={{
              ul: "space-x-2",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
