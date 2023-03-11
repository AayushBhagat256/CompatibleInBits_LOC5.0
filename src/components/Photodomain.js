import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import '../styles/domain.css'

import { Typography,Grid } from '@mui/material';

export default function Photodomain() {
        const [value, setValue] = useState('');
        const [price,setPrice]=useState(0)
      
        const handleChange = (e) => {
          setValue(e.target.value);
          console.log(value)
        };
        const money=(e)=>{
            setPrice(e.target.value);
            console.log(price);
        }

    return (
        <>

        <br></br>
        <br></br>
        <br></br>
        
        <Grid container>
        <Grid item md={4}></Grid>
        <Paper elevation={5} sx={{padding:5}}>
        <Grid item md={6}>
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Domain Selection</FormLabel>
        <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        >
        <Typography variant='h3'>
        <FormControlLabel value="food" control={<Radio />} label="Food" />
        </Typography>
        <Typography variant='h1'>
        <FormControlLabel value="portrait" control={<Radio />} label="Portrait" />
        </Typography>
        <Typography variant='h1'>
        <FormControlLabel value="coorprate_event" control={<Radio />} label="Coorporate Events" />
        </Typography>
        <Typography variant='h1'>
        <FormControlLabel value="coorporate_headshots" control={<Radio />} label="Coorporate Headshots" />
        </Typography>
        <Typography variant='h1'>
        <FormControlLabel value="private_events" control={<Radio />} label="Private Events" />
      </Typography>
      </RadioGroup>
    </FormControl>

    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
          value={price}
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}

            onChange={money}
          />
        </FormControl>
        


    </Grid>
    </Paper>
    {/* <Grid item md={3}></Grid> */}
    </Grid>

        </>
    )
}
