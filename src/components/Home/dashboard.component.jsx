import { Box } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableContent from "../Data Table/TableContent.component";
import HerosList from "../Heros List/herosList.component";
import Navbar from "../Navbar/navbar.component";

/**
 * Container component for application components
 */
const Dashboard = () => {
  const [herosList, setHerosList] = useState([]);
  const listOfChampions = useLoaderData();

  useState(() => {
    const minimalList = listOfChampions.map((data) => {
      return { id: data?.id, name: data?.name, image: data?.image_url,hp:data?.hp,armor: data?.armor,attackDamage: data?.attackdamage};
    });
    setHerosList(minimalList);
  }, []);
  return (
    <Box>
      <Navbar/>
      <HerosList herosList={herosList} />
    </Box>
  );
};

export default Dashboard;
