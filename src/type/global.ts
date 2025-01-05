import { USER_ROLE } from "@/constance/constance";
import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { IconType } from "react-icons";

export type UserRole = keyof typeof USER_ROLE;
export type TItem = {
  title: string;
  path: string;
  icon: IconType;
};

export type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

export type TForm = {
  children: ReactNode;
  defaultValues?: any;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

export interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  edit?: string;
  required?: boolean;
}

export interface TUser {
  name: string;
  email: string;
  password: string;
  image: string;
}
export interface TLoginUser {
  email: string;
  password: string;
}
