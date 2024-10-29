import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sellers from "./pages/Sellers";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Conversations from "./pages/Conversations";

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
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
