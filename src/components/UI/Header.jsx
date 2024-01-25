"use client";
import { headerItems } from "@/constants/headerItems";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Input, Layout, Menu, Row } from "antd";

const { Header } = Layout;

export default function AppBar() {
  return (
    <Header>
      <Flex justify="space-between" align="center">
        <Input
          className="custom-input"
          variant="outlined"
          addonBefore={
            <SearchOutlined
              style={{
                color: "white",
              }}
            />
          }
          placeholder="Search for job candidate and more ..."
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={headerItems}
        />
      </Flex>
      {/* <Row>
        <Col span={18}>
          <Input
            variant="outlined"
            style={{
              padding: "14px 0",
              background: "transparent",
            }}
            addonBefore={
              <SearchOutlined
                style={{
                  color: "white",
                }}
              />
            }
            placeholder="Search for job candidate and more ..."
          />
        </Col>
        <Col span={6}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={headerItems}
          />
        </Col>
      </Row> */}
    </Header>
  );
}
