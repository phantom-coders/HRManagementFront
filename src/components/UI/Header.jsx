"use client";
import { getUserInfo } from "@/services/auth.service";

import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  Modal,
  Popover,
  Row,
  Select,
} from "antd";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import FormSelectField from "../Forms/FromSelectField";
import { navSelectOptions } from "@/constants/selectOptionsProps";
import Form from "../Forms/Form";
import PopoverContent from "./PopoverContent";
import { useState } from "react";
import HRModal from "./HRModal";
import ModalContent from "./Modal/ModalContent";

const { Header } = Layout;

export default function AppBar() {
  const { id } = getUserInfo();
  const [open, setOpen] = useState(false);
  const handleTeam = (data) => {};
  return (
    <>
      <Header
        style={{
          borderBottom: "2px solid white",
        }}
        className="bg-primary"
      >
        {" "}
        <Row justify={"space-between"} align={"middle"}>
          <Col>
            {" "}
            <p className="text-2xl font-bold my-4">Talent Sync</p>
          </Col>
          <Col>
            <Form submitHandler={handleTeam}>
              <Row align={"middle"} className="gap-2">
                <Col>
                  <Button
                    size="middle"
                    onClick={() => setOpen(true)}
                    icon={<UserAddOutlined />}
                  >
                    Add User{" "}
                  </Button>
                </Col>
                <Col>
                  {" "}
                  <FormSelectField
                    size="middle"
                    name={"teams"}
                    defaultValue={navSelectOptions[0].label}
                    options={navSelectOptions}
                  />
                </Col>
                <Col>
                  <Popover content={<PopoverContent />} title="Organization">
                    <Avatar size={"default"} icon={<UserOutlined />} />
                  </Popover>
                </Col>
              </Row>{" "}
            </Form>
          </Col>
        </Row>{" "}
      </Header>
      <HRModal
        title={"Add New Employes"}
        // eslint-disable-next-line react/no-children-prop
        children={<ModalContent />}
        isOpen={open}
        closeModal={() => setOpen(false)}
      />
    </>
  );
}
