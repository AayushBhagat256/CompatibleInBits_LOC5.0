import React from 'react'
import Navbar from './Navbar'
import { Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar';



export default function Photoprofile() {
    return (
        <>
            <Navbar></Navbar>
            <Grid conatiner>
                <Grid item md={6}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 300, height: 300 }}
                    />
                </Grid>

            </Grid>


        </>
    )
}
