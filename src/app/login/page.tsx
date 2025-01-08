"use client";
import ZForm from "@/component/Form/ZForm";
import { defaultLoginUser } from "@/constance/constance";
import { setUser } from "@/redux/api/features/authSlice";
import { useLoginUserMutation } from "@/redux/api/userApi";
import { verifyToken } from "@/utils/verifyToken/verifyToken";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { authKey } from "@/constance/authKey";
import { useRouter } from "next/navigation";
import { Input } from "@/component/Form/Input";
const image = "https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg";
const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const HandleToLogin = async (values: FieldValues) => {
    try {
      const res: any = await loginUser(values).unwrap();
      const token = res?.data?.token;
      const user = verifyToken(res?.data?.token);
      if (token) {
        Cookies.set(authKey, token, { expires: 7 });
        localStorage.setItem(authKey, token);
        dispatch(setUser({ user: user, token: token }));
        toast.success(res?.message);
        router.push("/");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] p-4">
      <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12">
        <div className="bg-black border-b shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)]  w-48 h-24  p-1.5 absolute left-0 right-0 mx-auto -top-12  overflow-hidden ">
          <Link href="/">
            <img src={image} alt="logo" className="w-full inline-block" />
          </Link>
        </div>

        <ZForm
          onSubmit={HandleToLogin}
          defaultValues={defaultLoginUser}
          //   resolver={zodResolver(userSchema)}
        >
          <h3 className="text-xl  font-bold text-orange-500 mb-8 text-center pt-7">
            Login account
          </h3>
          <div className="space-y-4">
            <Input
              name="email"
              required
              type="text"
              label="Email"
              edit="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4  outline-orange-300 transition-all "
              placeholder="Enter email"
            />
            <Input
              name="password"
              required
              label="Password"
              type="password"
              edit="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4  outline-orange-300 transition-all"
              placeholder="Enter password"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
            >
              Login
            </button>
          </div>
          <p className="text-sm mt-8 text-center text-gray-200">
            If your crate account
            <Link
              href="/register"
              className="text-orange-500 font-semibold hover:underline ml-1"
            >
              Create account here
            </Link>
          </p>
        </ZForm>
      </div>
    </div>
  );
};

export default page;
