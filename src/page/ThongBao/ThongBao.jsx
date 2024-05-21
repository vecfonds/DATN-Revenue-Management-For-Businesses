import React, { useState, useEffect } from "react";
import { Flex, Select } from "antd";
import Notification from "../../component/notification";
import { notification } from "./../../services/notification.service";

const ThongBao = () => {
  const [notificationAll, setNotificationAll] = useState([]);
  const [type, setType] = useState(null);
  const [isResolved, setIsResolved] = useState(false);
  const [isRead, setIsRead] = useState(null);
  const getAllNotification = async () => {
    try {
      const params = {
        ...(type !== null && { type: type }),
        ...(isResolved !== null && { isResolved: isResolved }),
        ...(isRead !== null && { isRead: isRead }),
      };
      const res = await notification.getAll(params);
      if (res.data) {
        console.log(res.data?.result?.data);
        setNotificationAll(res.data?.result?.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllNotification();
  }, [type, isResolved, isRead]);
  return (
    <div className="ml-5 ">
      <h1 className="font-bold text-3xl mb-3">Thông báo</h1>
      <Flex gap={30} className="mb-5">
        <Select
          value={type}
          style={{
            width: 120,
          }}
          onChange={(value) => setType(value)}
          options={[
            {
              value: null,
              label: "Tất cả",
            },
            {
              value: "THU",
              label: "Hóa đơn",
            },
            {
              value: "BAN_HANG",
              label: "Đơn đặt hàng",
            },
          ]}
        />

        <Select
          value={isResolved}
          defaultValue={false}
          style={{
            width: 120,
          }}
          onChange={(value) => setIsResolved(value)}
          options={[
            {
              value: null,
              label: "Tất cả",
            },
            {
              value: false,
              label: "Chưa xử lý",
            },
            {
              value: true,
              label: "Đã xử lý",
            },
          ]}
        />
        <Select
          value={isRead}
          style={{
            width: 120,
          }}
          onChange={(value) => setIsRead(value)}
          options={[
            {
              value: null,
              label: "Tất cả",
            },
            {
              value: false,
              label: "Chưa đọc",
            },
            {
              value: true,
              label: "Đã đọc",
            },
          ]}
        />
      </Flex>
      <Flex vertical gap={20}>
        {notificationAll.map((notification, index) => {
          return (
            // console.log(notification.message)
            <Notification
              type={notification.type}
              id={notification.id}
              entityId={notification.entityId}
              resolved={notification.isResolved}
              message={notification.message}
              className="!w-3/4 cursor-pointer"
              key={index}
            />
          );
        })}
      </Flex>
    </div>
  );
};

export default ThongBao;
