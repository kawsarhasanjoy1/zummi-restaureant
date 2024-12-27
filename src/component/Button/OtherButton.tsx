import React, { ReactNode } from "react";

const OtherButton = ({ children, className }: { children: ReactNode ,className?: string}) => {
  return (
    <div>
      <button className={`text-md text-[15px] uppercase z-10 ${className ? className : 'w-60'} h-14 before:absolute before:block before:inset-0 before:-z-10 before:bg-transparent before:border-2 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-yellow-400 after:absolute relative inline-block`}>
        {children}
      </button>
    </div>
  );
};

export default OtherButton;
