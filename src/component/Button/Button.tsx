import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <div>
      <button
        {...props}
        className={`text-md text-[15px] font-semibold uppercase ${
          className ? className : "w-60"
        } ${
          className ? "h-11" : "h-14"
        } bg-red-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000`}
      >
        <span
          className={`absolute bg-red-600 ${
            className ? className : "size-60"
          } rounded-full ${
            className ? "" : "group-hover:scale-100"
          } scale-0 -z-10 -left-0 -top-10 group-hover:duration-500 duration-1000 origin-center transform transition-all`}
        ></span>
        <span
          className={`absolute ${
            className ? className : "size-60"
          } bg-red-800 -left-0 -top-10 rounded-full ${
            className ? "" : "group-hover:scale-100"
          } scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all`}
        ></span>
        {children}
      </button>
    </div>
  );
};

export default Button;
