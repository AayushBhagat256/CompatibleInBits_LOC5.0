import React from 'react'
import Image from '../images/homepagepng.png'
// import Grid from '@mui/material/Grid'
// import Container from '@mui/material/Container'

function Market() {
    return (
        <div>
            <h1>This is a market</h1>
            {/* <Container> */}
            {/* <Grid container spacing={4} > */}
            {/* <Grid item xs={12} md={3}> */}
            {/* <Item> */}
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{ width: "18rem" }}>
                        <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            



        </div>
    )
}

export default Market
