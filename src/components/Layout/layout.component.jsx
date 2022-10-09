import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar.component";

const Layout = () => {
  return (
    <Stack spacing={10} sx={{background:"#2A2B2E"}}>
      <Navbar></Navbar>
      <Outlet />
    </Stack>
  );
};

export default Layout;
