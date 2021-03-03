import { Grid, IconButton, makeStyles,Paper, Typography } from '@material-ui/core'
import React from 'react'
import background from '../images/background03.jpg'
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import {useHistory} from 'react-router-dom'
const useStyles=makeStyles(theme=>({
    root:{
      height:'100vh',
      backgroundImage:`url(${background})`
    },
  
  Grid:{
      marginTop:theme.spacing(10)
    },
     
    component:{
      display:'static',
      alignItems:'center',
      padding:theme.spacing(4),
      margin:theme.spacing(6),
      marginTop:theme.spacing(25),
      backgroundColor:'#d4d4d4'
    },
    home:{
      display:'flex',
      justifyContent:'center',
      marginTop:theme.spacing(10)
    }
}))
const Contact = () => {
    const classes=useStyles()
    const History=useHistory()
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" >
          <Paper className={classes.component}>
            <PhoneIphoneIcon fontSize="large" />
            <Typography variant="subtitle1">Call Us</Typography>
            <Typography variant="subtitle2">(123)4567890980</Typography>
          </Paper>
          <Paper className={classes.component}>
            <EmailIcon fontSize="large" />
            <Typography variant="subtitle1">Email Us</Typography>
            <Typography variant="subtitle2">xyzabc@abcdef.com</Typography>
          </Paper>
          <Paper className={classes.component}>
            <InstagramIcon fontSize="large" />
            <Typography variant="subtitle1">Follow Us </Typography>
            <Typography variant="subtitle2">Instagram/abcde_de</Typography>
          </Paper>
          <Paper className={classes.component}>
            <TwitterIcon fontSize="large" />
            <Typography variant="subtitle1">Follow Us </Typography>
            <Typography variant="subtitle2">twitter/abcde_de</Typography>
          </Paper>
        </Grid>
        <div className={classes.home}>
        <IconButton className={classes.home} onClick={()=>History.push('/')}><HomeIcon fontSize='large'/></IconButton>
        </div>
      </div>
    );
}

export default Contact
