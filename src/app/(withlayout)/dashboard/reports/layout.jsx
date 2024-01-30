import Contents from "@/components/UI/Contents";
import Sidebar from "@/components/UI/Sidebar";
import { reportPageItems } from "@/constants/reportsPageItems";
import { USER_ROLE } from "@/constants/role";
import { Layout } from "antd";
import React from "react";

export default function layout({ children }) {
  const role = USER_ROLE.SUPER_ADMIN;
  return (
    <>
      <Layout hasSider>
        <Sidebar
          collapsible={false}
          className={"bg-transparent"}
          items={reportPageItems(role)}
        />
        <Contents>{children}</Contents>
      </Layout>
    </>
  );
}
