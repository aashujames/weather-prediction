import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import "./input.css";

const FormInput = ({ name, ...otherProps }, ref) => {
    return <input className="input" {...otherProps} name={name} ref={ref} />;
};

const Input = React.forwardRef(FormInput);

export default Input;
