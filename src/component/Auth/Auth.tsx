import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut } from "@/redux/api/features/authSlice";
import logOutUser from "@/service/action/logOut";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTokenFromLocalStorage } from "@/service/action/getTokenFromLocalStorage";
import { authKey } from "@/constance/authKey";

const Auth = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.auth);
  const token = getTokenFromLocalStorage(authKey) as string;
  // Handle logout
  const HandleToLogOut = () => {
    dispatch(logOut());
    logOutUser();
  };

  useEffect(() => {
    const fetchToken = async () => {
      setLoading(false);
    };

    fetchToken();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div>
      {user || token ? (
        <button
          onClick={HandleToLogOut}
          className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-[14px]"
        >
          LogOut
        </button>
      ) : (
        <Link
          href={"/register"}
          className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-[14px]"
        >
          Signup
        </Link>
      )}
    </div>
  );
};

export default Auth;
