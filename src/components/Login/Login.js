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
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers'; 
const Login = (props) => {

    // console.log(id)
    // var selectValue;
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

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
        window.location.href="/dashboard"
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

        

        <div className="card">
          <div style={{ height: 70 }}>
          </div>
          {/* <div className="second_header">
            <Toolbar className="second_header">
              <b>New Trip</b>
            </Toolbar>
            <div style={{ height: 10 }}>
              <Toolbar className="inbetween_header"></Toolbar>
            </div>
            <Toolbar className="second_header">
              
            </Toolbar>

          </div> */}
          <div style={{width:'50%', paddingLeft:'15%', paddingTop:'-5%'}}>
                <Card >
                    <form onSubmit={handleDialog} style={{ width: '80%', paddingLeft:'10%' }}>
                        <DialogTitle id="form-dialog-title">Login Details</DialogTitle>
                        <DialogContentText>
                            Please fill in the login details.
                        </DialogContentText>
                        
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name1"
                            name="name1"
                            label="Username"
                            type="text"
                            fullWidth
                            value={username} onChange={e => setUsername(e.target.value)}
                        />
                        <TextField
                            
                            margin="dense"
                            id="email"
                            label="Password"
                            type="password"
                            name="email"
                            fullWidth
                            value={password} onChange={e => setPassword(e.target.value)}
                        />
                      
                      
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                        {/* </DialogActions>
                        
                    </DialogContent> */}


                    </form>
                </Card>
                </div>
            </div >
        

    );
}
export default Login;