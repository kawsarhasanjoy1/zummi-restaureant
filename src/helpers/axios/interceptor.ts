
import { authKey } from "@/constance/authKey";
import { getCookieToken } from "@/service/action/getCookeiToken";
import logOutUser from "@/service/action/logOut";
import axios from "axios";


const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Request interceptor to add authorization token
instance.interceptors.request.use(
  async function (config) {
    const token = await getCookieToken(authKey);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const status = error.response?.status;
    if (status === 401 || status === 403) {
      logOutUser(authKey)
    }

    // Log the error message
    const errorMessage = error.response?.data || error.message || 'Unknown error';
    console.error(errorMessage);

    return Promise.reject(error); // Reject the promise to propagate the error
  }
);

export { instance };
