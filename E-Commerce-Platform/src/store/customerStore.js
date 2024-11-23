import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import customerService from "../services/CustomerServices";

const useCustomerStore = create(
  devtools(
    persist(
      (set) => ({
        customerList: [],
        filterCustomers: [],
        isLoading: false,
        error: null,
        selectedCustomer: null,
        searchQuery: "",

        fetchCustomers: async () => {
          set({ isLoading: true, error: null });
          try {
            const response = await customerService.getCustomers();
            // const response = await customerService.getCustomer();
            set({
              customerList: response.data,
              filterCustomers: response.data,
              isLoading: false,
            });
          } catch (error) {
            set({ error: "Failed to fetch customers", isLoading: false });
          }
        },

        getCustomerById: (id) => {
          set((state) => ({
            selectedCustomer:
              state.customerList.find((customer) => customer.id === id) || null,
          }));
        },

        setSearchQuery: (query) => {
          set((state) => {
            const filterCustomers = query
              ? state.customerList.filter(
                  (customer) =>
                    customer.name.toLowerCase().includes(query.toLowerCase()) ||
                    customer.email.toLowerCase().includes(query.toLowerCase())
                )
              : state.customerList;
            return { searchQuery: query, filterCustomers: filterCustomers };
          });
        },

        deleteCustomer: async (id) => {
          try {
            await customerService.deleteCustomer(id);
            set((state) => ({
              customerList: state.customerList.filter(
                (customer) => customer.id !== id
              ),
              filterCustomers: state.filterCustomers.filter(
                (customer) => customer.id !== id
              ),
            }));
            console.log(`Customer with ${id} is deleted Successfully `);
          } catch (error) {
            set({ error: "Failed to delete customer " });
          }
        },
      }),
      {
        name: "customer-store",
      }
    )
  )
);

export default useCustomerStore;
