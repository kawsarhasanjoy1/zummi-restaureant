import { authKey } from "@/constance/authKey";
import { deleteCookies } from "./deleteCookies";
import { removeFromLocalStorage } from "./removeFromLocalStorage";
import { redirect } from "next/navigation";

const logOutUser = async () => {
  deleteCookies(authKey);
  removeFromLocalStorage(authKey);
  redirect('/login')
};

export default logOutUser;
