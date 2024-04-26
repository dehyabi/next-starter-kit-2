import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "X-App-Key": process.env.X_APP_KEY,
  },
  withCredentials: true,
});

export default axios;
