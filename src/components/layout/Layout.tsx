import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ROUTES } from "../../navigation";
import { RouterButton } from "../router";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Layout = () => {
  return (
    <Grid minH="100vh" p={3} templateRows="auto 1fr" textAlign="center" gap={8}>
      <GridItem rowSpan={1} as={Stack} direction="row" justify="space-between">
        <RouterButton to={ROUTES.home} variant="ghost">
          Homepage
        </RouterButton>
        <ColorModeSwitcher />
      </GridItem>
      <GridItem rowSpan={1} as={Outlet} />
    </Grid>
  );
};
