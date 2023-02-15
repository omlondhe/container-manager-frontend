import { HTMLInputTypeAttribute } from "react";
import "../styles/components/InputField.css";

interface InputFieldProps {
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholderText: string;
  value: string;
  setValue: Function;
  required: boolean;
}

function InputField({
  id,
  name,
  type,
  placeholderText,
  setValue,
  value,
  required,
}: InputFieldProps) {
  return (
    <div className="inputField">
      <div className="inputField__container">
        <label htmlFor={name} className="inputField__placeholder">
          <span
            className={`${"inputField__placeholder__text"}${
              value ? " inputField__valued__input__placeholder" : ""
            }`}
          >
            {placeholderText}
          </span>
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="inputField__input"
            required
          />
        </label>
      </div>
    </div>
  );
}

export default InputField;
