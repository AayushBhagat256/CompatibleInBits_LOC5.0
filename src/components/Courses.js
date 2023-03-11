import React from 'react'
import Paper from '@mui/material/Paper'
import Navbar from './Navbar'

function Courses() {
    return (
        <div>
            <Navbar/>
            {/* <h1>This is courses</h1> */}
            {/* <div className="courseTitle" style={{textAlign:'center'}}>
                <h1>Photoshop for Photographers - Beginner to Professional</h1>
            </div>
            <div className="course1" style={{display:'flex',justifyContent:'space-around'}}>
            <div className="desc" style={{display:'flex',flexDirection:'column',alignItems:'center',alignSelf:'center',backgroundColor:'pink'}}>
            <div className="coursebreakpoints">
                Learn and Master Photoshop for Photographers - Became Advanced User and Create Outstanding Images!
            </div>
            <div className="stats">
                50,497 students
            </div>
            </div>
            <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qvQie2QP5Vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
            
            <div className="usp" style={{display:'flex',justifyContent:'center'}}>
                <fieldset id='field' style={{ border: '2px solid red',textAlign:'center',width:'65vw' }}>
                    <legend> <h4>After completion you will be able to </h4> </legend>
                    <div className="mainpoints" style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
                    <div className="point1" style={{backgroundColor:'blue',width:'50%'}}>
                        <ul style={{ listStyle: 'none' }}>
                            <li> <span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn everything you need to know about camera raw and processing images</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to work with masks in photoshop</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to work selectively with colors</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to color grade your images</span></li>
                        </ul>
                    </div>
                    <div className="point2" style={{backgroundColor:'greenyellow',width:'50%'}}>
                    <ul style={{ listStyle: 'none' }}>
                            <li> <span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to clean up images professionaly</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to work selectively with lights</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to adjust contrasts on the images</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will lern how to even out skin pores non-destructively</span></li>
                        </ul>
                    </div>
                    </div>
                    
                </fieldset>
            </div> */}
            <div className="courseTitle" style={{textAlign:'center',backgroundColor:'#F5F5DC',width:'100%',height:'auto'}}>
                <h1>Photoshop for Photographers - Beginner to Professional</h1>
            </div>
            <div className="bigbody" style={{display:'flex',marginTop:'-12px',justifyContent:'space-around',alignItems:'center',height:'100%',backgroundColor:'#F5F5DC',width:'100%'}}>
                <div className="beginer" style={{backgroundColor:'yellow',display:'flex',justifyContent:'center',flexDirection:'column'}}><Paper sx={{padding:3,textAlign:'center',justifyContent:'center',alignItems:'center'}} elevation={5}>
                    <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IyR_uYsRdPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="point1" style={{backgroundColor:'#F5F5DC',width:'100%',justifyContent:'center',textAlign:'center',display:'flex'}}>
                        <ul style={{ listStyle: 'none',textAlign:'center' }}>
                            <li> <span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to work with masks in photoshop</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to work with masks in photoshop</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to work selectively with colors</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to color grade your images</span></li>
                        </ul>
                    </div>
                    </Paper></div>
                <div className="advance"style={{backgroundColor:'yellow',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                <Paper sx={{padding:3,textAlign:'center',justifyContent:'center',alignItems:'center'}} elevation={5}>
                    <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_nQKf_Fgk_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="point2" style={{backgroundColor:'#F5F5DC',width:'100%',justifyContent:'center',textAlign:'center',display:'flex'}}>
                    <ul style={{ listStyle: 'none',textAlign:'center' }}>
                            <li> <span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to clean up images professionaly</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to work selectively with lights</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will learn how to adjust contrasts on the images</span></li>
                            <li><span className='tick'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span> <span className='title'>You will lern how to even out skin pores non-destructively</span></li>
                        </ul>
                    </div>
                    </Paper>
                </div>
            </div>
            <br />
            {/* <div className="usp" style={{display:'flex',justifyContent:'center'}}>
                <fieldset id='field' style={{ border: '2px solid red',textAlign:'center',width:'65vw' }}>
                    <legend> <h4>After completion you will be able to </h4> </legend>
                    <div className="mainpoints" style={{display:'flex',justifyContent:'space-around',width:'100%'}}>
                   
                   
                    </div>
                    
                </fieldset>
            </div> */}
        </div>
    )
}

export default Courses
