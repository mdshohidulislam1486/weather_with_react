import { Box, Button, Container, InputBase, Paper, Typography } from '@mui/material'
import React, {  useState } from 'react'
import './Home.css'
import Country from '../Country';



const Home: React.FC = () => {

  const [countries, setCountries] = useState<any[]>([])
  const [search, setSearch] = useState<String>('')
  const [error, setError] = useState(false)
  
  
  
  
   const handleSearch = () => {
    
    const url = `https://restcountries.com/v3.1/name/${search}`
          fetch(url)
          .then(res => res.json())
          .then(data => {
            if(data.length>0){
              setCountries(data)
            }
            else{
              setError(true)
              setCountries([])
              return
            }
          })
          setError(false)
   } 

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
                            placeholder="Enter country"
                            inputProps={{ 'aria-label': 'Search your favorite country' }}
                            defaultValue={search}
                        />
                        <Button onClick={handleSearch} test-id="custom-element" disabled={!search}  variant='contained' size='small' type="button" sx={{ p: '10px' }} aria-label="search">
                            Submit
                        </Button>
                    </Paper>
            </Box>
            <Box data-testid='name' sx={{display:'flex', justifyContent:'center'}}>
            
                {
                  error ? <Typography data-testid="data-search-fail" sx={{color:'red'}}>No data found!!</Typography> : <Box>
                  {
                    countries?.map(c => (<Country key={c?.population} cName={c?.name?.common} population={c?.population} capital={c.capital} latlng={c?.latlng} flags={c?.flags.png}>
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