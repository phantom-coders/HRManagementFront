"use client";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FromSelectField";
import { Col, Empty, Row } from "antd";
import React from "react";
import Form from "@/components/Forms/Form";
import { selectOptions } from "@/constants/selectOptionsProps";

export default function WorkedEmployes() {
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
            name={"Employes"}
            defaultValue={selectOptions[0].label}
            options={selectOptions}
          />
        </Col>
        <Col span={6} className="m-0">
          <FormDatePicker name={"date"} />
        </Col>
      </Row>

      <Empty className="mt-5" />
    </Form>
  );
}
