import { authKey } from "@/constance/authKey";
import { deleteCookies } from "./deleteCookies";
import { removeFromLocalStorage } from "./removeFromLocalStorage";

const logOutUser = async (router: any) => {
  deleteCookies(authKey);
  removeFromLocalStorage(authKey);
  router.push("/login");
  router.refresh();
};

export default logOutUser;
