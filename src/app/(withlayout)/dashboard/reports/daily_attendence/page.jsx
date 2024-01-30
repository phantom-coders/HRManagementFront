"use client";
import { tabItems } from "@/constants/dailyAttendenceTabsItems";
import { Tabs } from "antd";
import React from "react";

export default function DailyAttendencePage() {
  return <Tabs defaultActiveKey="1" items={tabItems} />;
}
