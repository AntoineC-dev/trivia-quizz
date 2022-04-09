import { Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Layout = () => {
  return (
    <Grid minH="100vh" p={3} textAlign="center">
      <ColorModeSwitcher justifySelf="flex-end" />
      <Outlet />
    </Grid>
  );
};
