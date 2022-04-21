import { Box, Container, Divider, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import './Home.css'

const Home = () => {



  return (
    <>
       <Container>
            <Typography sx={{fontWeight:600, textAlign:'center', py:3}} variant='h2' component='h2'>Country Detail </Typography>
             <Typography sx={{textAlign:'center'}} variant='body1' >We made it easy for you to know more about your favorite countries!!!</Typography>
             <Box sx={{display:'flex', justifyContent:'center', my:5}}>
                <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search your favorite country"
                            inputProps={{ 'aria-label': 'Search your favorite country' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
             </Box>
             
        </Container>
    </>
  )
}

export default Home