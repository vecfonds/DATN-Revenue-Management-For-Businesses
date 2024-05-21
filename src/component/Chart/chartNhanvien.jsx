import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { name: "NV029", revenue: 18 },
  { name: "NV023", revenue: 16.989 },
  { name: "NV003", revenue: 15.37 },
  { name: "NV033", revenue: 14.74 },
  { name: "NV011", revenue: 13.967 },
  { name: "NV021", revenue: 13.861 },
  { name: "NV004", revenue: 13.212 },
  { name: "NV007", revenue: 12.798 },
  { name: "NV010", revenue: 12.729 },
  { name: "NV012", revenue: 12.247 },
];

const colors = [
  "#00C49F",
  "#00C49F",
  "#82CA9D",
  "#82CA9D",
  "#AED581",
  "#AED581",
  "#FFB74D",
  "#FFB74D",
  "#FF8A65",
  "#FF8A65",
];

const ChartNhanvien = () => {
  
  return (
    <div>
        <p className="font-bold text-xl mt-5">Biều đồ top 10 nhân viên có doanh thu cao nhất</p>
    <ResponsiveContainer width={500} height={400}>
      <BarChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
          <LabelList dataKey="revenue" position="right" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default ChartNhanvien;
