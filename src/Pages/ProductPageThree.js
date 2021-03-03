import {
  Container,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
  IconButton
} from "@material-ui/core";
import React from "react";
import imageThree from "../images/image03me.jpg";
import HomeIcon from "@material-ui/icons/Home";
import background from '../images/background03.jpg'
const useStyles = makeStyles((theme) => ({
  media: {
    height:400
  },
}));
const ProductPageOne = (props) => {
    const {history}=props;
  const classes = useStyles();
  const onClick=()=>history.push('/')
  return (
    <React.Fragment>
      <div style={{ backgroundImage:`url(${background})`, height: "100vh" }}>
        <Container maxWidth="sm">
          <Card style={{backgroundColor:'#d4d4d4'}}>
            <CardActionArea>
              <CardMedia className={classes.media} image={imageThree} />
              <CardContent>
                <Typography gutterBottom variant="h6" color="primary">
                  About
                </Typography>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, voluptatum perferendis nesciunt laborum eum nihil
                  neque itaque soluta accusantium blanditiis quia ipsum iste,
                  molestias eligendi quas natus, officia earum iusto at esse
                  expedita molestiae accusamus delectus consequatur. Adipisci,
                  illum vel. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptates assumenda, suscipit placeat iste non sequi
                  quaerat rerum quibusdam ratione sint!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
        <div
          style={{ justifyContent: "center", display: "flex", padding: "25px" }}
        >
          <IconButton onClick={onClick}>
            <HomeIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPageOne;
