import { ReactNode, FieldsetHTMLAttributes } from "react";
import "./style.css";

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode;
}

export const Fieldset = ({ children, ...props }: FieldsetProps) => {
  return (
    <fieldset className="Fieldset" {...props}>
      {children}
    </fieldset>
  );
};

export default Fieldset;
