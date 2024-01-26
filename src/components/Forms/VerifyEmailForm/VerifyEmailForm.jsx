"use client";
import React from "react";
import { Button, Col, Flex, Row, message } from "antd";
import Image from "next/image";
import loginImage from "../../../assets/login-image.png";
import { MailOutlined } from "@ant-design/icons";
import Form from "../Form";
import FormInput from "../FormInput";
import { useVerifyEmailMutation } from "@/redux/api/authApi";

export default function VerifyEmailForm() {
  const [verifyEmail] = useVerifyEmailMutation();
  const onSubmit = async (data) => {
    try {
      const res = await verifyEmail({ ...data }).unwrap();

      if (res?.statusCode === 200) {
        message.success("Mail Sent. Please Check your mail");
      }
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
            margin: "10px 0px",
          }}
        >
          First Verify your Email
        </h1>

        <Form submitHandler={onSubmit}>
          {" "}
          <Flex align="center" gap={10}>
            <div>
              <FormInput
                prefix={<MailOutlined className="site-form-item-icon" />}
                name="email"
                type="email"
                size="large"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Verify
            </Button>
          </Flex>
        </Form>
      </Col>
    </Row>
  );
}
