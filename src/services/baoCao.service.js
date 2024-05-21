import axios from "axios";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;


const getListReportDTBH = () => {
    return axios.get(`${API_URL}/report-dtbh`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getReportDTBH = ({ id }) => {
    return axios.get(`${API_URL}/report-dtbh/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postReportDTBH = ({ values }) => {
    return axios.post(`${API_URL}/report-dtbh`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postReportDTBHRaw = ({ values }) => {
    return axios.post(`${API_URL}/report-dtbh/raw`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};



const getListSalesPerson = () => {
    return axios.get(`${API_URL}/employee/salesperson`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};



const baoCaoService = {
    getListReportDTBH,
    getReportDTBH,
    postReportDTBH,
    postReportDTBHRaw,

    getListSalesPerson,
};

export default baoCaoService;