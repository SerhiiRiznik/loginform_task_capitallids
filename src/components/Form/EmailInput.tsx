import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../state/formSlice";

type EmailInputProps = {
  name: string;
  img: string;
  required?: boolean;
  title: string;
  error: string;
};

const EmailInput = ({ img, required, title, name, error }: EmailInputProps) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  
  return (
    <>
      <img src={img} alt="" />
      <input
        type="email"
        name={name}
        value={value}
        required={required}
        placeholder=" "
        autoComplete="new-email"
        onChange={handleChange}
        onBlur={() => dispatch(setEmail({ value }))}
      />
      <label>{title}</label>
      {error && <p className="error"> {error} </p>}
    </>
  );
};

export default EmailInput;
