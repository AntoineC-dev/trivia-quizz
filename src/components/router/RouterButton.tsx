import { Button, ButtonProps } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type RouterButtonProps = { to: string } & ButtonProps;

export const RouterButton = ({ to, ...rest }: RouterButtonProps) => {
  const navigate = useNavigate();
  const onClick = () => navigate(to);
  return <Button onClick={onClick} {...rest} />;
};
