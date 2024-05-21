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
  LabelList,
} from "recharts";

const data = [
  { name: "Áo", revenue: 1 },
  { name: "Dép", revenue: 1 },
  { name: "Bút", revenue: 1 },
  { name: "Balo", revenue: 1 },
  { name: "Giầy Dây Conse", revenue: 10 },
  { name: "Laci Hk1", revenue: 1 },
  { name: "Lưới Conse", revenue: 1 },
  { name: "Sandal Chaco", revenue: 1 },
  { name: "Sandal Teva", revenue: 1 },
  { name: "Dép Laci", revenue: 1 },
];

const ChartSanpham = () => {
  return (
    <div>
    <p className="font-bold text-xl mt-5 ml-10">Biều đồ top 10 sản phẩm bán chạy nhất</p>
    <ResponsiveContainer width={900} height={400}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#ff8042">
          <LabelList dataKey="revenue" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default ChartSanpham;
