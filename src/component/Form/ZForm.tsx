import { TForm, TFormConfig } from "@/type/global";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const ZForm = ({ onSubmit, resolver, defaultValues, children }: TForm) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const { handleSubmit } = methods;
  const handleToFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleToFormSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default ZForm;
