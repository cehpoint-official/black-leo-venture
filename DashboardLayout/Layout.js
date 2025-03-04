import Sidebar from "@/components/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <nav className="border-b border-gray-200">
        <h1 className="text-3xl text-center py-4">Admin Panel</h1>
      </nav>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
