import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import Fakedata from '../../Fakedata/Place'
import './Home.css'

const Home = () => {
    
    return (
        <div className="header">
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img style={{width:'100px'}} src='https://i.ibb.co/9GcFB6q/Logo.png' alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    <li>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">News <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Destination</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
     
      
    </ul>
    
  </div>
</nav>
        <div className="row bg" >
           {
               Fakedata.map(places => <Details key={places.title} places={places}></Details> ) 
           } 
           </div>
           
        </div>
    );
};

export default Home;