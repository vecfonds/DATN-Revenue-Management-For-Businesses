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
  ComposedChart,
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



  const dataxxx = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]


  return (
    <div className="ml-5 mb-5 mt-5">
      <h1 className="font-bold text-3xl mb-5">Tổng quan</h1>

      <div>
        <ResponsiveContainer className="!w-[900px] !h-[300px] border border-gray-300 shadow-xl rounded-lg p-5">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // layout="vertical"
          width={500}
          height={300}
          data={dataVenue}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" type="category" />
          <YAxis dataKey="Doanh thu" unit="đ" activeDot={{ r: 8 }} />
          <Tooltip />
          <Legend />
          <Line dataKey="pv" stroke="#FF0000" />
          <Line dataKey="Doanh thu" stroke="#4B8AF1" />
        </LineChart>
      </ResponsiveContainer>
        </ResponsiveContainer>
      </div>


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
