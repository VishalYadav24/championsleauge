import { RemoveRedEye } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import HeroDetails from "../HeroDetails/heroDetails.component";
import "./herosList.styles.css";
const HerosList = ({ herosList }) => {
  const [selectedHero, setSelectedHero] = useState("");
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <Container>
        <Box
          sx={{
            display: { lg: "flex", md: "flex", sm: "flex", xs: "flex" },
            flexWrap: "wrap",
          }}
        >
          {herosList.map((data) => {
            return (
              <Card
                key={data?.id}
                sx={{ margin: ".5rem", alignSelf: "center" }}
              >
                <CardContent>
                  <img className="hero_image" alt={data?.name} src={data?.image}></img>
                </CardContent>
                <CardContent>
                  <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {data?.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    onClick={() => {
                      setSelectedHero(data?.name);
                      setOpen(true);
                    }}
                  >
                    <RemoveRedEye />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
      <HeroDetails selectedHero={selectedHero} open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default HerosList;
