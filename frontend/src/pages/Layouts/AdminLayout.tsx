import React from "react";
import AdminHeader from "../../components/AdminHeader";  // Your custom admin header
import AdminFooter from "../../components/AdminFooter";  // Your custom admin footer
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader /> {/* Admin Header */}
      <main>
        <Outlet /> {/* Nested routes will be rendered here */}
      </main>
      <AdminFooter /> {/* Admin Footer */}
    </div>
  );
};

export default AdminLayout;
