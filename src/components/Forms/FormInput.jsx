"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  prefix,
  defaultValue,
  disabled,
}) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              prefix={prefix}
              placeholder={placeholder}
              defaultValue={defaultValue}
              disabled={disabled}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              prefix={prefix}
              defaultValue={defaultValue}
              disabled={disabled}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;
