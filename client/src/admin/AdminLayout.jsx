import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, ClipboardList, LogOut, ShieldCheck } from "lucide-react";

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Products", path: "/admin/products", icon: Package },
    { name: "Orders", path: "/admin/orders", icon: ClipboardList },
  ];

  return (
   
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">

      
      <aside className="w-72 bg-[#004d2c] text-white flex flex-col shadow-2xl z-20 shrink-0">
        
       
        <div className="p-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tighter">Hommlíe</h2>
              <p className="text-[10px] font-bold text-green-300 uppercase tracking-widest">Admin Control</p>
            </div>
          </div>
        </div>

       
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all font-black text-xs uppercase tracking-widest ${
                  isActive 
                    ? "bg-white text-[#004d2c] shadow-lg shadow-black/20" 
                    : "text-green-100 hover:bg-white/5"
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout Section */}
        <div className="p-6 border-t border-white/10">
          <Link 
            to="/login"
            className="flex items-center gap-4 px-4 py-4 rounded-2xl text-red-300 hover:bg-red-500/10 transition-all font-black text-xs uppercase tracking-widest"
          >
            <LogOut size={20} />
            Logout Session
          </Link>
        </div>
      </aside>

      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 shrink-0">
           <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
             Panel / {location.pathname.split('/').pop() || 'Dashboard'}
           </span>
           <div className="flex items-center gap-4">
             <div className="text-right">
               <p className="text-xs font-black text-[#0a1f44] uppercase">Admin User</p>
               <p className="text-[10px] font-bold text-green-600 uppercase">Online Status</p>
             </div>
             <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-white shadow-sm overflow-hidden">
               <img src={`https://ui-avatars.com/api/?name=Admin&background=004d2c&color=fff`} alt="Admin" />
             </div>
           </div>
        </header>

        
        <main className="flex-1 overflow-y-auto p-8 lg:p-12 scroll-smooth bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;