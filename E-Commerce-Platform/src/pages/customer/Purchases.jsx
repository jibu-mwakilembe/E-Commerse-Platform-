import React, { useEffect } from "react";
import SearchTextField from "../../components/shared/SearchTextField";
import { MenuDefault } from "../transactions/MenuDefault";
import ProductCard from "../product/ProductCard";
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

const handleSearch = (e) => {};

function Purchases(props) {
  const { setPurchasedProduct, purchasedProduct } = useProductstore();
  useEffect(() => {
    setPurchasedProduct();
  }, [setPurchasedProduct]);

  const purchasedProductList = purchasedProduct;

  return (
    <div className="">
      <div className="flex flex-wrap gap-3 p-3 ">
        <div className="flex-1 bg-white">
          <SearchTextField
            placeholder={`"Search for products bought by Amir Kingstone"`}
            onChange={handleSearch}
          />
        </div>
        <div className="flex gap-3 sm:flex-col md:flex-col w-full sm:w-auto md:w-auto">
          <MenuDefault item_type="Electronic" items={electronic} />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {purchasedProduct2.map((item) => (
            <ProductCard product={item} key={item.Id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Purchases;
