import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Prayer({name , time , imagee , color ,colort}) {
  return (
    <Card sx={{ maxWidth: 200 , maxHeight: 260}}>
      <CardMedia
        component="img"
        title="Al fajr"
        sx={{ height: 150 }}
        image={imagee}
      />
      <CardContent style={{backgroundColor: color ,color:colort}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h4" color={colort} >
                {time}       
        </Typography>
      </CardContent>
    </Card>
  );
}
