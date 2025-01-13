import Sidebar from "@/component/dashboard/Sideber/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" md:grid grid-cols-12">
      <div className=" col-span-3">
        <Sidebar />
      </div>
      <div className=" col-span-9 pt-16 z-[-10px]">
        {children}
      </div>
    </div>
  );
};

export default layout;
