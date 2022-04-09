import { Button, ButtonProps } from "@chakra-ui/react";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

type RouterButtonProps = {
  to: To;
  navigateOptions?: NavigateOptions;
} & Omit<ButtonProps, "onClick">;

export const RouterButton = ({ to, navigateOptions, ...rest }: RouterButtonProps) => {
  const navigate = useNavigate();
  const onNavigate = () => navigate(to, navigateOptions);
  return <Button onClick={onNavigate} {...rest} />;
};
