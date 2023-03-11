import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState,useEffect } from 'react';

export default function Navbar() {

    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if(localStorage.getItem('access'))
        {
            setIsDisabled(false);
        }
      }, []);
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <Button disabled={isDisabled}>
                                    Courses
                                </Button>
                            </li>
                            <li class="nav-item">
                            <Button disabled={isDisabled}>
                                <Link to='/market'>
                                Marketplace
                                </Link>
                                </Button>
                            </li>
                            <li class="nav-item">
                                <Link to="/login">
                                    <a class="nav-link active" aria-current="page" >Login</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
