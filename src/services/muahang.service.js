import axios from "axios";
import request from "../api/axious";
// import authHeader from "./auth-header";

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

const getListDonMuahang = ({ requestParam }) => {
  // if (requestParam) {
  //   requestParam = {
  //     currentPage: 1,
  //     pageSize: 20,
  //   }
  // }
  console.log("requestParam", requestParam)
  if(requestParam.sorts!=='undefined%3AASC'){
    return axios.get(`${API_URL}/don-mua-hang?currentPage=${requestParam.currentPage}&pageSize=${requestParam.pageSize}&sorts=${requestParam.sorts}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return axios.get(`${API_URL}/don-mua-hang?currentPage=${requestParam.currentPage}&pageSize=${requestParam.pageSize}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// const login = (phoneNumber, password) => {
//   return axios
//     .post(`${API_URL}/login`, {
//       phoneNumber, password
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };

// const logout = () => {
//   return axios.post(`${API_URL}/logout`,
//       {
//       },
//       {
//           headers: authHeader()
//       },
//   );
// };

const muahangService = {
  getListDonMuahang,
};

export default muahangService;
