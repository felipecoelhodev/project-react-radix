import { InputHTMLAttributes } from "react";
import "./style.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <input className="Input" {...props} />;
};

export default Input;
