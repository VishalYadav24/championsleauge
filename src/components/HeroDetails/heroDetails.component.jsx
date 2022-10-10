import { BookmarkAddOutlined, BookmarkRemoveOutlined } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { HerosContext } from "../../context/heroscontext";
import { getChampion } from "../../utils/api";
import Loader from "../Loader/loader.component";
import "./heroDetails.styles.scss";

const HeroDetails = ({ selectedHero, open, setOpen }) => {
  const [heroDetails, setHeroDetails] = useState(null);
  const handleClose = () => setOpen(false);
  const { addHero, setIsHeroPresent, isHeroPresent, checkIsHeroPresent,handleRemoveRecord } =
    useContext(HerosContext);

  /**
   * Method for conversion of custom values (numbers) to scale of 0 to 100 for progress bar/circle.
   * @param {*} value - number
   * @returns
   */
  const normalize = (value) => {
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
          <Box className="box">
            {heroDetails?.map((data) => {
              return (
                <Card key={data?.id} className="hero_container">
                  <CardContent>
                    <img
                      className="hero_full_image"
                      alt={data?.name}
                      src={data?.big_image_url}
                    ></img>
                  </CardContent>

                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h4"> {data?.name}</Typography>
                      {checkIsHeroPresent(data?.id) ? (
                        <IconButton className="icon" onClick={()=>handleRemoveRecord(data?.id)}>
                          <BookmarkRemoveOutlined/>
                        </IconButton>
                      ) : (
                        <IconButton
                          className="icon"
                          onClick={() => addHero(data)}
                        >
                          <BookmarkAddOutlined />
                        </IconButton>
                      )}
                    </Box>
                    <Divider></Divider>
                    <Box>
                      <Box className="specs">
                        <Typography>HP</Typography>
                        <Typography>{data?.hp}</Typography>
                      </Box>

                      <Loader
                        variant="determinate"
                        value={normalize(data?.hp)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Box className="specs">
                        <Typography>ARMOR</Typography>
                        <Typography>{data?.armor}</Typography>
                      </Box>
                      <Loader
                        variant="determinate"
                        value={normalize(data?.armor)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Box className="specs">
                        <Typography>ATTACK DAMAGE</Typography>
                        <Typography>{data?.attackdamage}</Typography>
                      </Box>
                      <Loader
                        variant="determinate"
                        value={normalize(data?.attackdamage)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Box className="specs">
                        <Typography>ATTACK RANGE</Typography>
                        <Typography>{data?.attackrange}</Typography>
                      </Box>

                      <Loader
                        variant="determinate"
                        value={normalize(data?.attackrange)}
                      ></Loader>
                    </Box>
                    <Box>
                      <Box className="specs">
                        <Typography>MOVE SPEED</Typography>
                        <Typography>{data?.movespeed}</Typography>
                      </Box>
                      <Loader
                        variant="determinate"
                        value={normalize(data?.movespeed)}
                      ></Loader>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
            <Box></Box>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default HeroDetails;
