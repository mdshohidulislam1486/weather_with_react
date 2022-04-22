import { Box, Button, Container, Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { FormEvent, useEffect, useState } from 'react'
import './Home.css'
import Country from '../Country';


interface HomePost {

}

const Home: React.FC = () => {

const [countries, setCountries] = useState<any[]>([])
const [search, setSearch] = useState<String>('')
const [newCountries, setNewCountries] = useState<any[]>([])
const [error, setError] = useState(null)

console.log(error)

 const handleSearch = () => {
  
 }

 console.log(countries)
 useEffect(()=> {
  fetch(`https://restcountries.com/v3.1/name/${search}`)
  .then(res =>{ if(!res.ok){
    throw Error('Cound not fetch data')
  }
  return res.json()
  
  })
  .then(data =>{
    setCountries(data)
  }
)
  .catch(err => {
    setError(err.message);
  });
  setCountries([])
 }, [search])

/* const handleOnclick = () =>{
  const usemyText = search;
  setNewSearch(usemyText)
} */


  return (
    <>
       <Container>
          <Box>
            <Typography sx={{fontWeight:600, textAlign:'center', py:3}} variant='h2'        component='h2'>Country Detail </Typography>
            <Typography sx={{textAlign:'center'}} variant='body1' >We made it easy for you to know more about your favorite countries!!!</Typography>
          </Box>

            <Box sx={{display:'flex', justifyContent:'center', my:5}}>
                <Paper
                      component="form"
                        onSubmit={handleSearch}
                       /*  onClick={handleOnclick} */
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                          
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search your favorite country"
                            inputProps={{ 'aria-label': 'Search your favorite country' }}
                        />
                        <Button disabled={!search}  variant='contained' size='small' type="submit" sx={{ p: '10px' }} aria-label="search">
                            Submit
                        </Button>
                    </Paper>
            </Box>
            <Box>
              {
                countries?.map(c => (<Country key={c?.population} cName={c?.name?.common} age={c?.population}>

                </Country>))
              }
            </Box>

        </Container>
    </>
  )
}

export default Home