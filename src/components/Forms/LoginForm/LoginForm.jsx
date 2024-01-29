"use client";
import { Button, Col, Input, Row, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import loginImage from "../../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [userLogin] = useLoginUserMutation();
  const onSubmit = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.data?.token) {
        router.push("/dashboard/overview");
        message.success("User logged in successfully!");
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
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                prefix={<UserOutlined className="site-form-item-icon" />}
                name="email"
                type="text"
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
                label="User Password"
              />
            </div>

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
