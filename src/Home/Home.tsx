import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Container>
             <Typography sx={{fontWeight:600, textAlign:'center'}} variant='h2' component='h2'>Country Detail </Typography>
             <Typography sx={{textAlign:'center'}} variant='body1' component='body'>We made it easy for you to know more about your favorite countries!!!</Typography>

             <Box>
                 
             </Box>
        </Container>
        
    </div>
  )
}

export default Home