"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1500,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 7700,
  },
  {
    name: "Apr",
    income: 2700,
    expense: 3908,
  },
  {
    name: "May",
    income: 2000,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2500,
    expense: 3800,
  },
  {
    name: "July",
    income: 5000,
    expense: 2500,
  },
  {
    name: "Aug",
    income: 3500,
    expense: 5000,
  },
  {
    name: "Sep",
    income: 3900,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3000,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3500,
    expense: 4700,
  },
  {
    name: "Des",
    income: 5000,
    expense: 3500,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w:full h-full p-4">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#82ca9d"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
