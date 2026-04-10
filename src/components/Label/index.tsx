import { ReactNode, LabelHTMLAttributes } from "react";
import "./style.css";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label className="Label" {...props}>
      {children}
    </label>
  );
};

export default Label;
