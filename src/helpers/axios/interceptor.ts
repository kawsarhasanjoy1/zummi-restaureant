import { authKey } from "@/constance/authKey";
import { logOut } from "@/redux/api/features/authSlice";
import logOutUser from "@/service/action/logOut";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

axios.interceptors.request.use(
  async function (config) {
    const token = await getTokenFromLocalStorage(authKey);
    if (token) {
      config.headers.Authorization = token as string;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      await dispatch(logOut());
      await logOutUser(router);
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export { instance };
