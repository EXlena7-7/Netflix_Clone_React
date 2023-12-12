import { Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import avatar_netflix from '../images/avatar_netflix.jpg'
import Plans from '../components/Plans';
import {NetflixButton} from '../styled/stykedcomponents';

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header/>
      <Typography variant='h3'>Edit Profile</Typography>
      
        <div className={classes.info}>
          <img src={avatar_netflix} alt='avatar'/>
            <div className={classes.details}>
              <div className={classes.plans}>
              <Typography variant="h6">email usuario</Typography>
              <Typography className={classes.plansText} variant="h5">Plans</Typography>
              <Plans cost={7.99}>Netflix Basic</Plans>
              <Plans cost={11.99}>Netflix Standard</Plans>
              <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
              <NetflixButton wide="fullWidth">Sign Out</NetflixButton>
            </div>
          </div>
        </div>
      
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
  root:{
    color:"#fff",
    minHeight:"100vh",
    width:"100vw",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  info:{
    width:"80%",
    display:"flex",
    "& img":{
      height:"100px",
      [theme.breakpoints.down("xs")]:{
        display:"none"
      }
     }
    },
  
    details:{
      width:"100%",
      marginLeft:theme.spacing(3),
      "& h6":{
        backgroundColor:"#aaa",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize:"18px",
      },
    },
    plans:{
      width:"100%",
    },
    plansText:{
      borderBottom:"1px solid lightgray"
    }
  
}));

export default Profile