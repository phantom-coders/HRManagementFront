import Contents from "@/components/UI/Contents";
import AppBar from "@/components/UI/Header";
import Sidebar from "@/components/UI/Sidebar";
import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { Layout } from "antd";

const DashboardLayout = ({ children }) => {
  const role = USER_ROLE.SUPER_ADMIN;
  return (
    <>
      <AppBar />
      <Layout hasSider>
        <Sidebar
          collapsible={true}
          className={"bg-primary"}
          items={sidebarItems(role)}
        />
        <Contents>{children}</Contents>
      </Layout>
    </>
  );
};
export default DashboardLayout;
