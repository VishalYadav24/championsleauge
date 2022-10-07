import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar.component";

const Layout = () => {
  return (
    <Stack spacing={10}>
      <Navbar></Navbar>
      <Outlet />
    </Stack>
  );
};

export default Layout;
