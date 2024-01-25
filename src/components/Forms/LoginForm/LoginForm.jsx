"use client";
import { Button, Col, Input, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import loginImage from "../../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Link from "next/link";

const LoginForm = () => {
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
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                prefix={<UserOutlined className="site-form-item-icon" />}
                name="id"
                type="text"
                size="large"
                label="Email or User Id"
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
                label="User Password"
              />
            </div>
            <p
              style={{
                margin: "15px 0px",
              }}
            >
              If you do not have an account, first{" "}
              <Link href={`/register`}>Register</Link>
            </p>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginForm;
