import { InputFieldProps } from "@/type/global";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const Input: React.FC<InputFieldProps> = ({
  name,
  label,
  edit,
  placeholder,
  type,
  required = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-white mb-1"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? `${label} is required` : false }}
        render={({ field }) => (
          <input
            id={name}
            {...field}
            type={type}
            placeholder={placeholder}
            className={`block w-full px-4 py-2 text-sm border rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none text-black ${edit} ${
              errors[name]
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300"
            }`}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
