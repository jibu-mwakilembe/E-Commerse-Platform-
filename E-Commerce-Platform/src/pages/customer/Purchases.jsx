import React, { useEffect, useCallback } from "react";
import SearchTextField from "../../components/shared/SearchTextField";
import { MenuDefault } from "../transactions/MenuDefault";
import ProductCard from "../product/ProductCard";
import { useParams } from "react-router-dom";
import useCustomerStore from "../../store/customerStore";
import useProductstore from "../../store/productStore";

const electronic = ["Electronic 1", "Electronic 2", "Electronic 3"];
const purchasedProduct2 = [
  {
    Id: "1",
    image: "/assets/deki.png",
    name: "PlayStation 5 Gaming Console",
    details: "White, fairtrade certified, cotton",
    price: "TZS 2,220,000.12",
  },
  {
    Id: "2",
    image: "/assets/radioplay.png",
    name: "Mp3 Music Player",
    details: "White, fairtrade certified, cotton",
    price: "TZS 20,000.12",
  },
];

function Purchases(props) {
  const { getCustomerById, selectedCustomer } = useCustomerStore();
  const {
    fetchPurchasedProduct,
    purchasedProduct,
    searchPurchasedProduct,
    filteredProducts,
  } = useProductstore();
  const { id } = useParams();
  // useEffect(() => {
  //   setPurchasedProduct();
  // }, [setPurchasedProduct]);

  // const purchasedProductList = purchasedProduct;
  const fetchCustomer = useCallback(
    () => getCustomerById(id),
    [id, getCustomerById]
  );

  useEffect(() => {
    fetchCustomer();
    if (id) {
      fetchPurchasedProduct(id);
    }
  }, [fetchCustomer, id, fetchPurchasedProduct]);

  const handleSearch = (e) => {
    const query = e.targer.value;
    searchPurchasedProduct(query);
  };

  const customer = selectedCustomer;
  const product = filteredProducts;
  console.log("customer:", customer);
  return (
    <div className="">
      <div className="flex flex-wrap gap-3 p-3 sm:flex-col md:flex-col lg:flex-row ">
        <div className="flex-1 bg-white">
          <SearchTextField
            placeholder={`"Search for products bought by ${customer.name} `}
            onChange={handleSearch}
          />
        </div>
        <div className="flex gap-3  w-full  sm:w-auto md:w-auto">
          <MenuDefault item_type="Electronic" items={electronic} />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {product.length > 0 ? (
            product.map((item) => <ProductCard product={item} key={item.Id} />)
          ) : (
            <div>No purchased product </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Purchases;
