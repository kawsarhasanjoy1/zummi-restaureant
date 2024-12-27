import Footer from "@/component/Shared/Footer";
import Header from "@/component/Shared/Header";

import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
