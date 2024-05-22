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
  Cell,
  LabelList,
} from "recharts";
import { baoCaoSelector, postReportDTBHRaw } from "../../store/features/baoCaoSlice";

// const data = [
//   { name: "NV029", "Doanh thu": 18 },
//   { name: "NV023", "Doanh thu": 16.989 },
//   { name: "NV003", "Doanh thu": 15.37 },
//   { name: "NV033", "Doanh thu": 14.74 },
//   { name: "NV011", "Doanh thu": 13.967 },
//   { name: "NV021", "Doanh thu": 13.861 },
//   { name: "NV004", "Doanh thu": 13.212 },
//   { name: "NV007", "Doanh thu": 12.798 },
//   { name: "NV010", "Doanh thu": 12.729 },
//   { name: "NV012", "Doanh thu": 12.247 },
// ];

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
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const {
    isSuccessGetListCongNo,

    isError,
    message,
    isSuccessPostReportDTBH,
    listCongNo,
    listReportDTBHData,
    reportDTBHData
  } = useSelector(baoCaoSelector);

  useEffect(() => {
    const dataConvert = {
      // "startDate": formatDate(values.rangePicker[0].$d),
      // "endDate": formatDate(values.rangePicker[1].$d),
      "startDate": "2020-01-01",
      "endDate": "2025-01-01",
      "name": "xxx",
      "description": "xxx",
      "salespersonIds": []
    }

    console.log("dataConvert", dataConvert)
    dispatch(postReportDTBHRaw({ values: dataConvert }));
  }, []);

  useEffect(() => {
    if (reportDTBHData) {
      const dataConvertCurrent = reportDTBHData?.map(salesperson => {
        let tong = 0;
        salesperson.ctbans?.forEach(chungTuBanData => {
          console.log("chungTuBanData", chungTuBanData)
          tong += chungTuBanData.totalProductValue - chungTuBanData.totalDiscountValue;
        })


        return {
          id: salesperson?.salesperson?.id,
          name: salesperson?.salesperson?.name,
          "Doanh thu": tong
        }
      })



      console.log("dataConvertCurrent", dataConvertCurrent)

      dataConvertCurrent.sort(function (a, b) { return b - a })

      setData(dataConvertCurrent.slice(0, 10));
      // setDataConvert(dataConvertCurrent);
      // setChungTuBan(dataConvertCurrent);
      // dispatch(clearState());
    }
  }, [reportDTBHData]);


  return (
    <div>
      <p className="font-bold text-xl mt-5">Biều đồ top 10 nhân viên có doanh thu cao nhất</p>
      <ResponsiveContainer width={600} height={400}>
        <BarChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{ top: 20, right: 70, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" unit="đ" />
          <YAxis type="category" dataKey="name" fontSize={10} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Doanh thu">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
            <LabelList dataKey="Doanh thu" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartNhanvien;
