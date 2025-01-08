import { authKey } from "@/constance/authKey";
import { deleteCookies } from "./deleteCookies";
import { removeFromLocalStorage } from "./removeFromLocalStorage";
import { useRouter } from "next/navigation";

const logOutUser = async () => {
  const router = useRouter()
  deleteCookies(authKey);
  removeFromLocalStorage(authKey);
  router.push("/login");
  router.refresh();
};

export default logOutUser;
