import { Box, Button, Container, Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { FormEvent, useEffect, useState } from 'react'
import './Home.css'
import Country from '../Country';



const Home: React.FC = () => {

const [countries, setCountries] = useState<any[]>([])
const [search, setSearch] = useState<String>('')
const [error, setError] = useState(null)
const [newCountry, setNewCountry] = useState<any[]>([])


console.log(error)

 const handleSearch = () => {
  const newArray = countries.filter(c => c.name.common = search )
  setNewCountry(newArray)
 }

 console.log(countries)
 useEffect(()=> {
  fetch(`https://restcountries.com/v3.1/name/${search}`)
  .then(res =>{ if(!res.ok){
    throw Error('No data found')
  }
  return res.json()
  
  })
    .then(data =>{
      setNewCountry([])
      setCountries(data?.slice(-1))
      setError(null)
    }
  )
  .catch(err => {
    setError(err.message);
  });
  setNewCountry([])
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
   
                       /*  onClick={handleOnclick} */
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                          
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search your favorite country"
                            inputProps={{ 'aria-label': 'Search your favorite country' }}
                        />
                        <Button onClick={handleSearch} disabled={!search}  variant='contained' size='small' type="button" sx={{ p: '10px' }} aria-label="search">
                            Submit
                        </Button>
                    </Paper>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                {
                  error ? <Typography>{error}</Typography> : <Box>
                  {
                    newCountry?.map(c => (<Country key={c?.population} cName={c?.name?.common} population={c?.population} capital={c.capital} latlng={c?.latlng} flags={c?.flags.png}>

                    </Country>))
                  }
                </Box>
                }
            
            </Box>
        </Container>
    </>
  )
}

export default Home