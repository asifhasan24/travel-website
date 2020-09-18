import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fakedata from '../../Fakedata/Place'
import './booking.css'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


const Booking = (props) => {
    const { id } = useParams()
    const product = Fakedata.find(pd => pd.id == id);


    const classes = useStyles();
    return (

        <div className="bg-img">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><img style={{ width: '100px' }} src='https://i.ibb.co/9GcFB6q/Logo.png' alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/home">Home </a>
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

            <div class="container  " style={{ paddingTop: '150px', paddingBottom: '150px' }}>
                <div class="row">
                    <div class="col" style={{ color: 'white', fontWeight: '900px' }}>
                        <br />
                        <h1><b>{product.title}</b></h1>
                        <br />
                        <p>{product.description}</p>
                    </div>
                    <div class="col" >
                        <form style={{ color: 'white' }} >
                            <h6>Origin</h6>
                            <input type="text" name="from" id="" placeholder="starting Location" required />
                            <br />
                            <br />
                            <h6>Destination</h6>
                            <input type="text" name="to" id="" placeholder={product.title} required />
                        </form>
                        <br />



                        <form className={classes.container} noValidate>

                            <TextField
                                id="date"
                                label="From"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,

                                }}

                            />
                            <TextField
                                id="date"
                                label="To"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>

                        <br />

                        <Link to={`/search?id=${id}`}><button type="button" class="btn btn-warning btn-lg">Start Booking</button></Link>

                    </div>
                </div>

            </div>







        </div>
    );
};

export default Booking;