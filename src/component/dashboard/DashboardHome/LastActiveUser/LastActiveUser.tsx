import { getTimeAgo } from "@/utils/LastActiveFromate/LastActiveFormate";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LastActiveUser = ({ user }) => {
  const [timeAgo, setTimeAgo] = useState("1 minute ago");

  useEffect(() => {
    const interval = setInterval(() => {
      if (user) {
        setTimeAgo(getTimeAgo(user?.updatedAt));
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [user]);
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <Image
            className=" w-10 h-10 rounded-full object-cover"
            src={user?.userId?.image}
            width={50}
            height={50}
            alt=""
          />
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900 w-32">
          {user?.userId?.name}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900 w-32">
          {user?.userId?.role}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {timeAgo}
      </td>
    </tr>
  );
};

export default LastActiveUser;
