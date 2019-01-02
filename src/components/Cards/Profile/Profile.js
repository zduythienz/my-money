import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Grid from "@material-ui/core/Grid";

import PersonOutline from "@material-ui/icons/PersonOutline";
import AvatarImage from "../../../Assets/Images/avatar2.jpg";

const styles = {
  card: {
    maxWidth: 400,
    color: "black"
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
};

class Profile extends Component {
  render() {
    const { card } = styles;
    return (
      <Card className={card}>
        <CardHeader
          avatar={<PersonOutline color="primary" />}
          title="Profile"
        />
        <CardContent>
          <Grid item xs={12} className="img-center-hor">
            <Avatar
              src={AvatarImage}
              style={{ width: "80px", height: "80px" }}
            />
          </Grid>
          <Grid item xs={12} className="img-center-hor">
            <Typography variant="h6" component="h2">
              zdtz
            </Typography>
          </Grid>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
export default Profile;
