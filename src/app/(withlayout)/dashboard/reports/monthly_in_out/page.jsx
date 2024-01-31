"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FromSelectField";
import { selectOptions } from "@/constants/selectOptionsProps";
import { tableItemsProps } from "@/constants/tableItemsProps";
import { Col, Empty, Row, Table } from "antd";
import React from "react";

export default function MonthlyInOut() {
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
      <div className="mt-5">
        {tableItemsProps.data.length ? (
          <Table
            columns={tableItemsProps.columns}
            dataSource={tableItemsProps.data}
          />
        ) : (
          <Empty />
        )}
      </div>
    </Form>
  );
}
