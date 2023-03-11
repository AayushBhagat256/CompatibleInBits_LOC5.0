import React from 'react'
import Image from '../images/homepagepng.png'

function Market() {
    return (
        <div>
            <h1>This is a market</h1>
            <div class="card" style={{  width: "23rem" }}>
                <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div class="card" style={{ width: "23rem" }}>
                <img class="card-img-top" src={Image} height={300} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Market
