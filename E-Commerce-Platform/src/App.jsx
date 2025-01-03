import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/shared/Layout";
import Products from "./pages/Products";
import Sellers from "./pages/Sellers";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Conversations from "./pages/Conversations";
import ProductDetails from "./pages/ProductDetails";
import CustomerDetails from "./pages/customer/CustomerDetails";
import Purchases from "./pages/customer/Purchases";
import Comment from "./pages/customer/Comment";
import Security from "./pages/customer/Security";
import SellerDetails from "./pages/seller/SellerDetails";
import SellerSecurity from "./pages/seller/SellerSecurity";
import SellersActivity from "./pages/seller/SellersActivity";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import SellerProducts from "./pages/seller/SellersProducts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Transactions />} />
            <Route path="/product" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/sellers/:id" element={<SellerDetails />}>
              <Route
                path="/sellers/:id/security"
                element={<SellerSecurity />}
              />
              <Route
                path="/sellers/:id/sellersactivity"
                element={<SellersActivity />}
              />
              <Route
                path="/sellers/:id/products"
                element={<SellerProducts />}
              />
            </Route>
            <Route path="/conversation" element={<Conversations />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetails />}>
              <Route path="/customers/:id/purchases" element={<Purchases />} />
              <Route path="/customers/:id/comments" element={<Comment />} />
              <Route path="/customers/:id/security" element={<Security />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
