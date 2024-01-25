"use client";
import { Layout } from "antd";
import AppBar from "./Header";

const { Content } = Layout;

const Contents = ({ children }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <AppBar />

      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
