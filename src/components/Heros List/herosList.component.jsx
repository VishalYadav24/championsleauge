import { Card, CardContent, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './herosList.styles.css'
const HerosList = ({herosList}) => {
  return (
    <Container >
      <Box sx={{display:{lg:"flex",md:"flex",sm:"flex",xs:"flex"},flexWrap:"wrap"}}>
        {herosList.map(data => {
          return (
            <Card key={data?.id} sx={{margin:".5rem",alignSelf:"center"}}>
              <CardContent >
                
              <img alt={data?.name} src={data?.image}></img>
              </CardContent>
              <CardContent >
                <Typography sx={{fontSize:"1rem",fontWeight:"bold"}}>{data?.name}</Typography>
              </CardContent>
            </Card>
          )
        })}
        </Box>
    </Container>
  )
}

export default HerosList