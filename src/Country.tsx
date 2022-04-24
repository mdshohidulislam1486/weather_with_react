import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';



interface Props{
  cName?:string;
  population?:number;
  capital?:string;
  flags?:string;
  latlng?:any[];
  children?: React.ReactNode;
}

const Country:React.FC<Props> = ({cName, population, capital, latlng, flags}:Props) => {
  
  return (
      <Card sx={{ maxWidth: 345, m:2 }}>
          <CardMedia
            component="img"
            height="170"
            image={flags}
            alt={cName}
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cName}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Population: {population}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Capital: {capital}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Latitude : {latlng?.slice(0, 1)} Longitude: {latlng?.slice(1, 2)}
              </Typography>
            </CardContent>
          <CardActions >
            <Link style={{textDecoration:"none"}} to={`/weather/${capital}`}>
              <Button size="small">{capital} weather now</Button>
            </Link>
          </CardActions>
      </Card>
  )
}

export default Country