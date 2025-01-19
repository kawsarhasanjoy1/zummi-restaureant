"use client";
import FileUpload from "@/component/Form/FileUpload";
import { Input } from "@/component/Form/Input";
import ZForm from "@/component/Form/ZForm";
import { defaultUser } from "@/constance/constance";
import useUploadImage from "@/hooks/useUploadImage";
import { useCreateUserMutation } from "@/redux/api/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
const image = "https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg";
const page = () => {
  const [createUser] = useCreateUserMutation();
  const router = useRouter();
  const HandleToRegister = async (e: FieldValues) => {
    try {
      const image = await useUploadImage(e?.image);
      if (image?.id) {
        e.image = image?.display_url;
        const res = (await createUser(e)) as any;

        if (res?.data?.success) {
          toast.success(res?.data?.message);
          router.push("/login");
        } else {
          toast.error(res?.error?.data?.message);
        }
      }
    } catch (err: any) {
      toast.error(err?.message);
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
          onSubmit={HandleToRegister}
          defaultValues={defaultUser}
          //   resolver={zodResolver(userSchema)}
        >
          <h3 className="text-xl  font-bold text-orange-500 mb-8 text-center pt-7">
            Create account
          </h3>
          <div className="space-y-4">
            <Input
              label="Name"
              name="name"
              type="text"
              edit="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4  outline-orange-300 transition-all"
              placeholder="Enter name"
            />
            <Input
              name="email"
              type="text"
              label="Email"
              edit="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4  outline-orange-300 transition-all "
              placeholder="Enter email"
            />
            <Input
              name="password"
              label="Password"
              type="password"
              edit="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4  outline-orange-300 transition-all"
              placeholder="Enter password"
            />

            <FileUpload name="image" label="Image" type="file" edit=" h-10" />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-sm mt-8 text-center text-gray-200">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-500 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </ZForm>
      </div>
    </div>
  );
};

export default page;
