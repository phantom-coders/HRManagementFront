"use client";
import { Button, Col, Input, Row, Typography } from "antd";
import {
  LockOutlined,
  UserOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import loginImage from "../../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Link from "next/link";

const RegisterForm = () => {
  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Register your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                prefix={<ContactsOutlined className="site-form-item-icon" />}
                name="name"
                type="text"
                size="large"
                label="Name"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                prefix={<UserOutlined className="site-form-item-icon" />}
                name="email"
                type="email"
                size="large"
                label="Email"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <p
              style={{
                margin: "15px 0px",
              }}
            >
              Already have an account, lets <Link href={`/login`}>Login</Link>
            </p>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default RegisterForm;
