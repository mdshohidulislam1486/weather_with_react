import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import CapitalWeather from './CapitalWeather'



type HistoryParams ={
    id: string
}
interface CityWeather {
  location:{
    country:string;
    name:string;
  },
  current:{
    temperature:number;
    wind_speed:number;
    precip:number
    weather_icons:[]
  },
  
}



const Weather:React.FC = () => {
const [weather, setWeather] = useState<CityWeather | null>(null)
const [error, setError] = useState(null)
 
console.log(weather)
const {id} = useParams<HistoryParams>()
console.log(id)

useEffect(() => {
    fetch(`http://api.weatherstack.com/current?access_key=a45ad937fc4753c20fe390d243375273&query=${id}`)
    .then(res =>{ if(!res.ok){
        throw Error('No weather data found, please check again')
      }
      return res.json()
    })
    .then(data =>{
        setWeather(data)
        setError(null)
      }
    )
    .catch(err => {
      setError(err.message);
    });
}, [])


  return (
    <Box  sx={{height:'100vh', width:'100%', backgroundColor:'#171717'}}> 
    <Container>
        <Typography color='#fff' variant='h3' sx={{fontWeight:600, textAlign:'center', py:5}}>{weather?.location.country}</Typography>
        <Typography sx={{textAlign:'center'}} color='#FFF'>Know More about todays Weather</Typography>
        
        <Box>
            <CapitalWeather weatherIcon={weather?.current?.weather_icons} cityPrecip={weather?.current?.precip} countryName={weather?.location?.country} cityName={weather?.location?.name} cityTemperature={weather?.current?.temperature} cityWind={weather?.current?.wind_speed}></CapitalWeather>

        </Box>
          <Link style={{textDecoration:"none", marginTop:30, display:'flex', justifyContent:'center'}} to='/'>
              <Button  sx={{textAlign:'center'}} variant='contained'> Home </Button>
          </Link>
    </Container>
    </Box>
  )
}

export default Weather