import { create } from "zustand";
import { customerDataList } from "./CustomerData";

const useCustomerStore = create((set) => ({
  customerList: customerDataList,
  getCustomers: () => {
    set((state) => ({
      customerList: state.customerList,
    }));
  },
  getCustomerById: (id) => {
    const customer = customerDataList.find((cust) => cust.Id === id);
    return customer || null;
  },
}));
export default useCustomerStore;
