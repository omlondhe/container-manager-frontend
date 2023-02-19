import "../styles/pages/Signup.css";
import { FormEvent, useState } from "react";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import Space from "../components/Space";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { showToast } = useOutletContext<{ showToast: Function }>();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();
    if (firstName.trim().length < 2) {
      showToast("First name must be at least 2 characters long.", "error");
      return;
    }
    if (lastName.trim().length < 2) {
      showToast("Last name must be at least 2 characters long.", "error");
      return;
    }
    if (password.trim().length < 8) {
      showToast("Password must be at least 8 characters long.", "error");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Password are not matching.", "error");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/auth/check-if-email-exist",
        {
          email,
        }
      );

      if (response.data.emailExist) showToast("Email already exist.", "error");
      else {
        try {
          await axios.post("http://127.0.0.1:3000/api/auth/signup", {
            firstName,
            middleName,
            lastName,
            email,
            password,
          });
          showToast(
            "You are registered successfully, try logging in!",
            "success"
          );
          navigate("/auth/login");
        } catch (error) {
          showToast("Internal server error.", "error");
          console.log(error);
        }
      }
    } catch (error) {
      showToast("Internal server error.", "error");
      console.log(error);
    }
  }

  return (
    <form className="signup" onSubmit={handleSignUp}>
      <p className="signup__title">Sign up</p>
      <Space height={21} />
      <InputField
        id={"firstName"}
        name={"firstName"}
        type="text"
        placeholderText={"First Name"}
        value={firstName}
        setValue={setFirstName}
        required={true}
      />
      <Space height={21} />
      <InputField
        id={"middleName"}
        name={"middleName"}
        type="text"
        placeholderText={"Middle Name"}
        value={middleName}
        setValue={setMiddleName}
        required={false}
      />
      <Space height={21} />
      <InputField
        id={"lastName"}
        name={"lastName"}
        type="text"
        placeholderText={"Last Name"}
        value={lastName}
        setValue={setLastName}
        required={true}
      />
      <Space height={21} />
      <InputField
        id={"email"}
        name={"email"}
        type="email"
        placeholderText={"Email"}
        value={email}
        setValue={setEmail}
        required={true}
      />
      <Space height={21} />
      <InputField
        id={"password"}
        name={"password"}
        type="password"
        placeholderText={"Password"}
        value={password}
        setValue={setPassword}
        required={true}
      />
      <Space height={21} />
      <InputField
        id={"confirmPassword"}
        name={"confirmPassword"}
        type="password"
        placeholderText={"Confirm Password"}
        value={confirmPassword}
        setValue={setConfirmPassword}
        required={true}
      />
      <Space height={21} />
      <FormButton value="Sign up" />
    </form>
  );
}

export default Signup;
