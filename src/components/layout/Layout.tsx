import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../navigation";
import { RouterButton } from "../router";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Layout = () => {
  const { key } = useLocation();

  return (
    <Grid minH="100vh" p={3} templateRows="auto 1fr" textAlign="center" gap={8}>
      <GridItem rowSpan={1} as={Stack} direction="row" justify="space-between">
        <RouterButton to={ROUTES.home} variant="ghost" isDisabled={key === "default"}>
          Homepage
        </RouterButton>
        <ColorModeSwitcher />
      </GridItem>
      <GridItem rowSpan={1} as={Outlet} />
    </Grid>
  );
};
