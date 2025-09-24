import "./App.css";
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
import AdminLogin from "./pages/user/AdminLogin";
import Products from "./pages/admin/Products";
import UnderConstruction from "./pages/admin/UnderConstruction";
import AddProduct from "./pages/admin/AddProduct";
import {ToastContainer} from"react-toastify"
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import UserAddAddress from "./pages/user/UserAddAddress";


function App() {
  return (
    <div className="px-2">
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route element={<ProtectedRoute/>}>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/useraccount" element={<UserAccountLayout />}>
          <Route index element={<AccountOverview />}></Route>
          <Route path="myorders" element={<MyOrders/>}></Route>
          <Route path="address" element={<UserAddress/>}></Route>
          <Route path="editaddress" element={<UserEditAddress/>}></Route>
          <Route path="addaddress" element={<UserAddAddress/>}></Route>
        </Route>

        </Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/order-complete" element={<OrderComplete />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<UnderConstruction/>} />
          <Route path="products" element={<Products/>} />
          <Route path="addproduct" element={<AddProduct/>} />
          {/* Add more admin routes as needed */}
        </Route>
      </Routes>


    </div>
  );
}

export default App;
