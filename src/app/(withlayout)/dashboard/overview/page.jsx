import { LineCharts } from "@/components/UI/LineChart";
import { overviewItems } from "@/constants/overviewItems";
import { tableItemsProps } from "@/constants/tableItemsProps";
import { Card, Col, Empty, Row, Space, Table } from "antd";
import React from "react";

export default function Overview() {
  return (
    <Space direction="vertical" size="middle">
      <div
        style={{
          padding: "5px 20px",
        }}
      >
        <h2>Hello Talha,</h2>
        <p>Track Your Team Progress Here</p>
      </div>
      <Row justify={"center"} align={"middle"}>
        {overviewItems.map((item, i) => (
          <Col
            key={i}
            span={4}
            style={{
              margin: "14px",
            }}
          >
            <Card style={{ width: 200 }}>
              <p>{item.title}</p>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  {item.count}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Row
        justify={"space-between"}
        align="middle"
        style={{
          margin: "0 20px",
        }}
      >
        <Col sm={12} md={11} lg={11}>
          <Card>
            <LineCharts />
          </Card>
        </Col>
        <Col sm={12} md={11} lg={11}>
          <Card
            style={{
              height: 265,
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "GrayText",
                textAlign: "center",
                padding: "10px 0px",
              }}
            >
              Top Used Browser
            </p>
            <Empty />
          </Card>
        </Col>
      </Row>
      <div
        style={{
          margin: "10px 10px",
        }}
      >
        <h2
          style={{
            margin: "10px 10px",
          }}
        >
          List of Team Member
        </h2>
        <Table
          columns={tableItemsProps.columns}
          dataSource={tableItemsProps.data}
        />
      </div>
    </Space>
  );
}
