import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../state/formSlice";

type TextInputProps = {
  name: string;
  img: string;
  required?: boolean;
  title: string;
  message: string;
};

const TextInput = ({ img, required, title, name, message }: TextInputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (event: any) => setValue(event.target.value);
  const dispatch = useDispatch();

  return (
    <>
      <img src={img} alt="user" />
      <input
        type="text"
        name={name}
        required={required}
        value={value}
        onChange={handleChange}
        onBlur={() => dispatch(setName({ name, value }))}
      />
      <label>{title}</label>
      {message && <p className="error"> {message} </p>}
    </>
  );
};

export default TextInput;
