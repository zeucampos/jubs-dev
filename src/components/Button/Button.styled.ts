import styled from "styled-components";
import { IButtonProps } from "./Button";

export const ButtonContainer = styled.div<IButtonProps>`
  height: 48px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  color: white;
  padding: 16px;
  font-weight: bold;
  background-color: ${(props) => props.color || "#D5525A"};

  ${(props) =>
    props.outlined &&
    `
    background-color: transparent;
    border: 2px solid ${props.color || "#D5525A"};
    `}

  &:hover {
    cursor: pointer;
  }
`;
