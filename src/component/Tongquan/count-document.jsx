import React, { useEffect } from "react";
import { Flex } from "antd";
import { DiffTwoTone, SnippetsTwoTone, CopyTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { banHangSelector, getListChungTuBan, getListDonBanHang, getListPhieuThuTienGui, getListPhieuThuTienMat } from "../../store/features/banHangSlice";

const initialItems = [
  {
    name: "Số đơn hàng",
    icon: <DiffTwoTone style={{ fontSize: "30px" }} />,
    backgroundColor: "#D4EAC7",
    number: 0,
  },
  {
    name: "Số chứng từ",
    icon: <SnippetsTwoTone style={{ fontSize: "30px" }} />,
    backgroundColor: "#C7EAF4",
    number: 0,
  },
  {
    name: "Số phiếu thu",
    icon: <CopyTwoTone style={{ fontSize: "30px" }} />,
    backgroundColor: "#F4C7E1",
    number: 0,
  },
];

function Countdocument() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListDonBanHang());
    dispatch(getListChungTuBan());
    dispatch(getListPhieuThuTienMat());
    dispatch(getListPhieuThuTienGui());
  }, []);

  const {
    listDonBanHangData,
  } = useSelector(banHangSelector);

  const {
    listChungTuBanData,
  } = useSelector(banHangSelector);

  const {
    listPhieuThuTienMatData,
    listPhieuThuTienGuiData,
    isSuccessGetListPhieuThuTienMat,
    isSuccessGetListPhieuThuTienGui,
  } = useSelector(banHangSelector);


  useEffect(() => {
    if (listDonBanHangData.length) {
      initialItems[0].number = listDonBanHangData.length;
    }
  }, [listDonBanHangData]);

  useEffect(() => {
    if (listChungTuBanData.length) {
      initialItems[1].number = listChungTuBanData.length;
    }
  }, [listChungTuBanData]);

  useEffect(() => {
    if (isSuccessGetListPhieuThuTienMat && isSuccessGetListPhieuThuTienGui) {
      initialItems[2].number = listPhieuThuTienMatData.length + listPhieuThuTienGuiData.length;
    }
  }, [isSuccessGetListPhieuThuTienMat, isSuccessGetListPhieuThuTienGui]);

  return (
    <Flex gap={50}>
      {initialItems.map((item) => {
        return (
          <Flex
            gap={20}
            align="center"
            justify="center"
            className="p-5 rounded-md"
            style={{ backgroundColor: item.backgroundColor }}
          >
            <div>{item.icon}</div>
            <Flex vertical gap={10}>
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-lg">{item.number}</p>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default Countdocument;
