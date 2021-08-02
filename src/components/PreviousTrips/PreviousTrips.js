import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import './Dashboard.css'
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { withStyles } from "@material-ui/core/styles";
import { dark } from '@material-ui/core/styles/createPalette';
import Divider from '@material-ui/core/Divider';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const useStyles = makeStyles({
  colCell: {
    color: red[500]
  }
});
class PreviousTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      openDialog: false,
      id: '',
      selectedItems: 0,
      selectedID: '',
      alignment: 'card',
      email: '',
      first_name: '',
      columns: [
        { field: 'trip_id', headerName: 'Trip ID', width: 150 },
        { field: 'start_point', headerName: 'Start Point', width: 150 },
        { field: 'end_point', headerName: 'End Point', width: 150 },
        {
          field: 'start_date',
          headerName: 'Start Date',
          width: 150
        },
        {
          field: 'end_date',
          headerName: 'End Date',
          width: 150
        },
        {
          field: 'req_limit',
          headerName: 'Req Limit',
          width: 150
        },
        {
          field: 'app_limit',
          headerName: 'App Limit',
          width: 150
        }
      ],

      rows: []
    }
  }

  //fetching the API data on page load
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
    var data1 = [{ 'id': 5, 'trip_id': 236, 'start_point': 'Hydrebad', 'end_point': 'Bangalore', 'start_date': '12-06-21', 'end_date': '14-06-21', 'req_limit': 20000, 'app_limit': 18000, 'driver_id': 100, 'fuel_limit': 8000, 'toll_limit': 7000, 'driver_limit': 5000 },
    { 'id': 6, 'trip_id': 237, 'start_point': 'Mumbai', 'end_point':'Delhi', 'start_date': '15-06-21', 'end_date': '17-06-21', 'req_limit': 20000, 'app_limit': 18000, 'driver_id': 100, 'fuel_limit': 8000, 'toll_limit': 7000, 'driver_limit': 5000 },
    { 'id': 7, 'trip_id': 238, 'start_point': 'Kolkata', 'end_point': 'Chennai', 'start_date': '17-06-21', 'end_date': '19-06-21', 'req_limit': 20000, 'app_limit': 18000, 'driver_id': 100, 'fuel_limit': 8000, 'toll_limit': 7000, 'driver_limit': 5000 }] 
    this.setState({ data: data1 })
  }
  render() {
    const { classes } = this.props;
    const displayDesktop = () => {
    };

    const clicked = (e) => {
      console.log("Hi", e);
      this.setState({ id: e })
    };

    const handleClick = (e) => {
      console.log('yash', e.selectionModel)
      this.setState({ selectedItems: e.selectionModel.length, selectedID: e.selectionModel })
    }
    const handleAlignment = (event, newAlignment) => {
      this.setState({ alignment: newAlignment })
      console.log(newAlignment)
    };

    //deleting an element
    const deleteElement = () => {
      console.log(this.state.selectedID)
      fetch(process.env.REACT_APP_URL + 'api/users/' + this.state.selectedID[0], {
        method: 'DELETE'
      })
        .then(response => {
          console.log(response.status)

          if (response.status == 204) {
            var data1 = []
            for (var i = 0; i < this.state.data.length; i++) {
              if (this.state.data[i].id == this.state.selectedID[0]) {
                console.log(this.state.data[i])
              }
              else {
                data1.push(this.state.data[i])
              }
            }
            this.setState({ data: data1 })
          }
        }
        )
    }

    //edit dialog
    const handleClickOpen = () => {

      this.setState({ openDialog: true })
    };
    //close dialog
    const handleClose = () => {
      this.setState({ openDialog: false })
    };
    //editing details
    const handleDialog = async (e) => {
      e.preventDefault()

      console.log(e.target.name1.value)
      console.log(e.target.email.value)
      console.log(this.state.selectedID)
      await fetch(process.env.REACT_APP_URL + 'api/users/' + this.state.selectedID[0], {
        method: 'PUT',
        body: JSON.stringify({
          data: {
            first_name: e.target.name1.value,
            email: e.target.email.value,

          }
        })
      })

        .then(response => {

          if (response.status == 200) {
            var data1 = []
            for (var i = 0; i < this.state.data.length; i++) {
              if (this.state.data[i].id == this.state.selectedID[0]) {
                console.log(this.state.data[i] + 'yash')
                this.state.data[i].first_name = e.target.name1.value
                this.state.data[i].email = e.target.email.value
              }
            }
            this.setState({ first_name: '', email: '' })
          }
        }
        )
      handleClose()

    }


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    return (
      <div className="dashboard">

        <div className="card">
          <div style={{ height: 70 }}>
          </div>
          <div className="second_header">
            <Toolbar className="second_header">
              <b>Current Trip</b>
            </Toolbar>
            <div style={{ height: 10 }}>
              <Toolbar className="inbetween_header"></Toolbar>
            </div>
            <Toolbar className="second_header">
              {this.state.selectedItems == 1 &&
                <div className="icons_header">
                  {/* <Tooltip title="Edit">
                    <EditIcon style={{ paddingRight: 10 }} ></EditIcon>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteIcon onClick={deleteElement} style={{ paddingRight: 10 }}></DeleteIcon>
                  </Tooltip> */}
                  <Tooltip title="View" onClick={handleClickOpen}>
                    <VisibilityIcon></VisibilityIcon>
                  </Tooltip>
                </div>
              }
              {this.state.selectedItems > 1 &&
                <div>
                  <DeleteIcon onClick={deleteElement} className="icons"></DeleteIcon>
                </div>
              }
            </Toolbar>

          </div>


          {/* {this.state.alignment == 'card' &&
            <div className="cards">
              <Grid container spacing={3}>
                {this.state.data.map(person => (
                  <Grid>
                    <Card className="root" >
                      <CardHeader
                        avatar={
                          <Avatar aria-label="recipe" className="avatar">
                            {person.first_name[0]}
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
                      <CardMedia
                        className="media"
                        image={person.avatar}
                        title="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          This impressive paella is a perfect party dish and a fun meal to cook
                          together with your guests. Add 1 cup of frozen peas along with the
                          mussels, if you like.

                        </Typography>
                      </CardContent>

                    </Card>

                  </Grid>
                ))}
              </Grid>
            </div>} */}
          {/* {this.state.alignment == 'table' && */}
          <div className="width-card">
            <div style={{ height: 400, width: '95%', paddingLeft: '2%' }}>
              <DataGrid rows={this.state.data} id={Math.random()} columns={this.state.columns} pageSize={5} checkboxSelection onSelectionModelChange={handleClick} className={classes.colCell} />
              <Dialog open={this.state.openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" style={{backgroundColor:'#243C84', color:'white'}}>Driver Details</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                   Details of the driver and the funds remaining.
                  </DialogContentText>
                  <form onSubmit={handleDialog}>
                    {/* <TextField
                      autoFocus
                      margin="dense"
                      id="name1"
                      name="name1"
                      label="First Name"
                      type="text"
                      fullWidth
                      value={this.state.first_name}
                      onChange={e => this.setState({first_name:e.target.value})}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="email"
                      label="Email Address"
                      type="email"
                      name="email"
                      fullWidth
                      value={this.state.email}
                      onChange={e => this.setState({email:e.target.value})}
                    /> */}
                    <List>
                      <ListItem button>
                        <ListItemText primary="Driver ID" secondary={this.state.data[0].driver_id } />
                      </ListItem>
                      <Divider />
                      <ListItem button>
                        <ListItemText primary="Fuel Limit | Remaining" secondary={this.state.data[0].fuel_limit+ "  | 4000"} />
                      </ListItem>
                      <Divider />
                      <ListItem button>
                        <ListItemText primary="Toll Limit | Remaining" secondary={this.state.data[0].toll_limit+ "  | 4000"} />
                      </ListItem>
                      <Divider />
                      <ListItem button>
                        <ListItemText primary="Driver Limit | Remaining" secondary={this.state.data[0].driver_limit+ "  | 4000"} />
                      </ListItem>
                      <Divider />
                    </List>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                      {/* <Button type="submit" color="primary">
                        Edit
                      </Button> */}
                    </DialogActions>
                  </form>
                </DialogContent>

              </Dialog>
            </div>
          </div>
          {/* } */}
          <Grid item xs={12}>
        </Grid>
        </div>
      </div>

    )
  }
}


export default withStyles(useStyles, { withTheme: true })(PreviousTrips);
