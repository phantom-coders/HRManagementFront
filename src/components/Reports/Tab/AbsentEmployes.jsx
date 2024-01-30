"use client";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FromSelectField";
import dayjs from "dayjs";
import { Col, DatePicker, Empty, Row, Select } from "antd";
import React from "react";
import Form from "@/components/Forms/Form";
import { selectOptions } from "@/constants/selectOptionsProps";

export default function AbsentEmployes() {
  const handleWorkedEmploye = (data) => {};
  return (
    <Form submitHandler={handleWorkedEmploye}>
      <Row
        style={{
          border: "1px solid",
          borderRadius: "5px",
          borderColor: "gray",
          placeItems: "center",
          gap: "10px",
          padding: "8px 10px",
        }}
      >
        <Col span={6}>
          <FormSelectField
            name={"Employee"}
            defaultValue={selectOptions[0].label}
            options={selectOptions}
          />
        </Col>
        <Col span={6} className="m-0">
          <FormDatePicker name={"date"} />
        </Col>
      </Row>

      <p className="text-center font-bold text-xl my-10">
        Set the expected clock-in time to get the live report
      </p>
    </Form>
  );
}