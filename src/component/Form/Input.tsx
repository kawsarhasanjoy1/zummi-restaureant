import { InputFieldProps } from "@/type/global";
import { Controller, useFormContext } from "react-hook-form";

export const Input: React.FC<InputFieldProps> = ({
  name,
  label,
  editL,
  edit,
  min,
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
        className={`block text-sm font-medium mb-1 ${editL}`}
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
            min={min}
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
