import React from "react";
import { ButtonContainer } from "./Button.styled";

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  outlined?: boolean;
}

const Button = (props: IButtonProps) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default Button;
