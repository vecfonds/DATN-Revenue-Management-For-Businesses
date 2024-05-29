import axios from "axios";
import authHeader from "./auth-header";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const getListChungTuBan = () => {
    return axios.get(`${API_URL}/ctban`,
        {
            headers: authHeader()
        });
};






const getListReportDCCN = () => {
    return axios.get(`${API_URL}/report-dccn`,
        {
            headers: authHeader()
        });
};

const getReportDCCN = ({ id }) => {
    return axios.get(`${API_URL}/report-dccn/${id}`,
        {
            headers: authHeader()
        });
};

const postReportDCCN = ({ values }) => {
    return axios.post(`${API_URL}/report-dccn`,
        {
            ...values
        },
        {
            headers: authHeader()
        });
};

const postReportDCCNRaw = ({ values }) => {
    return axios.post(`${API_URL}/report-dccn/raw`,
        {
            ...values
        },
        {
            headers: authHeader()
        });
};






const getListReportTHCN = () => {
    return axios.get(`${API_URL}/report-thcn`,
        {
            headers: authHeader()
        });
};

const getReportTHCN = ({ id }) => {
    return axios.get(`${API_URL}/report-thcn/${id}`,
        {
            headers: authHeader()
        });
};

const postReportTHCN = ({ values }) => {
    return axios.post(`${API_URL}/report-thcn`,
        {
            ...values
        },
        {
            headers: authHeader()
        });
};

const postReportTHCNRaw = ({ values }) => {
    return axios.post(`${API_URL}/report-thcn/raw`,
        {
            ...values
        },
        {
            headers: authHeader()
        });
};


const congNoService = {
    getListChungTuBan,

    getListReportDCCN,
    getReportDCCN,
    postReportDCCN,
    postReportDCCNRaw,

    getListReportTHCN,
    getReportTHCN,
    postReportTHCN,
    postReportTHCNRaw,
};

export default congNoService;