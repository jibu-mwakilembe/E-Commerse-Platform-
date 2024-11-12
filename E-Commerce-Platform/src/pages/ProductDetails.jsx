import React from "react";
import BackButton from "../components/BackButton";
import ProductDetailsCard from "./product/ProductDetailsCard";

function ProductDetails(props) {
  return (
    <div className="p-3 flex   flex-col gap-3">
      <BackButton backTitle="Back to Products" backLink="/product" />
      <div className="w-full">
        <ProductDetailsCard />
      </div>
    </div>
  );
}

export default ProductDetails;
