import React from 'react'
import Navbar from './Navbar'
import { Button, Grid, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import '../styles/photoprofile.css'

import { useState, useEffect } from 'react';
import { Container } from '@mui/system';
import Tab_photo from './Tab_photo';
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function Photoprofile() {
    const navi = useNavigate()
    const [data,setData]=useState();
    useEffect(() => {

        var bear="Bearer "+localStorage.getItem("access");
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '//127.0.0.1:8000/account/profile/',
            headers: {
                'Authorization':bear
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setData(response.data)
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            });


    }, []);

    const edit=()=>{
        //navi('edit')
        var FormData = require('form-data');
        var data = new FormData();
        data.append('email', data.email);
        data.append('username', data.username);
        
        var config = {
          method: 'put',
        maxBodyLength: Infinity,
          url: '127.0.0.1:8000/account/profile/',
          headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4NTY5NDEzLCJpYXQiOjE2Nzg1NjkxMTMsImp0aSI6IjRmNGM1NjUzNzQ3MTQxZDI5YzY0OWI3ODdjZGZmZDUzIiwidXNlcl9pZCI6MTN9.Hevrb_a8ax-6GfuOlIDIxdnNW4O89q7qEK1Qm1N8Cak', 
            ...data.getHeaders()
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        
    
    }


    return (
        <>
            <Navbar></Navbar>
            {data?(<><Grid container sx={{ display: 'flex' }} className="profile">
                <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        className='image1'
                        alt="pfp"
                        src=""
                        sx={{ width: 300, height: 300 }}
                    />
                </Grid>
                <Grid item md={6} sx={{ justifyContent: 'center' }}>
                    <Typography variant='h3'>
                        {data.username}
                    </Typography>
                    <div className="whitekaro"style={{color:'white'}}>
                    <Typography variant="h6" className='someData' sx={{color:'white'}}>Bio is here Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam aliquid accusantium a labore facilis excepturi blanditiis laborum facere? Eum recusandae repellendus dolores est velit quo dignissimos quos accusantium quidem.</Typography>
                    </div>
                    
                </Grid>
                <Grid item md={12}>
                    <Button variant='outlined' onClick={edit}>
                        Edit
                    </Button>
                </Grid>
            </Grid>
            <hr />
            <Tab_photo></Tab_photo></>):(<><Grid container sx={{ display: 'flex' }} className="profile">
                <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        className='image1'
                        alt="pfp"
                        src=""
                        sx={{ width: 300, height: 300 }}
                    />
                </Grid>
                <Grid item md={6} sx={{ justifyContent: 'center' }}>
                    <Typography variant='h3'>
                        Username
                    </Typography>
                    <Typography variant="h6">Bio is here Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam aliquid accusantium a labore facilis excepturi blanditiis laborum facere? Eum recusandae repellendus dolores est velit quo dignissimos quos accusantium quidem.</Typography>
                </Grid>
                <Grid item md={12}>
                </Grid>
            </Grid>
            <hr />
            <Tab_photo></Tab_photo></>)}
            

        </>
    )
}
