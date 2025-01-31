"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 106,
    fill: "#d7d7d7",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#8884d8",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#83a6ed",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CounterChart = () => {
  return (
    <div className="bg-white rounded-xl w:full h-full p-4">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className="chart w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="bottom flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-mySky rounded-full" />
          <h1 className="font-bolod">1,234</h1>
          <h2 className="text-ts text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-myYellow rounded-full" />
          <h1 className="font-bolod">1,234</h1>
          <h2 className="text-ts text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CounterChart;
