import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css'



const Details = (props) => {
    const { id, title, imgUrl, description } = props.places;


    return (

        <div className="col-md-4">
            <div class="card ">
                <img style={{ height: '200px' }} src={imgUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <Link to={"/booking/" + id}><button type="button" class="btn btn-warning btn-lg">Booking</button> </Link>
                </div>
            </div>
        </div>



    );
};

export default Details;