import { Grid } from '@mui/material'
import React from 'react'

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Review() {
  return (
  <>
  <Grid container>
    <Grid item md={3}></Grid>
    <Grid item md={6}>

    <TextField
    placeholder='Enter your reviews'
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Reviews"
        sx={{width:500}}
      />
      <br></br>
      <Button variant="contained">Submit</Button>

    </Grid>
    <Grid item md={3}></Grid>
  </Grid>

    
  </>
  )
}
