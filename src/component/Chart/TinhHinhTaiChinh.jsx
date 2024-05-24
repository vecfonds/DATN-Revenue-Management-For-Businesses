import React, { useEffect, useState } from 'react'
import { VND, selectTime } from '../../utils/func'
import { Select } from 'antd'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useDispatch, useSelector } from 'react-redux';
import { banHangSelector, clearState, getListPhieuThuTienGui, getListPhieuThuTienMat } from '../../store/features/banHangSlice';

const TinhHinhTaiChinh = () => {
    const dispatch = useDispatch();


    const [bank, setBank] = useState(0);
    const [cash, setCash] = useState(0);

    const {
        isSuccessGetListPhieuThuTienMat,
        isSuccessPostPhieuThuTienMat,

        isError,
        message,

        listPhieuThuTienMatData,

        isSuccessGetListPhieuThuTienGui,
        isSuccessPostPhieuThuTienGui,

        listPhieuThuTienGuiData,

        // phieuThuTienMatData,
    } = useSelector(banHangSelector);

    // useEffect(() => {
    //     dispatch(getListPhieuThuTienMat());
    //     dispatch(getListPhieuThuTienGui());
    // }, []);

    useEffect(() => {
        if (isSuccessGetListPhieuThuTienMat) {
            let tong = 0;
            listPhieuThuTienMatData.forEach(phieuThuTienMatData => {
                console.log("phieuThuTienMatData", phieuThuTienMatData)
                tong += phieuThuTienMatData?.chungTuCuaPhieuThu?.map(pt => pt.money).reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0)
            })

            setCash(tong);
            // dispatch(clearState());

        }
    }, [
        isSuccessGetListPhieuThuTienMat,
    ]);

    useEffect(() => {
        if (isSuccessGetListPhieuThuTienGui) {
            let tong = 0;
            listPhieuThuTienGuiData.forEach(phieuThuTienGuiData => {
                console.log("phieuThuTienGuiData", phieuThuTienGuiData)
                tong += phieuThuTienGuiData?.chungTuCuaPhieuThu?.map(pt => pt.money).reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0)
            })
            setBank(tong);
            // dispatch(clearState());
        }
    }, [
        isSuccessGetListPhieuThuTienGui,
    ]);

    const handleChange = (value) => {
        if (value === "current") {
            let cashTotal = 0;
            listPhieuThuTienMatData.forEach(phieuThuTienMatData => {
                console.log("phieuThuTienMatData", phieuThuTienMatData)
                cashTotal += phieuThuTienMatData?.chungTuCuaPhieuThu?.map(pt => pt.money).reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0)
            })

            setCash(cashTotal);


            let bankTotal = 0;
            listPhieuThuTienGuiData.forEach(phieuThuTienGuiData => {
                console.log("phieuThuTienGuiData", phieuThuTienGuiData)
                bankTotal += phieuThuTienGuiData?.chungTuCuaPhieuThu?.map(pt => pt.money).reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0)
            })
            setBank(bankTotal);
        }
        else {
            const timeRange = selectTime(value);

            const dataCash = listPhieuThuTienMatData?.filter(phieuThuTienMatData => new Date(phieuThuTienMatData?.createdAt) > new Date(timeRange.startDate) && new Date(phieuThuTienMatData?.createdAt) < new Date(timeRange.endDate))
            let cashTotal = 0;
            dataCash.forEach(phieuThuTienMatData => {
                console.log("phieuThuTienMatData", phieuThuTienMatData)
                cashTotal += phieuThuTienMatData?.chungTuCuaPhieuThu?.map(pt => pt.money).reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0)
            })

            setCash(cashTotal);

            const dataBank = listPhieuThuTienGuiData?.filter(phieuThuTienGuiData => new Date(phieuThuTienGuiData?.createdAt) > new Date(timeRange.startDate) && new Date(phieuThuTienGuiData?.createdAt) < new Date(timeRange.endDate))

            let bankTotal = 0;
            dataBank.forEach(phieuThuTienGuiData => {
                console.log("phieuThuTienGuiData", phieuThuTienGuiData)
                bankTotal += phieuThuTienGuiData?.chungTuCuaPhieuThu?.map(pt => pt.money).reduce((total, currentValue) => {
                    return total + currentValue;
                }, 0)
            })
            setBank(bankTotal);
        }
    }
    return (
        <div>
            <p className="font-bold text-xl mt-5">Tình hình tài chính</p>
            <Select
                defaultValue={'current'}
                style={{
                    width: 120,

                }}
                className="bg-[#FFF6D8]"
                onChange={handleChange}
                options={[
                    {
                        value: 'current',
                        label: 'Hiện tại',
                    },
                    {
                        value: 'thisWeek',
                        label: 'Tuần này',
                    },
                    {
                        value: 'lastWeek',
                        label: 'Tuần trước',
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
                    {
                        value: 'thisYear',
                        label: 'Năm này',
                    },
                    {
                        value: 'lastYear',
                        label: 'Năm trước',
                    },
                ]}
            />
            <div className="border border-gray-300 w-[600px] p-5 text-xl shadow-xl rounded-lg">
                <div className='w-[560px]'>
                    <div className='flex justify-between'>
                        <p>Tổng tiền đã thu</p>
                        <p className="font-bold">
                            {
                                VND.format(bank + cash)
                            }
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <p className="pl-8">
                            < LocalAtmIcon /> Tiền mặt
                        </p>
                        <p className="font-bold">
                            {
                                VND.format(cash)
                            }
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <p className="pl-8">
                            <AccountBalanceIcon /> Tiền gửi
                        </p>
                        <p className="font-bold">
                            {
                                VND.format(bank)
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TinhHinhTaiChinh