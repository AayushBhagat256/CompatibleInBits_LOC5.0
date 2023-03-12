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
import Navbar from './Navbar';
import { useState ,useEffect} from 'react';
import { display } from '@mui/system';
import axios from 'axios';
import Photoprofile from './Photoprofile';
import { Link } from 'react-router-dom';

function CustomerPanel() {
  const [progress, setProgress] = useState(0);
  const [d,setD]=useState();
  const [domain, setDomain] = useState();
  document.addEventListener('contextmenu', event => event.preventDefault());
  const theme = useTheme();
  // const [val,setVal] = useState('')
  // const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  var bear="Bearer "+localStorage.getItem("access")
  const check1 = () => {
    let domain1 = document.getElementById('optlist').value
    console.log(domain1)
    setDomain(domain1);
    display();
  }
  const display = () => {
var data = JSON.stringify({
  "name": "portrait"
});

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: '//127.0.0.1:8000/account/domainspecific/food/',
  headers: { 
    'Authorization': bear, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log((response.data));
  setD(response.data)
})
.catch(function (error) {
  console.log(error);
});

  }
  useEffect(
    () => {
      incrementProgress(90)
      // incrementProgress2(65)
      // incrementProgress3(85)
      // incrementProgress4(50)
      // incrementProgress5(75)
      // incrementProgress6(60)
    }, []
  )
  const incrementProgress = (e) => {
    if (progress < 100) {
      setProgress(e);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container-class'>
        <div className="heading">
          {/* <h1>This is cp</h1> */}
        </div>

        {/* <input type="text" id="myInput" onChange={e=>setVal(e.target.value)} value={val} placeholder="Search for names.."/>
      {names.filter(name => name.includes(val)).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))} */}
        <div className="optionsList">
          <p>Select a domain as per your requirement</p><select name="" id="optlist">
            <option value="food">Food</option>
            <option value="portrait">Portrait</option>
            <option value="coorporate_events">Coorporate events</option>
            <option value="coorporate_headshots">Coorporate Headshots</option>
            <option value="private_events">Private event</option>
          </select>

        </div>
        <button id='apply' onClick={check1}>Apply</button>

      </div>
      
      {d?(<div>

        
      <div className="container-cld">
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', height: '30vh', width: '25vw' }}>
              <Typography component="div" variant="h5">
                <div className="personaldata">
                  <div className="avatar">
                    {/* <Avatar>P</Avatar> */}
                  </div>
                  <div className="name">
                    <h4>{d[0].username}</h4>
                  </div>
                </div>
              </Typography>
              <br></br>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Review
                </Typography> 
                <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button variant='outlined'>
                <Link to='/photoprofile'>Explore</Link>
              </Button>
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
            sx={{ width: 151, marginRight: 5 }}
            image={Image}
            alt="Live from space album cover"
          />
        </Card>
      </div>
      </div>):(<div>ghhh</div>)}

      

    </>
  )
}

export default CustomerPanel
