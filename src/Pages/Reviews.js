import {
  Avatar,
  Grid,
  makeStyles,
  Paper,
  Typography,
  IconButton
} from "@material-ui/core";
import React from "react";
import faker from "faker";
import background from '../images/background03.jpg'
import {useHistory} from 'react-router-dom'
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    width: 1200,
    backgroundColor:'#B4B4B4'
  },
  quotation: {
    display: "inline-block",
    margin: "0 5px",
  },
  image: {
    display: "block",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));
const Reviews = () => {
    const history=useHistory();
  const classes = useStyles();
  const quoteUp = <span className={classes.quotation}>“</span>;
  const quoteDown = <span className={classes.quotation}>„</span>;
  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Typography variant="h1" color="default" align="center">
          Reviews
        </Typography>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs="auto" alignContent="space-between">
                <Avatar className={classes.image} src={faker.image.people()} />
                <Typography variant="subtitle1">
                  {faker.name.findName()}
                </Typography>
                <Typography variant="inherit">
                  {faker.address.country()}
                </Typography>
              </Grid>

              <Grid item xs="9">
                <Typography variant="h6">
                  {quoteUp} {faker.lorem.sentences()}
                  {quoteDown}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs="auto" alignContent="space-between">
                <Avatar className={classes.image} src={faker.image.avatar()} />
                <Typography variant="subtitle1">
                  {faker.name.findName()}
                </Typography>
                <Typography variant="inherit">
                  {faker.address.country()}
                </Typography>
              </Grid>

              <Grid item xs="9">
                <Typography variant="h6">
                  {quoteUp}
                  {faker.lorem.sentences()} {quoteDown}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs="auto" alignContent="space-between">
                <Avatar className={classes.image} src={faker.image.cats()} />
                <Typography variant="subtitle1">
                  {faker.name.findName()}
                </Typography>
                <Typography variant="inherit">
                  {faker.address.country()}
                </Typography>
              </Grid>

              <Grid item xs="9">
                <Typography variant="h6">
                  {quoteUp}
                  {faker.lorem.sentences()} {quoteDown}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs="auto" alignContent="space-between">
                <Avatar className={classes.image} src={faker.image.people()} />
                <Typography variant="subtitle1">
                  {faker.name.findName()}
                </Typography>
                <Typography variant="inherit">
                  {faker.address.country()}
                </Typography>
              </Grid>

              <Grid item xs="9">
                <Typography variant="h6">
                  {quoteUp}
                  {faker.lorem.sentences()} {quoteDown}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs="auto" alignContent="space-between">
                <Avatar className={classes.image} src={faker.image.animals()} />
                <Typography variant="subtitle1">
                  {faker.name.findName()}
                </Typography>
                <Typography variant="inherit">
                  {faker.address.country()}
                </Typography>
              </Grid>

              <Grid item xs="9">
                <Typography variant="h6">
                  {quoteUp}
                  {faker.lorem.sentences()} {quoteDown}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs="auto" alignContent="space-between">
                <Avatar className={classes.image} src={faker.image.image()} />
                <Typography variant="subtitle1">
                  {faker.name.findName()}
                </Typography>
                <Typography variant="inherit">
                  {faker.address.country()}
                </Typography>
              </Grid>

              <Grid item xs="9">
                <Typography variant="h6">
                  {quoteUp}
                  {faker.lorem.sentences()} {quoteDown}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs="auto" alignContent="space-between">
                <Avatar
                  className={classes.image}
                  src={faker.image.abstract()}
                />
                <Typography variant="subtitle1">
                  {faker.name.findName()}
                </Typography>
                <Typography variant="inherit">
                  {faker.address.country()}
                </Typography>
              </Grid>

              <Grid item xs="9">
                <Typography variant="h6">
                  {quoteUp}
                  {faker.lorem.sentences()} {quoteDown}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            padding: "25px",
          }}
        >
          <IconButton onClick={()=>history.push('/')}><HomeIcon fontSize='large'/></IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reviews;
