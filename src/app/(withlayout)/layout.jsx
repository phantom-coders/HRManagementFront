import Contents from "@/components/UI/Contents";
import Sidebar from "@/components/UI/Sidebar";
import { Layout } from "antd";

const DashboardLayout = ({ children }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};
export default DashboardLayout;
