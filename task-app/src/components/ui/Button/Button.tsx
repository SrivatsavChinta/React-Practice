import { Button as ChakraButton } from "@chakra-ui/react";
import type { IconType } from "react-icons";

export interface IButtonProps {
  buttonTitle?: string;
  Icon?: IconType;
  size?: ButtonSize;
  func?: () => void;
}

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export const Button = ({
  buttonTitle,
  Icon,
  size = "xs",
  func,
}: IButtonProps) => {
  return (
    <ChakraButton size={size} onClick={func}>
      {Icon && <Icon />}
      {buttonTitle && <span>{buttonTitle}</span>}
    </ChakraButton>
  );
};
