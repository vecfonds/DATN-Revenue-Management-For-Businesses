import axios from "axios";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const getListChungTuBan = () => {
    return axios.get(`${API_URL}/ctban`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};






const getListReportDCCN = () => {
    return axios.get(`${API_URL}/report-dccn`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getReportDCCN = ({ id }) => {
    return axios.get(`${API_URL}/report-dccn/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postReportDCCN = ({ values }) => {
    return axios.post(`${API_URL}/report-dccn`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postReportDCCNRaw = ({ values }) => {
    return axios.post(`${API_URL}/report-dccn/raw`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};






const getListReportTHCN = () => {
    return axios.get(`${API_URL}/report-thcn`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getReportTHCN = ({ id }) => {
    return axios.get(`${API_URL}/report-thcn/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postReportTHCN = ({ values }) => {
    return axios.post(`${API_URL}/report-thcn`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const postReportTHCNRaw = ({ values }) => {
    return axios.post(`${API_URL}/report-thcn/raw`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
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