import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-green-700 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <div className="flex flex-col gap-3">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/orders">Orders</Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>

    </div>
  );
};

export default AdminLayout;