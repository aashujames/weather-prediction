import React, { ForwardRefRenderFunction } from "react";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
    return (
        <button className="btn" {...otherProps}>
            <span className="children">{children}</span>
        </button>
    );
};

export default Button;
