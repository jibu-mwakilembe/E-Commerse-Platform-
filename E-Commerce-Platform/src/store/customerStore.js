import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import customerService from "../services/CustomerServices";

const useCustomerStore = create(
  devtools(
    persist(
      (set) => ({
        customerList: [],
        // filterCustomers: [],
        selectedComment: [],
        filterComment: [],
        isLoading: false,
        error: null,
        selectedCustomer: null,
        searchQuery: "",
        // searchComment: "",

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

        fetchCommentById: async (id) => {
          set({ isLoading: true, error: null });
          try {
            const response = await customerService.getCommentById(id);
            set({ selectedComment: response.data, isLoading: false });
          } catch (error) {
            set({ error: "Failed to fetch comment", isLoading: false });
          }
        },

        // fetchComment: async () => {
        //   set({ isLoading: true, error: null });
        //   try {
        //     const response = await customerService.getComment();
        //     set({ selectedComment: response.data, isLoading: false });
        //   } catch (error) {
        //     set({ error: "Failed to load comments", isLoading: false });
        //   }
        // },

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

        // setCommentQuery: (query) => {
        //   set((state) => {
        //     const filterComment = state.selectedComment.find(
        //       (comment) => comment.id === query
        //     );
        //     return { searchComment: query, filterComment: filterComment };
        //   });
        // },

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
