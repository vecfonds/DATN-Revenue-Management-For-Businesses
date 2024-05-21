import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import { useState } from "react";
import React from "react";
import { ColorModeContext, useMode } from "./utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FaBars } from "react-icons/fa";
import TongQuan from './page/TongQuan/TongQuan';
import MuaHang from './page/MuaHang/MuaHang';
import QuyTrinhMuaHang from './page/MuaHang/components/QuyTrinhMuaHang/QuyTrinhMuaHang';
import BanHang from './page/BanHang/BanHang';
import QuyTrinhBanHang from './page/BanHang/scenes/QuyTrinhBanHang/QuyTrinhBanHang';
import DonDatHang from './page/BanHang/scenes/DonDatHang/DonDatHang';
import ChungTuBanHang from './page/BanHang/scenes/ChungTuBanHang/ChungTuBanHang';
import HoaDonBanHang from './page/BanHang/scenes/HoaDonBanHang/HoaDonBanHang';
import ThuTienTheoHoaDon from './page/BanHang/scenes/ThuTienTheoHoaDon/ThuTienTheoHoaDon';
import TienMat from './page/TienMat/TienMat';
import TienGui from './page/TienGui/TienGui';
import CongNo from './page/CongNo/CongNo';
import BaoCao from './page/BaoCao/BaoCao';
import ThongBao from './page/ThongBao/ThongBao';
import HoTro from './page/HoTro/HoTro';
import CaiDat from './page/CaiDat/CaiDat';
import XemChungTuBanHang from "./page/BanHang/scenes/ChungTuBanHang/scenes/XemChungTuBanHang/XemChungTuBanHang";
import XemHoaDonBanHang from "./page/BanHang/scenes/HoaDonBanHang/scenes/XemHoaDonBanHang/XemHoaDonBanHang";
import TimKiemThuTien from "./page/BanHang/scenes/ThuTienTheoHoaDon/scenes/TimKiemThuTien";
import ThuTien from "./page/BanHang/scenes/ThuTienTheoHoaDon/scenes/ThuTien";
import DonMuaHang from './page/MuaHang/components/DonMuaHang/DonMuaHang';
import ListChungtu from './component/Table/table-chungtu';
import MuahangChungtu from "./component/Chungtu/Muahang/chungtu";
import TablePhieuChi from './component/Table/table-phieuchi';
import Login from "./page/Login/Login";
import Signup from "./page/Signup/Signup";
import DoiTuong from "./page/DoiTuong/DoiTuong";
import NhaCungCap from './page/DoiTuong/scenes/NhaCungCap/NhaCungCap';
import NhomNhaCungCap from './page/DoiTuong/scenes/NhomNhaCungCap/NhomNhaCungCap';
import KhachHang from './page/DoiTuong/scenes/KhachHang/KhachHang';
import NhomKhachHang from './page/DoiTuong/scenes/NhomKhachHang/NhomKhachHang';
import SanPham from './page/DoiTuong/scenes/SanPham/SanPham';
import TaiChinh from './page/DoiTuong/scenes/TaiChinh/TaiChinh';
import ThemNhaCungCap from "./page/DoiTuong/scenes/NhaCungCap/scenes/ThemNhaCungCap/ThemNhaCungCap";
import store from "./store/store";
import { Provider } from "react-redux";
import EditNhaCungCap from "./page/DoiTuong/scenes/NhaCungCap/scenes/EditNhaCungCap/EditNhaCungCap";
import EditNhomNhaCungCap from './page/DoiTuong/scenes/NhomNhaCungCap/scenes/EditNhomNhaCungCap/EditNhomNhaCungCap';
import EditNhomKhachHang from './page/DoiTuong/scenes/NhomKhachHang/scenes/EditNhomKhachHang/EditNhomKhachHang';
import ThemKhachHang from "./page/DoiTuong/scenes/KhachHang/scenes/ThemKhachHang/ThemKhachHang";
import EditKhachHang from "./page/DoiTuong/scenes/KhachHang/scenes/EditKhachHang/EditKhachHang";
import NhomSanPham from "./page/DoiTuong/scenes/NhomSanPham/NhomSanPham";
import EditNhomSanPham from "./page/DoiTuong/scenes/NhomSanPham/scenes/EditNhomSanPham/EditNhomSanPham";
import ThemSanPham from "./page/DoiTuong/scenes/SanPham/scenes/ThemSanPham/ThemSanPham";
import EditSanPham from "./page/DoiTuong/scenes/SanPham/scenes/EditSanPham/EditSanPham";
import EditDonDatHang from "./page/BanHang/scenes/DonDatHang/scenes/EditDonDatHang/EditDonDatHang";
import ThemChungTuBanHang from "./page/BanHang/scenes/ChungTuBanHang/scenes/ThemChungTuBanHang/ThemChungTuBanHang";
import TimKiemDonDatHang from "./page/BanHang/scenes/ChungTuBanHang/scenes/TimKiemDonDatHang/TimKiemDonDatHang";
import TimKiemHoaDonBanHang from "./page/BanHang/scenes/ThuTienTheoHoaDon/scenes/TimKiemHoaDonBanHang/TimKiemHoaDonBanHang";
import ThemThuTien from "./page/BanHang/scenes/ThuTienTheoHoaDon/scenes/ThemThuTien/ThemThuTien";
import TongHopNoPhaiThu from "./page/CongNo/scenes/TongHopNoPhaiThu/TongHopNoPhaiThu";
import ChiTietNoPhaiThu from "./page/CongNo/scenes/ChiTietNoPhaiThu/ChiTietNoPhaiThu";
import TaiKhoanNganHang from "./page/DoiTuong/scenes/TaiKhoanNganHang/TaiKhoanNganHang";
import Profile from "./page/Profile/Profile";
import InHoaDonBanHang from "./component/InHoaDonBanHang/InHoaDonBanHang";
import ThemTaiKhoanNganHang from "./page/DoiTuong/scenes/TaiKhoanNganHang/scenes/ThemTaiKhoanNganHang/ThemTaiKhoanNganHang";
import EditTaiKhoanNganHang from "./page/DoiTuong/scenes/TaiKhoanNganHang/scenes/EditTaiKhoanNganHang/EditTaiKhoanNganHang";
import XemPhieuThuTienMat from './page/BanHang/scenes/ThuTienTheoHoaDon/scenes/XemPhieuThuTienMat/XemPhieuThuTienMat';
import XemPhieuThuTienGui from "./page/BanHang/scenes/ThuTienTheoHoaDon/scenes/XemPhieuThuTienGui/XemPhieuThuTienGui";
import BaoCaoCongNo from "./page/CongNo/scenes/BaoCaoCongNo/BaoCaoCongNo";
import ReportDCCN from "./page/CongNo/scenes/BaoCaoCongNo/components/ReportDCCN/ReportDCCN";
import ReportTHCN from "./page/CongNo/scenes/BaoCaoCongNo/components/ReportTHCN/ReportTHCN";
import ChiTietDoanhThuNhanVien from "./page/BaoCao/scenes/ChiTietDoanhThuNhanVien/ChiTietDoanhThuNhanVien";
import TongHopDoanhThuNhanVien from './page/BaoCao/scenes/TongHopDoanhThuNhanVien/TongHopDoanhThuNhanVien';

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const handleIsCollapsed = (value) => {
    setIsCollapsed(value);
  };
  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={`app ${toggled ? "toggled" : ""}`}>
            {!isLogin && <Sidebar
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
              isCollapsed={isCollapsed}
              handleIsCollapsed={handleIsCollapsed}
            />}

            <main className="content">
              {!isLogin && <div
                className="btn-toggle"
                onClick={() => handleToggleSidebar(true)}
              >
                <FaBars size={20} />
              </div>}
              <Routes>
                <Route path="/dang-nhap" element={<Login />} />
                <Route path="/dang-ky" element={<Signup />} />
                <Route path="/" element={<TongQuan />} />
                <Route path="doi-tuong" element={<DoiTuong />}>
                  <Route path="nha-cung-cap" element={<NhaCungCap />} />
                  <Route path="nhom-nha-cung-cap" element={<NhomNhaCungCap />} />
                  <Route path="khach-hang" element={<KhachHang />} />
                  <Route path="nhom-khach-hang" element={<NhomKhachHang />} />
                  <Route path="san-pham" element={<SanPham />} />
                  <Route path="nhom-san-pham" element={<NhomSanPham />} />
                  <Route path="tai-chinh" element={<TaiChinh />} />
                  <Route path="tai-khoan-ngan-hang" element={<TaiKhoanNganHang />} />
                </Route>
                <Route path="doi-tuong/nha-cung-cap/them" element={<ThemNhaCungCap disabled={false} />} />
                <Route path="doi-tuong/nha-cung-cap/xem/:id" element={<EditNhaCungCap disabled={true} />} />
                <Route path="doi-tuong/nha-cung-cap/chinh-sua/:id" element={<EditNhaCungCap disabled={false} />} />

                <Route path="doi-tuong/nhom-nha-cung-cap/xem/:id" element={<EditNhomNhaCungCap disabled={true} />} />
                <Route path="doi-tuong/nhom-nha-cung-cap/chinh-sua/:id" element={<EditNhomNhaCungCap disabled={false} />} />

                <Route path="doi-tuong/khach-hang/them" element={<ThemKhachHang disabled={false} />} />
                <Route path="doi-tuong/khach-hang/xem/:id" element={<EditKhachHang disabled={true} />} />
                <Route path="doi-tuong/khach-hang/chinh-sua/:id" element={<EditKhachHang disabled={false} />} />

                <Route path="doi-tuong/nhom-khach-hang/xem/:id" element={<EditNhomKhachHang disabled={true} />} />
                <Route path="doi-tuong/nhom-khach-hang/chinh-sua/:id" element={<EditNhomKhachHang disabled={false} />} />

                <Route path="doi-tuong/san-pham/them" element={<ThemSanPham disabled={false} />} />
                <Route path="doi-tuong/san-pham/xem/:id" element={<EditSanPham disabled={true} />} />
                <Route path="doi-tuong/san-pham/chinh-sua/:id" element={<EditSanPham disabled={false} />} />

                <Route path="doi-tuong/nhom-san-pham/xem/:id" element={<EditNhomSanPham disabled={true} />} />
                <Route path="doi-tuong/nhom-san-pham/chinh-sua/:id" element={<EditNhomSanPham disabled={false} />} />

                <Route path="doi-tuong/tai-khoan-ngan-hang/them" element={<ThemTaiKhoanNganHang disabled={false} />} />
                <Route path="doi-tuong/tai-khoan-ngan-hang/xem/:id" element={<EditTaiKhoanNganHang disabled={true} />} />
                <Route path="doi-tuong/tai-khoan-ngan-hang/chinh-sua/:id" element={<EditTaiKhoanNganHang disabled={false} />} />



                <Route path="/mua-hang" element={<MuaHang />}>
                  <Route path="quy-trinh" element={<QuyTrinhMuaHang />} />
                  <Route path="don-mua-hang" element={<DonMuaHang />} />
                  <Route
                    path="chung-tu-mua-hang"
                    element={<ListChungtu />}
                  ></Route>
                  <Route
                    path="chung-tu-mua-hang/id"
                    element={<MuahangChungtu />}
                  />

                  <Route path="phieu-chi" element={<TablePhieuChi />} />
                  {/* <Route path="tra-tien" element={<Tratien />} /> */}
                </Route>
                <Route path="/ban-hang" element={<BanHang />}>
                  <Route path="quy-trinh" element={<QuyTrinhBanHang />} />
                  <Route path="don-dat-hang" element={<DonDatHang />} />
                  <Route path="chung-tu-ban-hang" element={<ChungTuBanHang />} />
                  <Route path="hoa-don-ban-hang" element={<HoaDonBanHang />} />
                  <Route
                    path="thu-tien-theo-hoa-don"
                    element={<ThuTienTheoHoaDon />}
                  />
                </Route>

                <Route path="ban-hang/don-dat-hang/xem/:id" element={<EditDonDatHang disabled={true} />} />

                <Route path="ban-hang/chung-tu-ban-hang/xem/:id" element={<XemChungTuBanHang disabled={true} />} />
                <Route path="ban-hang/chung-tu-ban-hang/chinh-sua/:id" element={<XemChungTuBanHang />} />
                <Route path="ban-hang/chung-tu-ban-hang/tim-kiem" element={<TimKiemDonDatHang />} />
                <Route path="ban-hang/chung-tu-ban-hang/them/:id" element={<ThemChungTuBanHang />} />

                <Route path="ban-hang/hoa-don-ban-hang/xem/:id" element={<XemHoaDonBanHang disabled={true} />} />
                {/* <Route path="ban-hang/hoa-don-ban-hang/in" element={<InHoaDonBanHang />} /> */}

                <Route path="ban-hang/thu-tien-theo-hoa-don/tim-kiem" element={<TimKiemHoaDonBanHang />} />


                <Route path="ban-hang/thu-tien-theo-hoa-don/timkiem/thutien" element={<ThemThuTien />} />
                <Route path="ban-hang/thu-tien-theo-hoa-don/CASH/:id" element={<XemPhieuThuTienMat disabled={true} />} />
                <Route path="ban-hang/thu-tien-theo-hoa-don/TRANSFER/:id" element={<XemPhieuThuTienGui disabled={true} />} />
                <Route path="/tien-mat" element={<TienMat />} />
                <Route path="/tien-gui" element={<TienGui />} />


                <Route path="/cong-no" element={<CongNo />}>
                  <Route path="tong-hop-no-phai-thu" element={<TongHopNoPhaiThu />} />
                  <Route path="chi-tiet-no-phai-thu" element={<ChiTietNoPhaiThu />} />
                  <Route path="bao-cao-da-luu" element={<BaoCaoCongNo />} />
                  <Route path="bao-cao-da-luu/DCCN/:id" element={<ReportDCCN />} />
                  <Route path="bao-cao-da-luu/THCN/:id" element={<ReportTHCN />} />
                </Route>


                <Route path="/bao-cao" element={<BaoCao />}>
                  <Route path="chi-tiet-doanh-thu-nhan-vien" element={<ChiTietDoanhThuNhanVien />} />
                  <Route path="tong-hop-doanh-thu-nhan-vien" element={<TongHopDoanhThuNhanVien />} />
                </Route>

                <Route path="/thong-bao" element={<ThongBao />} />
                <Route path="/ho-tro" element={<HoTro />} />
                <Route path="/cai-dat" element={<CaiDat />} />

                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default App;
