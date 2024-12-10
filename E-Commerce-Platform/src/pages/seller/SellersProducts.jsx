import SearchTextField from "../../components/shared/SearchTextField";
import ProductCard from "../product/ProductCard";
import { MenuDefault } from "../transactions/MenuDefault";
import useSellerStore from "../../store/SellerStore";
import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useProductstore from "../../store/productStore";

const electronic = ["Electronic 1", "Electronic 2", "Electronic 3"];

const sellerProduct2 = [
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

function SellerProducts({}) {
  const { getSellerById, selectedSeller } = useSellerStore();
  const {
    fetchSellerProduct,
    searchSellerProduct,
    filteredProducts,
    sellerProducts,
  } = useProductstore();
  const { id } = useParams();

  const fetchSeller = useCallback(() => getSellerById(id), [id, getSellerById]);

  useEffect(() => {
    fetchSeller();
    fetchSellerProduct(id);
  }, [id, fetchSellerProduct, fetchSeller]);

  const handleSearch = (e) => {
    const query = e.target.value;
    searchSellerProduct(query);
  };

  const seller = selectedSeller;

  const sellerProduct = filteredProducts;
  console.log("seller-product:", sellerProduct);

  return (
    <div className="">
      <div className="flex flex-wrap gap-3 p-3 sm:flex-col md:flex-col lg:flex-row">
        <div className="flex-1 bg-white ">
          <SearchTextField
            placeholder={`Search for products from ${seller.name} `}
            onClick={handleSearch}
          />
        </div>
        <div className="flex gap-3  w-full  sm:w-auto md:w-auto ">
          <MenuDefault item_type="Electronic" items={electronic} />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {sellerProduct.length > 0 ? (
            sellerProduct.map((item) => (
              <ProductCard product={item} key={item.Id} />
            ))
          ) : (
            <div>No seller product found </div>
          )}
        </div>
      </div>
      seller product
    </div>
  );
}

export default SellerProducts;
