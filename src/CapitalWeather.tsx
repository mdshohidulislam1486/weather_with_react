import { Box, Container, Typography } from '@mui/material';
import React from 'react'


interface Props{
    countryName?:string;
    cityName?:string;
    cityWind?:number;
    cityTemperature?:number;
    cityPrecip?:number;
    weatherIcon?:any[string];
    children?: React.ReactNode;

  }

const CapitalWeather:React.FC<Props> = ({cityPrecip, weatherIcon, cityWind, countryName,  cityName, cityTemperature}:Props) => {
  return (
    <>
    <Container>
        <Box sx={{textAlign:'center'}}>
          <Typography sx={{color:'#fff',my:3}}>City Name: {cityName}</Typography>
          <img src={weatherIcon?.slice(0,1)} alt={cityName} />
          
       </Box>
          <Box sx={{display:'flex', justifyContent:"center"}}>
            <Typography sx={{mr:2}}  color='#fff' variant='caption' component='span'>Tem: {cityTemperature} deg </Typography>
            <Typography color='#fff' variant='caption' component='span'>Wind: {cityWind} km</Typography>
          </Box>
          <Typography sx={{textAlign:'center'}} color='#fff' variant='body2'>Precipitation : {cityPrecip}</Typography>
       
    </Container>
    </>
  )
}

export default CapitalWeather