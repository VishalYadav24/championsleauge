import { Box } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import TableContent from "../Data Table/TableContent.component";

const headerConstant = [
  "id",
  "image_url",
  "name",
  "hp",
  "armor",
  "attackdamage",
  "attackrange",
  "hpregen",
  "spellblock",
];
const Dashboard = () => {
  const listOfChampions = useLoaderData();
  const columnHeaders = headerConstant.map(data => {return{key:data,label:data.toUpperCase(),disableSorting: (data === 'image_url')?true:false}});
  return (
    <Box bgcolor="background.paper" minHeight="100vh" color="#101011">
      Dashboard
      <TableContent headerCells={columnHeaders} records={listOfChampions} />
    </Box>
  );
};

export default Dashboard;
