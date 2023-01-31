import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    ref: string;
}

const FormInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, ...otherProps },
    ref
) => {
    return <input className="input" {...otherProps} name={name} ref={ref} />;
};

const Input = React.forwardRef(FormInput);

export default Input;
