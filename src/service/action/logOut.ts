import { authKey } from "@/constance/authKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";
import { removeFromLocalStorage } from "./removeFromLocalStorage";

const logOutUser = async (router: AppRouterInstance) => {
  removeFromLocalStorage(authKey);
  deleteCookies(authKey);
  router.push("/login");
  router.refresh();
};

export default logOutUser;
