import { useState } from "react";
import "../styles/pages/Login.css";
import InputField from "../components/InputField";
import VerticalSpace from "../components/VerticalSpace";
import FormButton from "../components/FormButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="login"
      onSubmit={(e) => {
        e.preventDefault();
        alert("submitted");
      }}
    >
      <p className="login__title">Log in</p>
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
      <FormButton value="Log in" />
    </form>
  );
}

export default Login;
