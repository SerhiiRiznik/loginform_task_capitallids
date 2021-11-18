import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhone } from "../../state/formSlice";
import { RootState } from "../../state/store";

type PhoneInputProps = {
  name: string;
  img: string;
  required?: boolean;
  title: string;
  error: string;
};
const PhoneInput = ({ img, required, title, name, error }: PhoneInputProps) => {
  const [value, setValue] = useState("");
  const { phone, phoneCode } = useSelector((state: RootState) => state.form.phone);
  const dispatch = useDispatch();
  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(event.target.value));
    setValue(event.target.value);
  };

  return (
    <>
      <img src={img} alt="phone" />
      <input
        type="text"
        name={name}
        required={required}
        onChange={handleSelect}
        value={phoneCode ? `+${phoneCode} ${phone}` : value}
        autoComplete="new-phone"
      />
      <label>{title}</label>
      {error && <p className="error"> {error} </p>}
    </>
  );
};

export default PhoneInput;
