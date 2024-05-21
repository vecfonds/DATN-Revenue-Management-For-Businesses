import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Divider, Table, Dropdown, Space, DatePicker, Select, Button, Modal, Form, Flex, Input, TreeSelect, Pagination, message as msg, notification } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Search from 'antd/es/input/Search';
import { SiMicrosoftexcel } from 'react-icons/si';
import { TfiReload } from 'react-icons/tfi';
import { Add } from '@mui/icons-material';
import { MdOutlineSearch } from 'react-icons/md';
import { MenuItem } from 'react-pro-sidebar';
import Item from 'antd/es/list/Item';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, getListDonMuahang, muahangSelector } from '../../../../store/features/muahangSlice';

const DonMuaHang = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [open, setOpen] = useState(false);
  const [dataSelected, setDataSelected] = useState({});
  // console.log("dataSelected", dataSelected);

  const [filtersPram, setFiltersParam] = useState({});
  const [sorterPram, setSorterParam] = useState({});
  const [paginationPram, setPaginationParam] = useState({});

  console.log("filtersPram", filtersPram);
  console.log("sorterPram", sorterPram);
  console.log("paginationPram", paginationPram);

  const {
    listDonMuahangData,
    isError,
    message,
    isSuccessGetListDonMuahang,
    pagination
  } = useSelector(muahangSelector);

  console.log("listDonMuahangData", listDonMuahangData);
  console.log("pagination", pagination);

  useEffect(() => {
    dispatch(getListDonMuahang({
      requestParam: {
        currentPage: 1,
        pageSize: 20,
        sorts: 'undefined%3AASC'
      }
    }));
  }, []);

  useEffect(() => {
    // if (isSuccessPostSupplier) {
    //   // messageApi.open({
    //   //     key: 'updatable',
    //   //     type: 'success',
    //   //     content: 'Thêm dữ liệu thành công!',
    //   //     duration: 2,
    //   // });

    //   api.success({
    //     message: 'Thêm dữ liệu thành công!',
    //     placement: 'bottomLeft',
    //     duration: 2
    //   });

    //   dispatch(clearState());

    // }
    if (isSuccessGetListDonMuahang) {
      // messageApi.open({
      //   key: 'updatable',
      //   type: 'success',
      //   content: 'Tải dữ liệu thành công!',
      //   duration: 2,
      // });

      dispatch(clearState());
    }
    if (isError) {
      // messageApi.open({
      //     key,
      //     type: 'error',
      //     content: message,
      //     duration: 2,
      // });
    }

  }, [isSuccessGetListDonMuahang, isError]);


  const items = [
    {
      key: "xem",
      label: (<Link className="!text-black">
        Xem
      </Link>),
    },
    {
      key: "chinh-sua",
      label: (<Link className="!text-black">
        Chỉnh sửa
      </Link>)
    },
    {
      key: "xoa",
      label: (<Link className="!text-black">
        Xóa
      </Link>)
    },
  ];

  const handleDropdownItemClick = (e, record) => {
    console.log("e.key", e.key);
    console.log("record", record);
    if (e.key === "xoa") {
      setDataSelected(record);
      setOpen(true);
    }
    else {
      navigate(`${e.key}/${record.key}`, { state: { id: record.key } });
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Ngày đơn hàng",
      dataIndex: "ngayMua",
      sorter: (a, b) => new Date(a.ngayMua) - new Date(b.ngayMua),
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],

    },
    {
      title: "Số đơn hàng",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Giá trị đơn hàng",
      dataIndex: "xxx",
    },
    {
      title: "Tình trạng",
      dataIndex: "deliveryStatus",
      filters: [
        {
          text: 'DELIVERED',
          value: 'DELIVERED',
        },
        {
          text: 'NOT_DELIVERED',
          value: 'NOT_DELIVERED',
        },
        {
          text: 'DELIVERING',
          value: 'DELIVERING',
        },
      ],
    },
    {
      title: "Giá trị đã thực hiện",
      dataIndex: "description",
    },
    {
      title: "Chức năng",
      dataIndex: "chucnang",
      width: "10%",
      render: (_, record) => (
        <Space size="middle">
          <Dropdown
            menu={{
              onClick: (e) => handleDropdownItemClick(e, record),
              items: items,
            }}>
            <Link to={`xem/${record.key}`} state={{ id: record.key }} className="!text-black">
              Xem
              <DownOutlined />
            </Link>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log('plus', paginationPram, filtersPram, sorterPram);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('onChange params', pagination, filters, sorter, extra);
    console.log('onChange params pagination', pagination);
    console.log('onChange params filters', filters);
    console.log('onChange params sorter', sorter);
    console.log('onChange params extra', extra);
    setPaginationParam(pagination);
    setFiltersParam(filters);
    setSorterParam(sorter);
    const requestParam = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      sorts: `${sorter?.column?.dataIndex}%3A${sorter?.order === "descend" ? 'DESC' : 'ASC'}`
    }

    // &sorts=id%3AASC&sorts=ngayMua%3ADESC'

    dispatch(getListDonMuahang({ requestParam }));

  };

  const [messageApi, contextHolderMes] = msg.useMessage();

  const [api, contextHolder] = notification.useNotification();

  // const changePageNumber = (pageNumber) => {
  //     console.log('Page: ', pageNumber);
  //     set
  //   };

  return (
    <div className='m-4'>
      <div className='px-[20px] w-full flex justify-between py-7 bg-white'>
        <div className='flex gap-[5px] items-center'>
          <Form
            form={form}
            layout='inline'
            onFinish={onFinish}
          >
            <Form.Item
              name='type'
              className='w-[200px] !me-[5px]'
            >
              <Select placeholder='Lọc'>
                <Select.Option value="nhacungcap">Nhà cung cấp</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name='keyword'
              className='w-[300px] !me-0'
            >
              <Input
                className='rounded-tr-none rounded-br-none'
                placeholder="Tìm kiếm"
              />
            </Form.Item>

            <Button
              className='!bg-[#FAFAFA] font-bold m-0 p-0 w-[32px] h-[32px] flex justify-center items-center rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md'
              htmlType="submit"
            // onClick={() => navigate(-1)}
            >
              <MdOutlineSearch size={20} color='#898989' />
            </Button>

          </Form>

          {/* <Select
                        showSearch
                        style={{
                            width: 200,
                        }}
                        placeholder="Lọc"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                            {
                                value: 'nhacungcap',
                                label: 'Nhà cung cấp',
                            },
                            // {
                            //     value: '2',
                            //     label: 'Closed',
                            // },
                        ]}
                        onChange={onChange}
                        onSearch={onSearch}
                    />

                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={onSearch}
                        style={{
                            width: 300,
                        }}
                    /> */}
          {contextHolderMes}
          {contextHolder}

          <SiMicrosoftexcel size={30} className='p-2 bg-white border border-black cursor-pointer' />
          <TfiReload title="Cập nhật dữ liệu"
            size={30} className='p-2 bg-white border border-black cursor-pointer'
            onClick={() => {
              dispatch(getListDonMuahang({
                requestParam: {
                  currentPage: 1,
                  pageSize: 20,
                  sorts: `${sorterPram?.column?.dataIndex}%3A${sorterPram?.order === "descend" ? 'DESC' : 'ASC'}`
                }
              }));
              messageApi.open({
                key: 'updatable',
                type: 'loading',
                content: 'Loading...',
              });
              form.resetFields();
            }}
          />

        </div>

        <Button
          className='!bg-[#7A77DF] font-bold text-white flex items-center gap-1'
          type='link'
          onClick={() => navigate("them")}
        >
          <Add />Thêm
        </Button>

        <Modal
          title=""
          centered
          open={open}
          width={500}
          footer=''
          onCancel={handleCancel}
        >
          <div className='m-8 mt-10 text-center'>Bạn muốn xóa nhà cung cấp<br /> <strong>"{dataSelected.name}"</strong>?</div>

          <div className='flex justify-end gap-2 mb-0'>
            <Button
              className='bg-[#FF7742] font-bold text-white mr-2'
              onClick={() => {
                setDataSelected({});
                setOpen(false);
              }}
            // onClick={() => navigate(-1)}
            >
              Hủy
            </Button>
            <Button
              className='!bg-[#67CDBB] font-bold text-white'
              onClick={() => {
                //dispatch(deleteNhaCungCap({id:dataSelected.key}));
                setDataSelected({});
                setOpen(false);
              }}
            // onClick={() => navigate(-1)}
            >
              Xác nhận
            </Button>
          </div>
          {/* <Form form={form} labelCol={{ span: 10 }} className='mb-4' layout="vertical" onFinish={onFinish}>

                        <Form.Item className='flex justify-end gap-2 mb-0'>
                            <Button
                                className='bg-[#FF7742] font-bold text-white mr-2'
                                htmlType="reset"
                                onClick={() => setOpen(false)}
                            // onClick={() => navigate(-1)}
                            >
                                Hủy
                            </Button>
                            <Button
                                className='!bg-[#67CDBB] font-bold text-white'
                                htmlType="submit"
                                onClick={() => setOpen(false)}
                            // onClick={() => navigate(-1)}
                            >
                                Xác nhận
                            </Button>
                        </Form.Item>
                    </Form> */}
        </Modal>
      </div>

      <Table
        filterDropdownBg='#000'
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={listDonMuahangData}
        pagination={{
          total: pagination.totalRecord,
          // defaultPageSize: pagination.pageSize,
          pageSize: pagination.pageSize,
          current: pagination.currentPage,
          position: ['bottomRight'],
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        onChange={onChange}

      />
    </div>
  )
}

export default DonMuaHang