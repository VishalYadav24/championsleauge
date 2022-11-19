import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getListOfChampions } from "../../utils/api";
import HerosList from "../Heros List/herosList.component";
import Navbar from "../Navbar/navbar.component";

/**
 * Container component for application components
 */
const Dashboard = () => {
  const [herosList, setHerosList] = useState([]);
  const listOfChampions = useLoaderData();
  const [heroCount,setHeroCount] = useState(5);
  const createLimitedStatsList = (herosList)=>{
  return  herosList?.map((data) => {
      return { id: data?.id, name: data?.name, image: data?.image_url,hp:data?.hp,armor: data?.armor,attackDamage: data?.attackdamage};
    });
  };
  const handleCountChange = async (event)=>{
    if(event){
    let heroList;
    setHeroCount(event?.target?.value);
   await getListOfChampions(event?.target?.value).then(async(data) => await (heroList = data));
    console.log(heroList)
    const minimalList = createLimitedStatsList( heroList);
    setHerosList(minimalList);
    }
  }
  useState(() => {
    const minimalList = createLimitedStatsList( listOfChampions);
    setHerosList(minimalList);
  }, []);
  return (
    <Box>
      <Navbar/>
      <Box>
        <FormControl>
          <InputLabel id="heros_count">Count</InputLabel>
          <Select labelId="heros_count" label="Count" value={heroCount} onChange={(event)=>handleCountChange(event) }>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <HerosList herosList={herosList} setHerosList={setHerosList} createLimitedStatsList={createLimitedStatsList} />
    </Box>
  );
};

export default Dashboard;
