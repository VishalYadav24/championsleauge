import { LinearProgress } from "@mui/material";
import React, { Fragment } from "react";
import './loader.styles.scss'
const Loader = ({ variant, value, sx, size, thickness, color }) => {
  return (
    <Fragment>
      <LinearProgress
        size={size}
        thickness={thickness}
        variant={variant}
        value={value}
        sx={sx}
        color={color}
        className="progress"
      />
    </Fragment>
  );
};

export default Loader;
