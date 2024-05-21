import axios from "axios";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const getListDonBanHang = () => {
    return axios.get(`${API_URL}/don-ban-hang`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getDonBanHang = ({ id }) => {
    return axios.get(`${API_URL}/don-ban-hang/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postDonBanHang = ({ values }) => {
    return axios.post(`${API_URL}/don-ban-hang`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};






const getListChungTuBan = () => {
    return axios.get(`${API_URL}/ctban`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getChungTuBan = ({ id }) => {
    return axios.get(`${API_URL}/ctban/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postChungTuBan = ({ values }) => {
    return axios.post(`${API_URL}/ctban`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};



const getListEmployeeWarehouseKeeper = () => {
    return axios.get(`${API_URL}/employee/warehouse-keeper`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};










const getListPhieuThuTienMat = () => {
    return axios.get(`${API_URL}/phieu-thu-tien-mat`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getPhieuThuTienMat = ({ id }) => {
    return axios.get(`${API_URL}/phieu-thu-tien-mat/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postPhieuThuTienMat = ({ values }) => {
    return axios.post(`${API_URL}/phieu-thu-tien-mat`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};







const getListPhieuThuTienGui = () => {
    return axios.get(`${API_URL}/phieu-thu-tien-gui`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getPhieuThuTienGui = ({ id }) => {
    return axios.get(`${API_URL}/phieu-thu-tien-gui/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postPhieuThuTienGui = ({ values }) => {
    return axios.post(`${API_URL}/phieu-thu-tien-gui`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};





const banHangService = {
    getListDonBanHang,
    getDonBanHang,
    postDonBanHang,

    getListChungTuBan,
    getChungTuBan,
    postChungTuBan,

    getListEmployeeWarehouseKeeper,

    getListPhieuThuTienMat,
    getPhieuThuTienMat,
    postPhieuThuTienMat,

    getListPhieuThuTienGui,
    getPhieuThuTienGui,
    postPhieuThuTienGui,

};

export default banHangService;