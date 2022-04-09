import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type RouterIconButtonProps = { to: string } & IconButtonProps;

export const RouterIconButton = ({ to, ...rest }: RouterIconButtonProps) => {
  const navigate = useNavigate();
  const onClick = () => navigate(to);
  return <IconButton onClick={onClick} {...rest} />;
};
