import {
  AppBar,
  IconButton,
  List,
  ListItem,
  Menu,
  Toolbar,
  Tooltip,
  Zoom,
} from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.styles.scss";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <List className="list_container">
            <ListItem className="list_item_1">
              <IconButton>
                <img
                  className="logo"
                  alt="logo"
                  src={require("../../assets/swords.png")}
                ></img>
              </IconButton>
              <h3>Game Store</h3>
            </ListItem>
            <ListItem className="list_item_2">
              <Tooltip TransitionComponent={Zoom} title="Watchlist" placeholder="bottom">
              <IconButton onClick={()=> navigate("/favorite")} >
                <img
                  alt="watch list"
                  className="logo"
                  src={require("../../assets/bookmark.png")}
                ></img>
              </IconButton>
              </Tooltip>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
