import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light navbar fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn searchbtn" type="submit">Search</button>
            </form>
            <div class="collapse navbar-collapse rightheder" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><i class="fa fa-shopping-cart cart" aria-hidden="true"></i></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/editProfile"><div className='profilearea'></div></a>
                </li>
                
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
  )
}
