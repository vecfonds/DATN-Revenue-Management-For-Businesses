import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Flex, Progress, Table, Select } from "antd";
import Countdocument from "../../component/Tongquan/count-document";
import ChartNhanvien from "../../component/Chart/chartNhanvien";
import ChartSanpham from "../../component/Chart/chartSanpham";
import { getChartRevenueMonth, getChartRevenueQuarter, getChartRevenueYear, tongQuanSelector } from "../../store/features/tongQuanSlice";
import { useDispatch, useSelector } from "react-redux";
import { VND, selectTime } from "../../utils/func";
import { congNoSelector, getListCongNo, postReportTHCN, postReportTHCNRaw } from "../../store/features/congNoSlice";
import TinhHinhTaiChinh from "../../component/Chart/TinhHinhTaiChinh";
const items = [
  {
    label: "Năm nay",
    key: "0",
  },
  {
    label: "Năm trước",
    key: "1",
  },
];

const data = [
  {
    key: 1,
    name: "Tháng 1",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 2,
    name: "Tháng 2",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 3,
    name: "Tháng 3",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 4,
    name: "Tháng 4",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 5,
    name: "Tháng 5",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 6,
    name: "Tháng 6",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 7,
    name: "Tháng 7",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 8,
    name: "Tháng 8",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 9,
    name: "Tháng 9",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 10,
    name: "Tháng 10",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 11,
    name: "Tháng 11",
    "Doanh thu": 0,
    chiphi: 0,
  },
  {
    key: 12,
    name: "Tháng 12",
    "Doanh thu": 0,
    chiphi: 0,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    className: 'bg-[#FFF6D8]',
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Quanlity",
    dataIndex: "quanlity",
    key: "quanlity",
    className: 'bg-[#FFF6D8]',
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    className: 'bg-[#FFF6D8]',
  },
];
const TongQuan = () => {
  const dispatch = useDispatch();

  const {
    isSuccessGetChartRevenue,
    isSuccessGetChartProduct,
    chartRevenueData,
    chartProductData,
  } = useSelector(tongQuanSelector);

  useEffect(() => {
    if (chartRevenueData) {
      // chartRevenueData?.forEach(item => {
      //   if (item.key < 6) {
      //     data[item.key - 1]["Doanh thu"] = item["Doanh thu"];
      //   }
      // })
      // for (let i = 0; i < 12; ++i) {
      //   if (i < 6) {
      //     chartRevenueData?.forEach(item => {
      //       if (item.key - 1 === i) {
      //         data[i]["Doanh thu"] = item["Doanh thu"];
      //       }
      //     })
      //   }
      //   else {
      //     chartRevenueData?.forEach(item => {
      //       if (item.key - 1 === i) {
      //         data[i]["Doanh thu"] = 0;
      //       }
      //     })
      //   }
      // }

      setDataVenue(chartRevenueData);
    }
  }, [chartRevenueData]);

  useEffect(() => {

    dispatch(getChartRevenueYear({ values: { year: "2024" } }));

    const dataConvert = {
      "startDate": "2020-01-01",
      "endDate": "2025-01-01",
      "name": "xxx",
      "description": "xxx",
      "customerIds": []
    }

    dispatch(postReportTHCNRaw({ values: dataConvert }));
  }, []);

  const {
    reportTHCNData
  } = useSelector(congNoSelector);

  const [dataVenue, setDataVenue] = useState();

  useEffect(() => {

  }, [dataVenue]);

  const handleChange = (value) => {
    const timeRange = selectTime(value);

    if (value === "thisYear") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0]
      }
      dispatch(getChartRevenueYear({ values: dataConvert }));
    }
    else if (value === "lastYear") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0]
      }
      dispatch(getChartRevenueYear({ values: dataConvert }));
    }
    else if (value === "thisMonth") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        month: timeRange?.startDate.split('-')[1]
      }
      dispatch(getChartRevenueMonth({ values: dataConvert }));
    }
    else if (value === "lastMonth") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        month: timeRange?.startDate.split('-')[1]
      }
      dispatch(getChartRevenueMonth({ values: dataConvert }));
    }
    else if (value === "thisQuarter") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        quarter: 2
      }
      dispatch(getChartRevenueQuarter({ values: dataConvert }));
    }
    else if (value === "lastQuarter") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        quarter: 1
      }
      dispatch(getChartRevenueQuarter({ values: dataConvert }));
    }
    else if (value === "Q1") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        quarter: 1
      }
      dispatch(getChartRevenueQuarter({ values: dataConvert }));
    }
    else if (value === "Q2") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        quarter: 2
      }
      dispatch(getChartRevenueQuarter({ values: dataConvert }));
    }
    else if (value === "Q3") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        quarter: 3
      }
      dispatch(getChartRevenueQuarter({ values: dataConvert }));
    }
    else if (value === "Q4") {
      const dataConvert = {
        year: timeRange?.startDate.split('-')[0],
        quarter: 4
      }
      dispatch(getChartRevenueQuarter({ values: dataConvert }));
    }
  };



  return (
    <div className="ml-5 mb-5 mt-5">
      <h1 className="font-bold text-3xl mb-5">Tổng quan</h1>

      <Countdocument />
      <Flex gap={50} className='mt-5 w-full'>
        <div>
          {/* <p className="text-xl">Doanh thu</p> */}
          <p className="font-bold text-xl">Doanh thu</p>

          {/* <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: [0],
            }}
          // trigger={["click"]}
          >
            <a onChange={(e) => {

            }}>
              <Space>
                Năm nay
                <DownOutlined />
              </Space>
            </a>
          </Dropdown> */}

          <Select
            defaultValue={'thisYear'}
            style={{
              width: 120,

            }}
            className="bg-[#FFF6D8]"
            onChange={handleChange}
            options={[
              {
                value: 'thisYear',
                label: 'Năm nay',
              },
              {
                value: 'lastYear',
                label: 'Năm trước',
              },
              {
                value: 'thisMonth',
                label: 'Tháng này',
              },
              {
                value: 'lastMonth',
                label: 'Tháng trước',
              },
              {
                value: 'thisQuarter',
                label: 'Quý này',
              },
              {
                value: 'lastQuarter',
                label: 'Quý trước',
              },
              {
                value: 'Q1',
                label: 'Quý 1',
              },
              {
                value: 'Q2',
                label: 'Quý 2',
              },
              {
                value: 'Q3',
                label: 'Quý 3',
              },
              {
                value: 'Q4',
                label: 'Quý 4',
              },
            ]}
          />

          <ResponsiveContainer className="!w-[900px] !h-[300px] border border-gray-300 shadow-xl rounded-lg p-5">
            <BarChart
              width={700}
              height={300}
              data={dataVenue}
              margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="Doanh thu" unit="đ" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Doanh thu"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              {/* <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          /> */}

            </BarChart>
          </ResponsiveContainer>
        </div>


        <div className='border border-gray-300 shadow-md rounded-lg p-5 w-[400px]'>
          <p className="text-xl">Nợ phải thu theo hạn nợ</p>
          <p>
            <strong className="fon-bold text-2xl">{VND.format(
              reportTHCNData?.map(pt => pt.inOfDate).reduce((total, currentValue) => {
                return total + currentValue;
              }, 0)
              +
              reportTHCNData?.map(pt => pt.outOfDate).reduce((total, currentValue) => {
                return total + currentValue;
              }, 0)
            )}</strong>
          </p>
          <p className="text-gray-500 mb-8">TỔNG</p>
          <Flex justify="space-between">
            <Flex vertical>
              <p className="text-orange-500">
                <strong className="fon-bold text-2xl">{VND.format(
                  reportTHCNData?.map(pt => pt.outOfDate).reduce((total, currentValue) => {
                    return total + currentValue;
                  }, 0)
                )}</strong>
              </p>
              <p className="text-gray-500 ">QUÁ HẠN</p>
            </Flex>
            <Flex vertical align="flex-end">
              <p>
                <strong className="fon-bold text-2xl">{VND.format(
                  reportTHCNData?.map(pt => pt.inOfDate).reduce((total, currentValue) => {
                    return total + currentValue;
                  }, 0)
                )}</strong>
              </p>
              <p className="text-gray-500 ">TRONG HẠN</p>
            </Flex>
          </Flex>
          <Progress
            percent={
              ((reportTHCNData?.map(pt => pt.outOfDate).reduce((total, currentValue) => {
                return total + currentValue;
              }, 0)) * 100) / ((reportTHCNData?.map(pt => pt.outOfDate).reduce((total, currentValue) => {
                return total + currentValue;
              }, 0)) + (reportTHCNData?.map(pt => pt.inOfDate).reduce((total, currentValue) => {
                return total + currentValue;
              }, 0)))
            }
            showInfo={false}
            strokeColor="#f00732"
            trailColor="blue"
          />
        </div>
      </Flex>
      {/* <div className='mt-5'>
        <p className="text-xl">Lợi nhuận</p>
        <ResponsiveContainer className="!w-[800px] !h-[300px] border border-gray-300 shadow-xl rounded-lg p-5">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="chiphi" stroke="#8884d8" />
            <Line type="monotone" dataKey="doanhthu" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div> */}

      <Flex gap={0} className='mt-4 !max-w-[90%]'>
        <ChartNhanvien />
        <ChartSanpham />
      </Flex>

      <TinhHinhTaiChinh />
      {/* <>
        <p className="text-xl">Hàng hóa tồn kho</p>
        <p>
          <strong className="fon-bold text-2xl">0</strong> đồng
        </p>
        <p className="text-gray-500 mb-8">TỔNG GIÁ TRỊ</p>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ y: 500 }}
          pagination={{
            // total: listDonBanHangData.length,
            defaultPageSize: 4,

            // // pageSize: 20,
            // defaultCurrent: 1,
            position: ["bottomRight"],

          }}
          className="!max-w-[500px] !bg-[#FFF6D8] border border-gray-300 shadow-2xl rounded-lg"
        />
      </> */}
    </div>
  );
};

export default TongQuan;
