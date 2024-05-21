import React, { useContext, useEffect, useRef, useState } from 'react'
import { Tabs, Form, Input, Flex, Table, Button, InputNumber, Select, Checkbox, DatePicker, Typography, Upload, Image } from "antd";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { banHangSelector, clearState, getChungTuBan, postChungTuBan } from '../../store/features/banHangSlice';
import HoaDon from '../../component/Form/BanHang/HoaDon';
import { VND } from '../../utils/func';
import { doiTuongSelector } from '../../store/features/doiTuongSilce';
import moment from 'moment';


const dateFormat = "YYYY-MM-DD";
dayjs.extend(customParseFormat);

const Profile = ({ disabled = false }) => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params)
  console.log("params.id", params.id)
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const {
    // donBanHangData,
    // isSuccessGetDonBanHang,
    listHoaDonSelected

  } = useSelector(banHangSelector);

  console.log("listHoaDonSelected", listHoaDonSelected);

  const [dataHoaDonSelected, setDataHoaDonSelected] = useState([]);

  const {
    listBankAccountData,
    listAccountantData,
    listSalespersonData,
  } = useSelector(doiTuongSelector);

  useEffect(() => {
    // dispatch(getListBankAccount());
    // dispatch(getListAccountant());
    // dispatch(getListSalesperson());
  }, []);


  useEffect(() => {


    if (listHoaDonSelected.length !== 0) {
      const convertData = listHoaDonSelected.map(hoaDon => {
        return {
          ...hoaDon,
          sothanhtoan: hoaDon.chuathu
        }
      })

      setDataHoaDonSelected(convertData);




      const data = {
        // ...listHoaDonSelected[0].donBanHang,
        // receiver: donBanHangData.namecCustomer,
        paymentMethod: "CASH",
        address: listHoaDonSelected[0].donBanHang.customer.address,
        salespersonID: listHoaDonSelected[0].donBanHang.salesperson.id,
        submitter: listHoaDonSelected[0].donBanHang.customer.name,
        bankAccountId: "",
        createdAt: dayjs(new Date().toISOString().slice(0, 10), dateFormat),
        receiveDate: dayjs(new Date().toISOString().slice(0, 10), dateFormat),
        taxCode: listHoaDonSelected[0].donBanHang.customer.taxCode,
        namecCustomer: listHoaDonSelected[0].donBanHang.customer.name
        // paymentTerm: dayjs(new Date().toISOString().slice(0, 10), dateFormat),
        // deliveryDate: dayjs(new Date().toISOString().slice(0, 10), dateFormat)
      };


      console.log("dataa", data)

      form.setFieldsValue({
        ...data
      });
    }
  }, [listHoaDonSelected]);




  //Avatar

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {/* <PlusOutlined /> */}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  //End
  const onFinish = (values) => {
    // values.createdAt = `${values.createdAt.$y}-${values.createdAt.$M + 1}-${values.createdAt.$D}`;
    // values.deliveryDate = `${values.deliveryDate.$y}-${values.deliveryDate.$M + 1}-${values.deliveryDate.$D}`;
    console.log('Received values of form: ', values);
    console.log(dataHoaDonSelected);

    function formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    }

    if (values.paymentMethod === "CASH") {
      let dataConvert = {
        "receiveDate": formatDate(values.receiveDate.$d),
        "content": "Nội dung",
        "submitter": values.submitter,
        "customerId": dataHoaDonSelected[0].donBanHang.customer.id,
        "salespersonID": values.salespersonID,
        "chungTuDto": dataHoaDonSelected.map(hoaDon => {
          return {
            "money": hoaDon.sothanhtoan,
            "content": hoaDon.content,
            "ctbanId": hoaDon.id
          }
        })
      }

      console.log("dataConvert", dataConvert)

      // dispatch(postPhieuThuTienMat({ values: dataConvert }));
      navigate(-2);

    }
    else {
      let dataConvert = {
        "receiveDate": formatDate(values.receiveDate.$d),
        "content": "Nội dung",
        "submitter": values.submitter,
        "customerId": dataHoaDonSelected[0].donBanHang.customer.id,
        "salespersonID": values.salespersonID,
        "chungTuDto": dataHoaDonSelected.map(hoaDon => {
          return {
            "money": hoaDon.sothanhtoan,
            "content": hoaDon.content,
            "ctbanId": hoaDon.id
          }
        }),
        "bankAccountId": values.bankAccountId
      }

      console.log("dataConvert", dataConvert)

      // dispatch(postPhieuThuTienGui({ values: dataConvert }));
      navigate(-2);
    }

  };

  return (
    <div className="m-6">
      <h1 className="font-bold text-[32px] mb-6 text-center">
        Thông tin cá nhân
      </h1>


      <div className='w-[100px] h-[100px] mx-auto my-0 mb-8'>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: 'none',
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}
      </div>

      <Form
        form={form}
        // labelCol={{ span: 10 }}
        className='mb-4'
        labelCol={{
          flex: '150px',
        }}
        labelAlign="left"
        labelWrap
        onFinish={onFinish}
      >


        <Flex gap={100} justify='center' className='w-[100%] items-center flex-col'>
          <Flex vertical gap={5} className='w-[50%]'>
            <Form.Item
              label="Họ và tên"
              name='name'
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
                disabled={disabled}
              />
            </Form.Item>


            <Form.Item
              label="Số điện thoại"
              name='phone'
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

            <Form.Item
              label="Email"
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Trường này là bắt buộc!',
                },
              ]}
            >
              <Input
                placeholder="abc@gmail.com"
                disabled={disabled}

              />
            </Form.Item>

            {/* <Form.Item
              label="Vị trí"
              name='role'
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


            {disabled ?
              <div className='w-full flex justify-end mt-6 mb-0'>
                <Button
                  className='bg-[#FF7742] font-bold text-white'
                  type='link'
                  onClick={() => navigate(-1)}
                >
                  Thoát
                </Button>
              </div> :
              <Form.Item className='flex justify-end gap-2 mt-6 mb-0'>

                {/* <Button
                  className='bg-[#FF7742] font-bold text-white mr-2'
                  htmlType="reset"
                  onClick={() => navigate(-1)}
                >
                  Hủy
                </Button> */}
                <Button
                  className='!bg-[#67CDBB] font-bold text-white'
                  htmlType="submit"
                // onClick={() => navigate(-1)}
                >
                  Cập nhật
                </Button>
              </Form.Item>
            }
          </Flex>

        </Flex>



      </Form>
    </div>
  )
}
export default Profile