import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChecked } from "../../state/formSlice";
import { RootState } from "../../state/store";

type CheckBoxProps = {
  name: string;
  required?: boolean;
  error: string;
};

const CheckBox = ({ required, name, error }: CheckBoxProps) => {
  const checkeed = useSelector((state: RootState) => state.form.termsCondition);
  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    event.stopPropagation();
    dispatch(setChecked());
  };
  return (
    <>
      <input
        type="checkbox"
        onChange={handleChange}
        name={name}
        id="terms"
        required={required}
        checked={checkeed}
      />
      <label htmlFor="terms" className={error && "error-check"}></label>
      <p style={{ paddingLeft: "25px" }} onClick={handleChange}>
        I agree to the <a href="#">Terms and Conditions</a>
      </p>
    </>
  );
};

export default CheckBox;
