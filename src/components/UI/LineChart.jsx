"use client";
import { LineChartsItems } from "@/constants/LineChartsItems";
import { Line } from "react-chartjs-2";

export function LineCharts() {
  return (
    <div>
      <Line options={LineChartsItems.options} data={LineChartsItems.data} />
    </div>
  );
}
