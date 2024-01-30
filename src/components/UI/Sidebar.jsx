"use client";
import { USER_ROLE } from "@/constants/role";
import { Layout, Menu } from "antd";
import Image from "next/image";
import { useState } from "react";
const { Sider } = Layout;
export default function Sidebar({ items, className, collapsible }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      className={`overflow-auto h-[100vh] sticky left-0 top-0 bottom-0 ${className}`}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        className={"bg-transparent"}
      />
    </Sider>
  );
}
