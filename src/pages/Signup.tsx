import { useState } from "react";
import "../styles/pages/Signup.css";
import InputField from "../components/InputField";
import VerticalSpace from "../components/VerticalSpace";
import FormButton from "../components/FormButton";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form
      className="signup"
      onSubmit={(e) => {
        e.preventDefault();
        alert("submitted");
      }}
    >
      <p className="signup__title">Sign up</p>
      <VerticalSpace height={21} />
      <InputField
        id={"firstName"}
        name={"firstName"}
        type="text"
        placeholderText={"First Name"}
        value={firstName}
        setValue={setFirstName}
        required={true}
      />
      <VerticalSpace height={21} />
      <InputField
        id={"middleName"}
        name={"middleName"}
        type="text"
        placeholderText={"Middle Name"}
        value={middleName}
        setValue={setMiddleName}
        required={false}
      />
      <VerticalSpace height={21} />
      <InputField
        id={"lastName"}
        name={"lastName"}
        type="text"
        placeholderText={"Last Name"}
        value={lastName}
        setValue={setLastName}
        required={true}
      />
      <VerticalSpace height={21} />
      <InputField
        id={"email"}
        name={"email"}
        type="email"
        placeholderText={"Email"}
        value={email}
        setValue={setEmail}
        required={true}
      />
      <VerticalSpace height={21} />
      <InputField
        id={"password"}
        name={"password"}
        type="password"
        placeholderText={"Password"}
        value={password}
        setValue={setPassword}
        required={true}
      />
      <VerticalSpace height={21} />
      <InputField
        id={"confirmPassword"}
        name={"confirmPassword"}
        type="password"
        placeholderText={"Confirm Password"}
        value={confirmPassword}
        setValue={setConfirmPassword}
        required={true}
      />
      <VerticalSpace height={21} />
      <FormButton value="Sign up" />
    </form>
  );
}

export default Signup;
