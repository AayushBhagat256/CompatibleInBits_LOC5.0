import React from 'react'
import Navbar from './Navbar'
import Image from '../images/coupleImg.png'
import {useNavigate} from 'react-router-dom'


function Explore() {
    const navchal = useNavigate()
    const callApi=()=>{
        console.log("hehe")
        navchal('/photoprofile')
    }
    return (
        <div>
            <Navbar />
            <h1>Explore page</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a  onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>

                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>

                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>

                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>

                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div class="card" style={{ width: '18rem' }}>
                            <a onClick={callApi}><img class="card-img-top" src={Image} alt="Card image cap" /></a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Explore
