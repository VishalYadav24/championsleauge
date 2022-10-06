import {LinearProgress } from '@mui/material'
import React, { Fragment } from 'react'

const Loader = ({variant,value,sx,size,thickness,color}) => {
  return (
    <Fragment>
       <LinearProgress size={size} thickness={thickness} variant={variant} value={value} sx={sx} color={color}/>
    </Fragment>
  )
}

export default Loader