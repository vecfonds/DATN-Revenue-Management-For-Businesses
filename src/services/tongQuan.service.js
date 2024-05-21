import axios from "axios";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const getChartRevenue = () => {
    return axios.get(`${API_URL}/ctban/report-revenue`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};


const getChartProduct = () => {
    return axios.get(`${API_URL}/ctban/report-by-product`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        });
};



const tongQuanService = {
    getChartRevenue,
    getChartProduct,
};

export default tongQuanService;