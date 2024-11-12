import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Transactions />} />
            <Route path="/product" element={<Products />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/conversation" element={<Conversations />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/customer/:id" element={<CustomerDetails />}>
              <Route path="/customer/:id/purchases" element={<Purchases />} />
              <Route path="/customer/:id/comments" element={<Comment />} />
              <Route path="/customer/:id/security" element={<Security />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
