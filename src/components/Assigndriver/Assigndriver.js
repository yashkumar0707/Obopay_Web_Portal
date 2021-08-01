import React, { useState, useEffect } from 'react';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
class Assigndriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialog: false
        }
    }
    componentWillMount() {
        this.renderMyData()
        console.log(process.env.REACT_APP_SIDEBAR[0])
    }
    renderMyData = async () => {
        // await fetch(process.env.REACT_APP_URL + 'api/users?page=2')
        //   .then(response => response.json())
        //   .then(json => {
        //     console.log(json.data[0])
        //     this.setState({ data: json.data, rows: json.data })
        //     console.log(this.state.data[0])
        //   })
        var data1 = [{ 'id': 5, 'trip_id': 236, 'start_point': 'Hyd', 'end_point': 'Blr', 'start_date': '12-06-21', 'end_date': '14-06-21', 'req_limit': 20000, 'app_limit': 18000, 'driver_id': 100, 'fuel_limit': 5000, 'toll_limit': 5000, 'driver_limit': 5000 },
        { 'id': 6, 'trip_id': 236, 'start_point': 'Hydrebad', 'end_point': 'Blr', 'start_date': '12-06-21', 'end_date': '14-06-21', 'req_limit': 20000, 'app_limit': 18000, 'driver_id': 100, 'fuel_limit': 5000, 'toll_limit': 5000, 'driver_limit': 5000 },
        { 'id': 7, 'trip_id': 236, 'start_point': 'Hydrebad', 'end_point': 'Blr', 'start_date': '12-06-21', 'end_date': '14-06-21', 'req_limit': 20000, 'app_limit': 18000, 'driver_id': 100, 'fuel_limit': 5000, 'toll_limit': 5000, 'driver_limit': 5000 }]
        this.setState({ data: data1 })
    }
    render() {
        const handleClickOpen = () => {

            this.setState({ openDialog: true })
        };
        //close dialog
        const handleClose = () => {
            this.setState({ openDialog: false })
        };

        const clicked = (e) => {
            console.log("Hi", e);
            this.setState({ openDialog: true })
        };
        //editing details
        const handleDialog = async (e) => {
            e.preventDefault()

            // console.log(e.target.name1.value)
            // console.log(e.target.email.value)
            // console.log(this.state.selectedID)
            // await fetch(process.env.REACT_APP_URL + 'api/users/' + this.state.selectedID[0], {
            //     method: 'PUT',
            //     body: JSON.stringify({
            //         data: {
            //             first_name: e.target.name1.value,
            //             email: e.target.email.value,

            //         }
            //     })
            // })

            //     .then(response => {

            //         if (response.status == 200) {
            //             var data1 = []
            //             for (var i = 0; i < this.state.data.length; i++) {
            //                 if (this.state.data[i].id == this.state.selectedID[0]) {
            //                     console.log(this.state.data[i] + 'yash')
            //                     this.state.data[i].first_name = e.target.name1.value
            //                     this.state.data[i].email = e.target.email.value
            //                 }
            //             }
            //             this.setState({ first_name: '', email: '' })
            //         }
            //     }
            //     )
            handleClose()

        }
        return (
            <div className="dashboard">

                <div className="card">
                    <div style={{ height: 70 }}>
                    </div>
                    <div className="second_header">
                        <Toolbar className="second_header">
                            <b>Home</b>


                        </Toolbar>
                        <div style={{ height: 10 }}>
                            <Toolbar className="inbetween_header"></Toolbar>
                        </div>
                        <Toolbar className="second_header">

                        </Toolbar>

                    </div>
                    <div className="cards">
                        <Grid container spacing={3}>
                            {this.state.data.map(person => (
                                <Grid style={{paddingRight:30}}>
                                    <Card className="root" style={{ width: '200px'}}>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe" className="avatar">
                                                    {person.trip_id}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon onClick={() => clicked(person.id)} />
                                                </IconButton>
                                            }
                                            title={person.first_name}
                                        // subheader="September 14, 2016"
                                        />
                                        {/* <CardMedia
                                            className="media"
                                            image={person.avatar}
                                            title="Paella dish"
                                        /> */}
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Start Point: {person.start_point}


                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                End Point:{person.end_point}


                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                End Date:{person.end_date}


                                            </Typography>
                                        </CardContent>

                                    </Card>

                                </Grid>
                            ))}
                        </Grid>
                        <Dialog open={this.state.openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Driver Details</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please fill in the details to edit the current user.
                                </DialogContentText>
                                <form onSubmit={handleDialog}>
                                    <Select style={{width:200}}
                                        // native
                                        // value={state.age}
                                        // onChange={handleChange}
                                        // label="Age"
                                        // inputProps={{
                                        //     name: 'age',
                                        //     id: 'outlined-age-native-simple',
                                        // }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Driver X</option>
                                        <option value={20}>Driver Y</option>
                                        <option value={30}>Driver Z</option>
                                    </Select>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" color="primary">
                                            Assign
                                        </Button>
                                    </DialogActions>
                                </form>
                            </DialogContent>

                        </Dialog>
                    </div>
                </div>
            </div>
        )
    }
}

export default Assigndriver;