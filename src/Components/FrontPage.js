import React,{useState} from 'react'
import Cards from './Cards'
import {AppBar, Toolbar,IconButton, Typography, makeStyles, Drawer, List,ListItem, ListItemIcon, ListItemText, Divider, Button,} from '@material-ui/core'
import DehazeIcon from "@material-ui/icons/Dehaze";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InfoIcon from "@material-ui/icons/Info";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import {useAuth} from '../Providers/UserProviders'
import GroupIcon from "@material-ui/icons/Group";
import background from '../images/background03.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
  },
  image: {
    height: 140,
    width: 200,
  },
  drawer: {
    width: 240,
     flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    backgroundColor:'#d4d4d4'
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
     ...theme.mixins.toolbar,
     justifyContent: "flex-end",
  },
  closeButton:{
    minWidth:0,
    
  },
  dialogWrapper:{
    padding:theme.spacing(2),
    position:'absolute',
    top:theme.spacing(15)
  },
  dialogTitle:{
    paddingRight:'0px'
  },
   form: {
    width: '100%', 
    marginTop: theme.spacing(1)
},
 submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Product Website "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

    const FrontPage = (props) => {
      const {history}=props;
      const classes = useStyles();
      const {Logout}=useAuth()

    
    const [open,setOpen]=useState(false)
   

    
    const handleDrawerOpen=()=>{
        setOpen(true)
    }
    const handleDrawerClose=()=>{
        setOpen(false)
    }
    
    const handleLogout=()=>{
        Logout()
        history.push('/login')
    }
  
 

    const ItemList = [
      {
        text: "About",
        icon: <InfoIcon fontSize="large" />,
        onClick:()=>history.push('/about')
      },
      {
        text: "Contact",
        icon: <PermContactCalendarIcon fontSize="large" />,
        onClick:()=>history.push('/contact')
      },
      {
        text:'Reviews',
        icon: <GroupIcon fontSize='large'/>,
        onClick:()=>history.push('/review')
      }
    ];
    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar color="default" position="static">
            <Toolbar>
              <IconButton
                color="default"
                edge="start"
                className={classes.menuButton}
                onClick={handleDrawerOpen}
              >
                <DehazeIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Home Page
              </Typography>
              <Button color='default' variant='outlined' onClick={handleLogout} >Logout</Button>
            </Toolbar>
          </AppBar>
        </div> 

        <div style={{ backgroundImage:`url(${background})`, height: "100vh" }}>
          <Cards history={history} />
          <Copyright/>
        </div>

        <div>
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon fontSize="large" />
              </IconButton>
            </div>
            <Divider />
            {ItemList.map((item) => {
              const { text, icon, onClick } = item;
              return (
                <List key={text}>
                  <ListItem button onClick={onClick}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </List>
              );
            })}
          </Drawer>
        </div>
        </React.Fragment>
        
    );
}

export default FrontPage
