import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Stack } from '@mui/material';
import Prayer from './Prayer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function MainComp() {

  const [timings,setTimings] = useState ({
    "Fajr": "00:00",
    "Dhuhr": "00:00",
    "Asr": "00:00",
    "Maghrib": "00:00",
    "Isha": "00:00",
});

const [selCity,setSelCity] = useState (
  {nomAffichage : "المنستير" ,
  nomApi : "Monastir" ,
  isoCode : "TN" ,}
);

    const getTimings = async () => {
      const re = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${selCity.nomApi}&country=${selCity.isoCode}`)
      console.log("the data is ",re.data.data.timings);
      setTimings(re.data.data.timings);
      
    }
    useEffect(() => {
      getTimings();
      
    }, [selCity]);


  const handleChange = (event) => {
    console.log(event.target.value)
    setSelCity(event.target.value);
  };
  return (

    <> 
    <Grid container>
        <Grid xs={6}>
            <h2>date/date/date</h2>
            <h1>{selCity.nomAffichage}</h1>
        </Grid>
        
        <Grid xs={6}>
        <h2>الوقت المتبقي</h2>
        <h1>01:02:00</h1>
        </Grid>
    </Grid>
    <Divider style={{borderColor:"white" , opacity: "0.2"}} />

    <Stack direction='row' justifyContent='space-around' style={{marginTop: "50px"}}>
      <Prayer name="الــفــجــر" time={timings.Fajr} imagee='src\imgs\sunrise.jpg'  color="#090401" colort={"#FFFFFF"}/>
      <Prayer name="الـظـهــــر" time={timings.Dhuhr} imagee='src\imgs\day.jpg' color="#F8CD0C" colort="black"/>
      <Prayer name="الــعــصــر" time={timings.Asr} imagee='src\imgs\midday.jpg' color="#9A9612" colort="black"/>
      <Prayer name="الــمـغـرب" time={timings.Maghrib} imagee='src\imgs\sunset.jpg' color="#3E3E40" colort="#FFFFFF"/>
      <Prayer name="الــعــشـاء" time={timings.Isha} imagee='src\imgs\night.jpg' color="#010002" colort="#FFFFFF"/>

    </Stack>
    <Stack direction="row" justifyContent={'center'} style={{marginTop:"50px"}}>
    <FormControl style={{width :"20%"}}>
        <InputLabel id="demo-simple-select-label"><span style={{color :"white"}}>المدينة</span></InputLabel>
        <Select 
        style={{color :"white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value="age"
          onChange={handleChange}
        >
          <MenuItem value={{nomAffichage :"المنستير" , nomApi :"Monastir" , isoCode :"TN"}}>المنستير</MenuItem>
          <MenuItem value={{nomAffichage :"سوسة" , nomApi :"Sousse" , isoCode :"TN"}}>سوسة</MenuItem>
          <MenuItem value={{nomAffichage :"تونس" , nomApi :"Tunis" , isoCode :"TN"}}>تونس</MenuItem>
          <MenuItem value={{nomAffichage :"غزة" , nomApi :"Gaza" , isoCode :"PS"}}>غزة</MenuItem>



        </Select>
      </FormControl>
    </Stack>
    </>
  )
}
