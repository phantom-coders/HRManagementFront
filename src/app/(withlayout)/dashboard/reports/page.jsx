import { Breadcrumb, Layout } from "antd";
import { redirect } from "next/navigation";
import React from "react";

export default function Reports() {
  return redirect("/dashboard/reports/daily_attendence");
}
