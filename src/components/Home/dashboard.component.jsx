import { Settings } from "@mui/icons-material";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getListOfChampions } from "../../utils/api";
import HerosList from "../Heros List/herosList.component";
import Navbar from "../Navbar/navbar.component";
import BasicPopover from "../popover/popover.component";
import "./dashboard.styles.scss";
/**
 * Container component for application components
 */
const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };
  const [herosList, setHerosList] = useState([]);
  const [orderBy, setOrderBy] = useState("hp");
  const listOfChampions = useLoaderData();
  const [heroCount, setHeroCount] = useState(listOfChampions?.length);
  const createLimitedStatsList = (herosList) => {
    return herosList?.map((data) => {
      return {
        id: data?.id,
        name: data?.name,
        image: data?.image_url,
        hp: data?.hp,
        armor: data?.armor,
        attackDamage: data?.attackdamage,
      };
    });
  };
  const handleCountChange = async (event) => {
    if (event) {
      let heroList;
      setHeroCount(event?.target?.value);
      await getListOfChampions(event?.target?.value).then(
        async (data) => await (heroList = data)
      );
      console.log(heroList);
      const minimalList = createLimitedStatsList(heroList);
      setHerosList(minimalList);
    }
  };

  useEffect(() => {
    const temp = herosList;
    temp.sort((a, b) => {
      if (a[orderBy] == b[orderBy]) {
        return 0;
      }
      return a[orderBy] < b[orderBy] ? -1 : 1;
    });
    console.log(temp);
    setHerosList([...temp]);
  }, [orderBy]);

  useState(() => {
    const minimalList = createLimitedStatsList(listOfChampions);
    setHerosList(minimalList);
  }, []);
  return (
    <Box>
      <Navbar />
      <Settings className="settings_icon" onClick={(event)=>openPopover(event)}/>
      <BasicPopover anchorEl={anchorEl} openPopover={openPopover} closePopover={closePopover}>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap",padding:"1rem",background:"black" }}>
        <FormControl sx={{ paddingRight: "1rem" }}>
          <InputLabel id="heros_count">Count</InputLabel>
          <Select
            className="heros_dropdown"
            labelId="heros_count"
            label="Count"
            value={heroCount}
            onChange={(event) => handleCountChange(event)}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="heros_ordering">Order</InputLabel>
          <Select
            className="heros_dropdown"
            labelId="heros_ordering"
            label="Order By"
            value={orderBy}
            onChange={(event) => setOrderBy(event.target.value)}
          >
            <MenuItem value="hp">HP</MenuItem>
            <MenuItem value="armor">Armor</MenuItem>
            <MenuItem value="attackDamage">Attack damage</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </BasicPopover>
      <HerosList
        herosList={herosList}
        setHerosList={setHerosList}
        createLimitedStatsList={createLimitedStatsList}
        orderBy={orderBy}
      />
    </Box>
  );
};

export default Dashboard;
