import { useDeleteProductMutation } from "@/redux/api/productApi";
import { useAppSelector } from "@/redux/hook";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const ProductTable = ({ item, refetch }: { item: any; refetch: any }) => {
  const { user } = useAppSelector((store) => store.auth);
  const [deleteProduct] = useDeleteProductMutation();
  const HandleToDelete = async (e) => {
    const res = await deleteProduct(e).unwrap();
    if (res?.success) {
      toast.success(res?.message);
      refetch();
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <Image
              className=" w-12 h-12 rounded-full"
              src={item?.image}
              width={50}
              height={50}
              alt=""
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{item?.name}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        ${item?.price}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {formatDate("2025-01-06T10:30:00.000Z")}
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <RiDeleteBin2Fill
          className=" cursor-pointer"
          onClick={() => HandleToDelete(item?._id)}
          size={20}
        />
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <Link href={`/dashboard/${user?.role}/update-product/${item?._id}`}>
          <MdOutlineSystemUpdateAlt size={20} />
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
        <Link
          href={`/shop/${item?._id}`}
          className="px-6 py-4 whitespace-no-wrap  text-blue-900 text-sm leading-5 "
        >
          <FaArrowRightFromBracket size={20} />
        </Link>
      </td>
    </tr>
  );
};

export default ProductTable;
