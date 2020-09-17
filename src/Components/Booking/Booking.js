import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../Home/Home';
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
    const {id} = useParams()
    const product = Fakedata.find(pd => pd.id == id);
   

    const classes = useStyles();
    return (
        <div className="bg-img">
           
           <div class="container  " style={{paddingTop:'150px',paddingBottom:'150px'}}>
  <div class="row">
    <div class="col" style={{color:'white',fontWeight:'900px'}}>
    <br/>
    <h1><b>{product.title}</b></h1>
    <br/>
            <p>{product.description}</p>
    </div>
    <div class="col" >
    <form style={{color:'white'}} >
            <h6>Origin</h6>
            <input type="text" name="" id="" placeholder="starting Location" label="From"/>
            <br />
            <br />
            <h6>Destination</h6>
            <input type="text" name="" id="" placeholder={product.title} label="From"/>
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

            <Link to="/search"><button type="button" class="btn btn-warning btn-lg">Start Booking</button></Link>
            
    </div>
  </div>
 
</div>
            
        
        
            


            
        </div>
    );
};

export default Booking;