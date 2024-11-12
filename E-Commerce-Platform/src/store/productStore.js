import { create } from "zustand";
import { productDataList } from "./ProductData";

const useProductStore = create((set) => ({
  productLists: productDataList,
  getProducts: () => {
    set((state) => ({
      productLists: state.productLists,
    }));
  },
  getProductById: (id) => {
    const product = productDataList.find((prod) => prod.Id === id);
    return product || null;
  },
}));

export default useProductStore;
