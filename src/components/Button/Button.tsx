import React, { ForwardRefRenderFunction } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
    return <button {...otherProps}>{children}</button>;
};

export default Button;
