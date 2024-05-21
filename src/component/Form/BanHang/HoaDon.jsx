import React from 'react'
import { Form, Input, DatePicker, Flex, Table, Select } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useNavigate } from 'react-router-dom';

const dateFormat = "YYYY-MM-DD";
dayjs.extend(customParseFormat);


const HoaDon = ({ components, dataSource, columns, form, disabled, onFinish, chungTuBanData, isHoaDon, isAddChungTu }) => {
    const navigate = useNavigate();

    const columsFilter = columns
    // .filter(item=> (item.dataIndex!=="phantramthuegtgt"&&item.dataIndex!=="tienthuegtgt"))

    return (
        <div
        >
            <Flex gap={100} justify='center' className='w-[100%] align-left'>
                <Flex vertical gap={5} className='w-[50%]'>
                    <Form.Item
                        label="Tên khách hàng"
                        name='namecCustomer'
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <Input
                            disabled={true}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Mã số thuế"
                        name='taxCode'
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <Input
                            disabled={true}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ"
                        name='address'
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <Input
                            disabled={true}
                        />
                    </Form.Item>

                    {/* <Form.Item
                            label="Mã số thuế"
                            name="code"
                        >
                            <Input
                                disabled={disabled}
                            />
                        </Form.Item> */}

                    {/* <Form.Item
                        label="Người nhận hàng"
                        name="namecCustomer"
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <Input
                            disabled={disabled}
                        />
                    </Form.Item> */}


                    <Form.Item
                        label="Nhân viên bán hàng"
                        name='salesperson'
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <Input
                            disabled={true}

                        />
                    </Form.Item>
                </Flex>

                <Flex vertical gap={5} className='w-[50%]'>
                    <Form.Item
                        label="Điều khoản thanh toán"
                        name='dieukhoanthanhtoan'
                    >
                        <Input
                            disabled={true}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Chiết khấu thương mại"
                        name='chietkhauthuongmai'
                    >
                        <Input
                            disabled={true}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Ngày hạch toán"
                        name="createdAt"
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <DatePicker
                            className='!w-full'
                            disabled={true}
                        // format={dateFormat}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Hạn thanh toán"
                        name="paymentTerm"
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <DatePicker
                            className='!w-full'
                            disabled={disabled}
                        // format={dateFormat}
                        />
                    </Form.Item>

                    {/* <Form.Item
                        label="Tình trạng thanh toán"
                        name="paymentStatus"
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <Select
                            disabled={true}
                        >
                            <Select.Option value={"NOT_PAID"}>Chưa thanh toán</Select.Option>
                            <Select.Option value={"BEING_PAID"}>Thanh toán 1 phần</Select.Option>
                            <Select.Option value={"PAID"}>Đã thanh toán</Select.Option>
                        </Select>
                    </Form.Item> */}

                    {/* <Form.Item
                        label="Ngày giao hàng"
                        name="deliveryDate"
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <DatePicker
                            className='!w-full'
                        // format={dateFormat}
                        />
                    </Form.Item> */}

                    {/* <Form.Item
                        label="Phương thức thanh toán"
                        name='paymentMethod'
                        rules={[
                            {
                                required: true,
                                message: 'Trường này là bắt buộc!',
                            },
                        ]}
                    >
                        <Select
                            disabled={disabled}
                        >
                            <Select.Option value={"CASH"}>Tiền mặt</Select.Option>
                            <Select.Option value={"TRANSFER"}>Tiền gửi</Select.Option>
                        </Select>
                    </Form.Item>

                    {Form.useWatch('paymentMethod', form) === "TRANSFER" &&
                        <Form.Item
                            label="Ngân hàng"
                            name='bankName'
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường này là bắt buộc!',
                                },
                            ]}
                        >
                            <Input
                                disabled={disabled}

                            />
                        </Form.Item>
                    }

                    {Form.useWatch('paymentMethod', form) === "TRANSFER" &&
                        <Form.Item
                            label="Chủ tài khoản"
                            name='accountName'
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường này là bắt buộc!',
                                },
                            ]}
                        >
                            <Input
                                disabled={disabled}

                            />
                        </Form.Item>}
                    {Form.useWatch('paymentMethod', form) === "TRANSFER" &&
                        <Form.Item
                            label="Số tài khoản"
                            name='accountNumber'
                            rules={[
                                {
                                    required: true,
                                    message: 'Trường này là bắt buộc!',
                                },
                            ]}
                        >
                            <Input
                                disabled={disabled}

                            />
                        </Form.Item>
                    } */}
                </Flex>

            </Flex>

            <div className='flex justify-start flex-col mb-8'>
                <div className='min-w-[300px]'>
                    {!isAddChungTu && <div className='flex'>
                        <p>Tham chiếu đến đơn bán hàng:</p>
                        <p>
                            <span
                                className='px-2 text-[#1DA1F2] font-medium	cursor-pointer'
                                onClick={() => navigate(`/ban-hang/don-dat-hang/xem/${chungTuBanData?.donBanHang?.id}`, { state: { id: chungTuBanData?.donBanHang?.id } })}
                            >{chungTuBanData?.donBanHang?.id}</span>
                        </p>
                    </div>}
                </div>

                <div className='min-w-[300px]'>
                    {isHoaDon && <div className='flex'>
                        <p>Tham chiếu đến chứng từ bán hàng:</p>
                        <p>
                            <span
                                className='px-2 text-[#1DA1F2] font-medium	cursor-pointer'
                                onClick={() => navigate(`/ban-hang/chung-tu-ban-hang/xem/${chungTuBanData?.id}`, { state: { id: chungTuBanData?.id } })}
                            >{chungTuBanData?.id}</span>
                        </p>
                    </div>}
                </div>

                <div className='min-w-[300px]'>
                    {(chungTuBanData?.phieuThuTienMat?.length !== 0 || chungTuBanData?.phieuThuTienGui?.length !== 0) && <div className='flex'>
                        <p>Tham chiếu đến phiếu thu:</p>
                        <p>
                            {
                                chungTuBanData?.phieuThuTienMat?.map(ct => <span
                                    className='px-2 text-[#1DA1F2] font-medium	cursor-pointer'
                                    onClick={() => navigate(`/ban-hang/thu-tien-theo-hoa-don/xem/${ct.id}`, { state: { id: ct.id } })}
                                >{ct.id}</span>)
                            }
                            {
                                chungTuBanData?.phieuThuTienGui?.map(ct => <span
                                    className='px-2 text-[#1DA1F2] font-medium	cursor-pointer'
                                    onClick={() => navigate(`/ban-hang/thu-tien-theo-hoa-don/xem/${ct.id}`, { state: { id: ct.id } })}
                                >{ct.id}</span>)
                            }
                        </p>
                    </div>}
                </div>
            </div>

            <div>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columsFilter}
                    pagination={false}
                />
            </div>
        </div>
    )
}

export default HoaDon