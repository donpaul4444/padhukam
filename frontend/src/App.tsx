import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/user/Home";
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/user/Collection";
import About from "./pages/user/About";
import Contact from "./pages/user/Contact";
import Product from "./pages/user/Product";
import Cart from "./pages/user/Cart";
import CheckOut from "./pages/user/CheckOut";
import OrderComplete from "./pages/user/OrderComplete";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import ForgotPassword from "./pages/user/ForgotPassword";
import UserAccountLayout from "./pages/user/UserAccountLayout";
import MyOrders from "./pages/user/UserMyOrders";
import AccountOverview from "./pages/user/UserAccountOverview";
import UserAddress from "./pages/user/UserAddress";
import UserEditAddress from "./pages/user/UserEditAddress";
import UserLayout from "./pages/Layouts/UserLayout";
import AdminLayout from "./pages/Layouts/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
import AdminProductAdd from "./components/AdminProductAdd";

function App() {
  return (
    <div className="px-2">
      <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/order-complete" element={<OrderComplete />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/useraccount" element={<UserAccountLayout />}>
          <Route index element={<AccountOverview />}></Route>
          <Route path="myorders" element={<MyOrders/>}></Route>
          <Route path="address" element={<UserAddress/>}></Route>
          <Route path="editaddress" element={<UserEditAddress/>}></Route>
        </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="product/add" element={<AdminProductAdd />} />
          {/* Add more admin routes as needed */}
        </Route>
      </Routes>


    </div>
  );
}

export default App;
