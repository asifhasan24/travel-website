import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css'



const Details = (props) => {
    const { id,title,imgUrl,description } = props.places;
    
   
    return (
        <div className="bg-img ">


      
        
        
        
        
        
        <div class="card" >
  <img src={imgUrl} style={{height :'300px',width :'200px'}}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <Link class="btn btn-primary" to={"/booking/"+id}>Booking</Link>
   </div>
</div>
     
        {/* <img style={{height :'300px',width :'200px'}} src={imgUrl} alt=""/>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to={"/booking/"+id}>details</Link> */}
        </div>
    );
};

export default Details;