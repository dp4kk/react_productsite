import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography,Grid, CardActions,Button} from '@material-ui/core'
import image01sm from '../images/image01sm.jpg'
import image02sm from '../images/image02sm.jpg'
import image03sm from '../images/image03sm.jpg'


const useStyles=makeStyles(theme=>({
    root:{
        
        maxWidth:300,
        margin:theme.spacing(12),
        backgroundColor:'#d4d4d4'
    },
    media:{
        height:200
    },
    card:{
      padding:theme.spacing(2)
    }
}))
const Cards = ({history}) => {
    
    const classes=useStyles();
    
    const clickOne=()=>{
        history.push('./one')
    }
    const clickTwo=()=>{
        history.push('./two')
    }
     const clickThree = () => {
       history.push("./three");
     };
    
    return (
      <div className={classes.card}>
        <Grid container>
         
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={image01sm} />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Product
                  </Typography>
                  <Typography variant="subtitle2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, dolor.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary" size="small" onClick={clickOne}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          
          
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image02sm}
                  title="Product image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Product
                  </Typography>
                  <Typography variant="subtitle2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, porro.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={clickTwo}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          
          
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image03sm}
                  title="Product image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Product
                  </Typography>
                  <Typography variant="subtitle2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, dolor.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={clickThree}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
         
        </Grid>
      </div>
    );
}

export default Cards
