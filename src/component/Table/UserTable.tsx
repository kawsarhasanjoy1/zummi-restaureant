import { useDeleteUserMutation, useUpRoleMutation } from "@/redux/api/userApi";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import Image from "next/image";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const UserTable = ({
  user,
  refetch,
}: {
  user: Record<string, any>;
  refetch: any;
}) => {
  const [deleteUser] = useDeleteUserMutation();
  const HandleToDelete = async (e) => {
    const res = await deleteUser(e).unwrap();
    res;
    if (res?.success) {
      toast.success(res?.message);
    }
  };
  const [updateRole] = useUpRoleMutation();
  const HandleToAdmin = async (user) => {
    const role = user?.role == "user" ? "admin" : "user";
    const id = user?._id;
    if (user?.role !== "chef" || user?.role !== "superAdmin") {
      const res = await updateRole({ id, role });
      
      if (res?.data?.success) {
        toast.success("user role updated successful");
        refetch();
      }
    } else {
      toast.error("this role will be only create");
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <Image
              className=" w-12 h-12 rounded-full"
              src={user?.image}
              width={50}
              height={50}
              alt=""
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{user?.name}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {user?.email}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {formatDate(user?.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <button
          onClick={() => HandleToAdmin(user)}
          className={`border flex justify-center items-center px-4 ${
            user?.role == "user"
              ? "bg-red-200 opacity-80 text-black rounded-full"
              : "bg-green-200 opacity-80 text-black rounded-full"
          }`}
        >
          {user?.role}
        </button>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <RiDeleteBin2Fill
          className=" cursor-pointer"
          onClick={() => HandleToDelete(user?._id)}
          size={20}
        />
      </td>
    </tr>
  );
};

export default UserTable;
