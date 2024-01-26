"use client";
import { Button, Col, Input, Row, Typography, message } from "antd";
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
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

const RegisterForm = () => {
  const [createUser] = useCreateUserMutation();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const verifyToken = searchParams.get("secret");
  const router = useRouter();
  if (!email || !verifyToken) {
    redirect("/onboarding");
  }
  const onSubmit = async (data) => {
    try {
      const user = {
        name: data?.name,
        password: data?.password,
        email,
        verifyToken,
      };
      const res = await createUser({ ...user }).unwrap();

      if (res?.data?.token) {
        router.push("/dashboard/overview");
        message.success("User Created successfully!");
      }

      storeUserInfo({ token: res?.data?.token });
    } catch (err) {
      message.error(err?.data?.message);
    }
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
                disabled={true}
                value={email}
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
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="verifyToken"
                type="text"
                size="large"
                label="Secret"
                disabled={true}
                value={verifyToken}
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
