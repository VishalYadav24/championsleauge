import { Box } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableContent from "../Data Table/TableContent.component";
import HerosList from "../Heros List/herosList.component";
import Navbar from "../Navbar/navbar.component";

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
  const [herosList, setHerosList] = useState([]);
  const listOfChampions = useLoaderData();

  useState(() => {
    const minimalList = listOfChampions.map((data) => {
      return { id: data?.id, name: data?.name, image: data?.image_url };
    });
    setHerosList(minimalList);
  }, []);
  return (
    <Box>
      {/* <TableContent headerCells={columnHeaders} records={listOfChampions} /> */}
      <Navbar/>
      <HerosList herosList={herosList} />
    </Box>
  );
};

export default Dashboard;
