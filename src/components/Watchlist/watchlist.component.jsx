import React, { useContext } from "react";
import { HerosContext } from "../../context/heroscontext";
import TableContent from "../Data Table/TableContent.component";

const WatchList = () => {
  const {favoriteHero} = useContext(HerosContext);
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
  const columnHeaders = headerConstant.map((data) => {
    return {
      key: data,
      label: data.toUpperCase(),
      disableSorting: data === "image_url" ? true : false,
    };
  });
  return <>
   <TableContent headerCells={columnHeaders} records={favoriteHero} />
  </>;
};

export default WatchList;
