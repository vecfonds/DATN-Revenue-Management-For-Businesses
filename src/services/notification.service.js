import axios from "axios";
const API_URL = `${process.env.REACT_APP_SERVER_URL}`;
export const notification = {
  getAll(params) {
    return axios.get(`${API_URL}/announcement`, { params: params });
  },
  updateResolve(id) {
    return axios.patch(`${API_URL}/announcement/${id}`, {
      isResolved: true,
    });
  },
  updateReadStatus(id) {
    return axios.patch(`${API_URL}/announcement/${id}`, {
      isRead: true,
    });
  },
};
