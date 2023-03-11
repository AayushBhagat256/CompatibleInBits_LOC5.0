import React from 'react'
import Navbar from './Navbar'
import { Grid, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import '../styles/photoprofile.css'
import { Container } from '@mui/system';
import Tab_photo from './Tab_photo';


export default function Photoprofile() {
    return (
        <>
            <Navbar></Navbar>
            <Grid container sx={{ display: 'flex' }}>
                <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        className='image1'
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 300, height: 300 }}
                    />
                </Grid>
                <Grid item md={6} sx={{ justifyContent: 'center' }}>
                    <Typography variant='h3'>
                        Username
                    </Typography>
                    <Typography variant="h6">Bio is here Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam aliquid accusantium a labore facilis excepturi blanditiis laborum facere? Eum recusandae repellendus dolores est velit quo dignissimos quos accusantium quidem.</Typography>
                </Grid>
                <Grid item={12}></Grid>
            </Grid>
            <hr />
            <Tab_photo></Tab_photo>

        </>
    )
}
