import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getChartProduct, tongQuanSelector } from "../../store/features/tongQuanSlice";

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
  const dispatch = useDispatch();

  const {
    isSuccessGetChartRevenue,
    isSuccessGetChartProduct,
    chartRevenueData,
    chartProductData,
  } = useSelector(tongQuanSelector);

  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    if (chartProductData) {
      // chartProductData?.forEach(item => {
      //   if (item.key < 6) {
      //     data[item.key - 1]["Doanh thu"] = item["Doanh thu"];
      //   }
      // })
      for (let i = 0; i < 12; ++i) {
        if (i < 6) {
          chartProductData?.forEach(item => {
            if (item.key - 1 === i) {
              data[i]["Doanh thu"] = item["Doanh thu"];
            }
          })
        }
        else {
          chartProductData?.forEach(item => {
            if (item.key - 1 === i) {
              data[i]["Doanh thu"] = 0;
            }
          })
        }
      }

      setDataProduct(data);
    }
  }, [chartProductData]);

  useEffect(() => {
    dispatch(getChartProduct());

    // const dataConvert = {
    //   "startDate": "2020-01-01",
    //   "endDate": "2025-01-01",
    //   "name": "xxx",
    //   "description": "xxx",
    //   "customerIds": []
    // }

    // dispatch(postReportTHCNRaw({ values: dataConvert }));
  }, []);
  return (
    <div>
      <p className="font-bold text-xl mt-5 ml-10">Biều đồ top 10 sản phẩm bán chạy nhất</p>
      <ResponsiveContainer width={900} height={400}>
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 10,
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
