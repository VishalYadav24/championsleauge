import { BookmarkAdd, BookmarkAddOutlined, RemoveRedEye } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import HeroDetails from "../HeroDetails/heroDetails.component";
import "./herosList.styles.scss";
const HerosList = ({ herosList }) => {
  const [selectedHero, setSelectedHero] = useState("");
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <Container className="herosList">
        <Box
          sx={{
            display: { lg: "flex", md: "flex", sm: "flex", xs: "flex" },
            flexWrap: "wrap",
          }}
        >
          {herosList?.map((data) => {
            return (
              <Card
                key={data?.id}
                className="hero_list"
              >
                <CardContent>
                  <img className="hero_image" alt={data?.name} src={data?.image}></img>
                </CardContent>
                <CardContent>
                  <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {data?.name}
                  </Typography>
                </CardContent>
                <CardActions sx={{padding:"0"}}>
                  <Tooltip TransitionComponent={Zoom} title="view player details" placement="right-start">
                  <IconButton
                    onClick={() => {
                      setSelectedHero(data?.name);
                      setOpen(true);
                    }}
                    data-testid ="view player details"
                  >
                    <RemoveRedEye className="icon" sx={{color:"#F84982"}} />
                  </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
      <HeroDetails selectedHero={selectedHero} open={open} setOpen={setOpen} />
      <Box className="footer"
      >
        <span>Made in 2022 by Vishal Yadav</span>
      </Box>
    </Fragment>
  );
};

export default HerosList;
