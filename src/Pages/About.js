import { Card, CardMedia, makeStyles, Paper, Typography ,Grid, IconButton  } from '@material-ui/core'
import React from 'react'
import aboutbag from '../images/aboutbag.jpg'
import background from '../images/background03.jpg'
import HomeIcon from "@material-ui/icons/Home";
const useStyles=makeStyles(theme=>({
    paper:{
        maxWidth:'100%',
        height:'100vh',
        backgroundImage:`url(${background})`
    },
    header:{
        padding:theme.spacing(5)
    },
    image:{ 
        maxWidth:800,
       
    },
    media:{
        height:250,
        width:700
    },
    cardCont:{
        display:'flex',
        justifyContent:'center'
    },
    text:{
        padding:theme.spacing(4)
    }
}))
const About = ({history}) => {
    const classes=useStyles()
    const onClick=()=>history.push('./')
    return (
      <Paper className={classes.paper} elevation={5}>
        <div className={classes.header}>
          <Typography variant="h2" align="center" gutterBottom>
            About Us
          </Typography>
        </div>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item>
            <Card className={classes.image}>
              
                  <CardMedia image={aboutbag} className={classes.media} />
                
            </Card>
          </Grid>
        </Grid>
            <div className={classes.text}>
            <Typography variant='h6' align='center' color='textSecondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quae fuga consequuntur architecto neque aliquid temporibus numquam, sed nulla itaque facilis, earum nemo suscipit vero dolorem provident officia ex! Asperiores aperiam debitis officia placeat delectus quam ipsa nostrum maiores molestiae magnam, error sint. Earum soluta delectus harum, ipsa esse voluptatem consequatur molestiae est, quisquam exercitationem magnam tempore dicta, placeat commodi incidunt perferendis? Optio, magni libero! Vitae, fuga excepturi sit, repellat obcaecati ratione enim sapiente quos eaque consequuntur ad accusantium fugiat suscipit, cumque tempore! Et praesentium eius reprehenderit alias porro. Ea neque quam velit aspernatur, nulla iusto mollitia temporibus accusantium explicabo.</Typography>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
            <IconButton onClick={onClick}><HomeIcon fontSize='large'/></IconButton>
            </div>
      </Paper>
    );
}

export default About
