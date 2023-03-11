// import React, { useState } from 'react'
import '../styles/CustomerPanel.css'
import Image from '../images/homepagepng.png'
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button'

function CustomerPanel() {
    // document.addEventListener('contextmenu', event => event.preventDefault());
    const theme = useTheme();
    // const [val,setVal] = useState('')
    // const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

    const check1 = () => {
        let domain = document.getElementById('optlist').value
        console.log(domain)
    }

    return (
        <>
            <div className='container-class'>
                <div className="heading">
                    <h1>This is cp</h1>
                </div>

                {/* <input type="text" id="myInput" onChange={e=>setVal(e.target.value)} value={val} placeholder="Search for names.."/>
      {names.filter(name => name.includes(val)).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))} */}
                <div className="optionsList">
                    <p>select a option</p><select name="" id="optlist">
                        <option value="dom1">dom1</option>
                        <option value="dom2">dom2</option>
                        <option value="dom3">dom3</option>
                        <option value="dom4">dom4</option>
                        <option value="dom5">dom5</option>
                    </select>

                </div>
                <button onClick={check1}>GEt</button>

            </div>
            <div className="container-cld">
            <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto',height:'30vh',width:'25vw' }}>
          <Typography component="div" variant="h5">
            <div className="personaldata">
                <div className="avatar">
                    {/* <Avatar>P</Avatar> */}
                </div>
                <div className="name">
                    <h4>Name here</h4>
                </div>
            </div>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Review here
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nobis maiores, quisquam aspernatur asperiores culpa deleniti, ab autem adipisci et cum voluptates a molestiae, quos sit repellat? Nihil molestiae fugit accusantium minus. Doloribus, ea.
          </Typography>
          
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Button>Explore more</Button>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton> */}
          
          {/* <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton> */}
          {/* <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 ,marginRight:5}}
        image={Image}
        alt="Live from space album cover"
      />
    </Card>
            </div>


        </>
    )
}

export default CustomerPanel
