
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Header /> {/* User Header */}
      <main className="min-h-[500px]">
        <Outlet /> {/* Nested routes will be rendered here */}
      </main>
      <Footer /> {/* User Footer */}
    </div>
  );
};

export default UserLayout;
