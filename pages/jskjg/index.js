import PrivateRoute from "@/components/PrivateRoute";
import Sidebar from "@/components/sidebar";
import Layout from "@/DashboardLayout/Layout";

const jskjg = ({ children }) => {
  return <Layout />;
};

export default PrivateRoute(jskjg);
