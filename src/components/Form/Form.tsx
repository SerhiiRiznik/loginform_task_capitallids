import React, { MouseEvent, useState } from "react";
import user from "../../assets/img/u_user.png";
import users from "../../assets/img/u_users-alt.png";
import map_marker from "../../assets/img/u_map-marker-alt.png";
import phoneimg from "../../assets/img/u_phone-alt.png";
import pass from "../../assets/img/u_padlock-one.png";
import dblpass from "../../assets/img/u_padlock.png";
import emailimg from "../../assets/img/u_envelope.png";
import SelectInput from "./SelectImput";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import CheckBox from "./CheckBox";
import TextInput from "./TextInput";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";

const Form = () => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsConditionError, setTermsConditionError] = useState("");
  const [phoneCodeError, setPhoneCodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const {
    firstName,
    lastName,
    email,
    phone: { phoneCode, phone },
    password,
    confirmPassword,
    termsCondition,
  } = useSelector((state: RootState) => state.form);
  const HandeSubmit = (event: MouseEvent<HTMLInputElement>) => {
    let passReg = new RegExp(/^(?=\D*\d)(?=.*?[a-zA-Z]).*[\W_].*$/gm);
    let emailReg = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsConditionError("");
    setPhoneCodeError("");
    setPhoneError("");

    if (firstName.length <= 2 || firstName.trim() === "") {
      setFirstNameError("The name must be more than 2 characters");
    }
    if (lastName.length <= 2 || firstName.trim() === "") {
      setLastNameError("The name must be more than 2 characters");
    }
    if (!passReg.test(password)) {
      setPasswordError("Password must have 1 letter, 1 number and one symbol");
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Password does not match");
    }
    if (!emailReg.test(email)) {
      setEmailError("Email is not correct");
    }
    if (!termsCondition) {
      setTermsConditionError("error");
    }
    if (phoneCode === "") {
      setPhoneCodeError("Fill in the field");
    }
    if (phone === "") {
      setPhoneError("Fill in the field");
    }
    if (isNaN(parseInt(phone))) {
      setPhoneError("Mast be a Number");
    }
  };
  return (
    <>
      <p className="title">
        <span>Sign Up</span> and find the best place to rest while traveling
      </p>
      <form action="">
        <div className="group">
          <TextInput
            img={user}
            name="firstName"
            required={true}
            title="First Name"
            message={firstNameError}
          />
        </div>
        <div className="group">
          <TextInput
            img={users}
            name="secondName"
            required={true}
            title="Second Name"
            message={lastNameError}
          />
        </div>
        <div className="group">
          <SelectInput
            img={map_marker}
            title="Countru"
            name="country"
            error={phoneCodeError}
          />
        </div>
        <div className="group">
          <PhoneInput
            img={phoneimg}
            required={true}
            title="Phone"
            name="phone"
            error={phoneError}
          />
        </div>

        <div className="group">
          <PasswordInput
            img={pass}
            name="password"
            required={true}
            title="Password"
            error={passwordError}
          />
        </div>

        <div className="group">
          <PasswordInput
            img={dblpass}
            name="confirmPassword"
            required={true}
            title="Password"
            error={confirmPasswordError}
          />
        </div>
        <div className="group">
          <EmailInput
            img={emailimg}
            name="email"
            required={true}
            title="Email"
            error={emailError}
          />
        </div>
        <div className="group">
          <CheckBox name="Terms" error={termsConditionError} />
        </div>
        <input
          className="submit"
          type="button"
          value="Sign Up"
          onClick={HandeSubmit}
        />
      </form>
      <footer className="footer">
        If you have an account, <a href="#">Log In</a>
      </footer>
    </>
  );
};

export default Form;
