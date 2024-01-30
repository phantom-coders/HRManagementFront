"use client";
import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

const FormDatePicker = ({ name, label, onChange, size = "large" }) => {
  const { control, setValue } = useFormContext();

  const handleOnChange = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, date);
  };

  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            className="mt-0"
            defaultValue={dayjs(field.value) || Date.now()}
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
