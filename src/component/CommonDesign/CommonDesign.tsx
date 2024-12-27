import React, { ReactNode } from 'react';
import Image from "next/image";
const CommonDesign = ({children}: {children: ReactNode}) => {
    return (
        <div className=" flex items-center ">
        <Image
          width={20}
          height={20}
          alt=""
          src={"	https://html.rrdevs.net/zummi/assets/imgs/section-title/banner-left.svg".trim()}
        />
        <h4 className=" bg-[#4d4145] py-1 uppercase font-semibold">
          {children}
        </h4>
        <Image
          width={20}
          height={20}
          alt=""
          src={"	https://html.rrdevs.net/zummi/assets/imgs/section-title/banner-right.svg".trim()}
        />
      </div>
    );
};

export default CommonDesign;