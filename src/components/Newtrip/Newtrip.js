import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import React, { useEffect, Component, useState } from 'react'
import { AppBar, Toolbar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { render } from "@testing-library/react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const Newtrip = (props) => {

    // console.log(id)
    // var selectValue;
    const [startpoint, setStartPoint] = useState("")
    const [endpoint, setEndPoint] = useState("")
    const [startdate, setStartDate] = useState("")
    const [enddate, setEndDate] = useState("")
    const [toll_limit, setToll] = useState("")
    const [fuel_limit, setFuel] = useState("")
    const [driver_limit, setDriver] = useState("")
    // const [ids, setIds] = useState([])

    function buttonClicked() {
        console.log('hi')

    }

    function handleChange(e) {
        e.preventDefault();
       
    }
    function handleProjectCreate(e) {
        e.preventDefault();
       
    }
    function handleDialog(e) {
        e.preventDefault()

        console.log(e.target.name1.value)
        console.log(e.target.email.value)
        console.log(this.state.selectedID)
        // await fetch(process.env.REACT_APP_URL + 'api/users/' + this.state.selectedID[0], {
        //   method: 'PUT',
        //   body: JSON.stringify({
        //     data: {
        //       first_name: e.target.name1.value,
        //       email: e.target.email.value,

        //     }
        //   })
        // })



    }
    return (

        <div className="dashboard">

        <div className="card">
          <div style={{ height: 70 }}>
          </div>
          <div className="second_header">
            <Toolbar className="second_header">
              <b>New Trip</b>
            </Toolbar>
            <div style={{ height: 10 }}>
              <Toolbar className="inbetween_header"></Toolbar>
            </div>
            <Toolbar className="second_header">
              
            </Toolbar>

          </div>
          <div style={{width:'50%', paddingLeft:'25%', paddingTop:'-5%'}}>
                <Card >
                    <form onSubmit={handleDialog} style={{ width: '80%', paddingLeft:'10%' }}>
                        <DialogTitle id="form-dialog-title">Trip Details</DialogTitle>
                        <DialogContentText>
                            Please fill in the trip details.
                        </DialogContentText>
                        
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name1"
                            name="name1"
                            label="Start Date"
                            type="text"
                            fullWidth
                            value={startdate} onChange={e => setStartDate(e.target.value)}
                        />
                        <TextField
                            
                            margin="dense"
                            id="email"
                            label="End Date"
                            type="text"
                            name="email"
                            fullWidth
                            value={enddate} onChange={e => setEndDate(e.target.value)}
                        />
                        <TextField
                            
                            margin="dense"
                            id="email"
                            label="Start Point"
                            type="text"
                            name="email"
                            fullWidth
                            value={startpoint} onChange={e => setStartPoint(e.target.value)}
                        />
                        <TextField
                            
                            margin="dense"
                            id="email"
                            label="End Point"
                            type="text"
                            name="email"
                            fullWidth
                            value={endpoint} onChange={e => setEndPoint(e.target.value)}
                        />
                        <TextField
                            
                            margin="dense"
                            id="email"
                            label="Toll Limit"
                            type="text"
                            name="email"
                            fullWidth
                            value={toll_limit} onChange={e => setToll(e.target.value)}
                        />
                        <TextField
                            
                            margin="dense"
                            id="email"
                            label="Fuel Limit"
                            type="text"
                            name="email"
                            fullWidth
                            value={fuel_limit} onChange={e => setFuel(e.target.value)}
                        />
                        <TextField
                            
                            margin="dense"
                            id="email"
                            label="Driver Limit"
                            type="text"
                            name="email"
                            fullWidth
                            value={driver_limit} onChange={e => setDriver(e.target.value)}
                        />

                        {/* <DialogActions> */}
                        <Button color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                        {/* </DialogActions>
                        
                    </DialogContent> */}


                    </form>
                </Card>
                </div>
            </div >
        </div>

    );
}
export default Newtrip;