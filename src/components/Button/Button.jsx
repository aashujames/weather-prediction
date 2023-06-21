import React, { ForwardRefRenderFunction } from "react";
import "./button.css";

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn" {...otherProps}>
            <span className="children">{children}</span>
        </button>
    );
};

export default Button;
