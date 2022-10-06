import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Fade,
  Modal,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { getChampion } from "../../utils/api";
import Loader from "../Loader/loader.component";

const HeroDetails = ({ selectedHero, open, setOpen }) => {
  const [heroDetails, setHeroDetails] = useState(null);
  const handleClose = () => setOpen(false);
  /**
   * Method for conversion of custom values (numbers) to scale of 0 to 100 for progress bar/circle.
   * @param {*} value - number
   * @returns
   */
  const normalise = (value) => {
    let max = 0;
    let min = 0;
    switch (true) {
      case value < 10:
        max = 10;

        break;
      case value > 10 && value < 101:
        max = 100;
        break;
      case value > 100:
        max = 1000;
        break;
      default:
        break;
    }
    return ((value - min) * 100) / (max - min);
  };
  useEffect(() => {
    console.log(selectedHero);
    if (selectedHero) {
      setHeroDetails(null);
      getChampion(selectedHero).then((data) => setHeroDetails(data));
    }
  }, [selectedHero]);

  // const constructDetails = (object,propertyName)=>{
  //   for(const key in object){
  //     if(key === propertyName){
  //       return key.toUpperCase()
  //     }
  //   }
  // }

  return (
    <Fragment>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box>
            {heroDetails?.map((data) => {
              return (
                <Card key={data?.id}>
                  <CardActionArea>
                    <Typography variant="h4">{data?.name}</Typography>
                    <img alt={data?.name} src={data?.big_image_url}></img>
                  </CardActionArea>
                  <Divider></Divider>
                  <CardContent>
                    <Box>
                      <Typography>HP</Typography>
                      <Loader
                        variant="determinate"
                        value={normalise(data?.hp)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Typography>ARMOR</Typography>
                      <Loader
                        variant="determinate"
                        value={normalise(data?.armor)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Typography>ATTACK DAMAGE</Typography>
                      <Loader
                        variant="determinate"
                        value={normalise(data?.attackdamage)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Typography>ATTACK RANGE</Typography>
                      <Loader
                        variant="determinate"
                        value={normalise(data?.attackrange)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Typography>MOVE SPEED</Typography>
                      <Loader
                        variant="determinate"
                        value={normalise(data?.movespeed)}
                      ></Loader>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default HeroDetails;
