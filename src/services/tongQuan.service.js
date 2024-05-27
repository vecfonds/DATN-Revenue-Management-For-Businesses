import axios from "axios";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

// /api/v1/ctban/report-revenue-of-year/{year}
const getChartRevenueYear = ({ values }) => {

    return axios.get(`${API_URL}/ctban/report-revenue-of-year/${values?.year}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getChartRevenueMonth = ({ values }) => {

    return axios.get(`${API_URL}/ctban/report-revenue-of-month/${values?.year}/${values?.month}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};

const getChartRevenueQuarter = ({ values }) => {

    return axios.get(`${API_URL}/ctban/report-revenue-of-quarter/${values?.year}/${values?.quarter}`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};


const getChartProduct = ({ values }) => {
    return axios.post(`${API_URL}/ctban/report-by-product`,
        {
            ...values
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};



const tongQuanService = {
    getChartRevenueYear,
    getChartRevenueMonth,
    getChartRevenueQuarter,
    getChartProduct,
};

export default tongQuanService;