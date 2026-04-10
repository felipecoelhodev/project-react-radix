import { ReactNode, ButtonHTMLAttributes } from "react";
import "./style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
};

export const IconButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="IconButton" {...props}>
      {children}
    </button>
  );
};

export default Button;
