import { Button as ChakraButton } from "@chakra-ui/react";
import type { IconType } from "react-icons";

export interface IButtonProps {
  Icon: IconType;
  size?: ButtonSize;
  func?: () => void;
}

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export const Button = ({ Icon, size = "xs", func }: IButtonProps) => {
  return (
    <ChakraButton size={size} onClick={func}>
      <Icon />
    </ChakraButton>
  );
};
