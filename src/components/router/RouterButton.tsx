import * as React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { NavigateOptions, useNavigate } from "react-router-dom";

type RouterButtonProps = {
  to: string;
  navigateOptions?: NavigateOptions;
} & Omit<ButtonProps, "onClick">;

export const RouterButton = ({ to, navigateOptions, ...rest }: RouterButtonProps) => {
  const navigate = useNavigate();
  const onNavigate = () => navigate(to, navigateOptions);
  return <Button onClick={onNavigate} {...rest} />;
};
