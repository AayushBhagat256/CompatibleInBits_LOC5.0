import React from 'react'
import Image from '../images/homepagepng.png'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
// import Grid from '@mui/material/Grid'
// import Container from '@mui/material/Container'
import axios from 'axios';

function Market() {
    var bear="Bearer "+localStorage.getItem("access");
    let uri = 'http://127.0.0.1:8000'
    const [mdata,setMdata]=useState([])
    useEffect(() => {
        apicall()
       
        


    }, []);
    const apicall=()=>{
        // var axios = require('axios');
var data = JSON.stringify({
//   "email": "test1@gmail.com",
//   "username": "Aayush",
//   "password": "Pass@12345",
//   "password2": "Pass@12345",
//   "is_photographer": false
});

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: '//127.0.0.1:8000/market/albumlist/',
  headers: { 
    'Authorization': bear, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log((response.data));
  alert('success')
  setMdata(response.data)
})
.catch(function (error) {
  console.log(error);
  alert('error')
});

    }
    
    document.addEventListener('contextmenu', event => event.preventDefault());
    return (
        <div style={{backgroundColor:'#F5F5DC'}}>
            {/* <h1>This is a market</h1> */}
            <Navbar/>
            
            <div className="container" style={{backgroundColor:'#F5F5DC'}}>
                <div className="row">
                    {
                        mdata.map(map=>
                            <div className="col-md-6 my-2">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={uri+map.coverphoto+'/'} height={300} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{map.Title}</h5>
                                <p class="card-text">{map.Description}</p>
                                
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">View Album</button>
                                

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document" >
                                        <div class="modal-content"  >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                
                                            </div>
                                            <div class="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minima fugiat quas sint quam sequi laborum, distinctio cupiditate, corporis itaque officia sunt pariatur?
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reiciendis consectetur, consequatur est rem commodi soluta eius dolor, officia aliquam, aspernatur dolores? Reiciendis ut molestias nesciunt repellat a error commodi incidunt nam libero perspiciatis, neque ullam modi! Exercitationem repellendus, veniam distinctio ducimus officia obcaecati perspiciatis eum, corporis natus quos quasi?
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur ipsam rem ullam ipsum officia autem, impedit, quasi deserunt quis hic repellat voluptatem libero magni magnam vero est assumenda quae temporibus! Dolorem soluta sit delectus perspiciatis quas commodi, velit ea! Possimus veniam quam et dolor facilis officia velit eos blanditiis recusandae magni? Officiis molestias quidem eaque earum? Modi consequuntur deserunt eum repellendus commodi non quia sequi saepe est. Cupiditate quisquam vel necessitatibus dolorem expedita doloremque voluptas consequatur est architecto illo iure dolore, eum enim error itaque sed esse eaque asperiores modi perspiciatis recusandae debitis minus repudiandae ipsa. Ab, molestias quae?
                                                <br />
                                                <img src={uri+map.coverphoto+'/'} alt="" height={200} srcset="" />
                                            </div>
                                            <div class="modal-footer">
                                                {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                                <button type="button" class="BuyNow"  onClick={()=>{console.log("buttonclicked")}}>Buy Now for {map.price+'$'}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                            )
                    }

                    {/* <div className="col-md-3  my-2">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3  my-2">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3  my-2">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  my-2">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  my-2">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>





        </div>
    )
}

export default Market
