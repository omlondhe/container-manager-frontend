import "../styles/components/FormButton.css";

interface FormButtonProps {
  value: string;
}

function FormButton({ value }: FormButtonProps) {
  return <input type="submit" value={value} className="formButton" />;
}

export default FormButton;
