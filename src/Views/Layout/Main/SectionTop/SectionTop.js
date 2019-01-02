import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

import SectionTopBackground from "../../../../Assets/Images/field_dawn_sky_beautiful_scenery_87654_1920x1080.jpg";
import AvatarImage from "../../../../Assets/Images/avatar2.jpg";

const rootStyle = {
  //   padding: "20px 3em",
  minHeight: "40vh",
  backgroundImage: `url(${SectionTopBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
  backgroundRepeat: "no-repeat",
  position: "relative"
};

class SectionTop extends Component {
  render() {
    return (
      <section style={rootStyle}>
        <div className="overlay-background">
          <div className="content-padding-20 white">
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <p>Good Morning zdtz!</p>
              </Grid>
              <Grid item xs={6} className="img-center-hor text-right">
                <Grid item xs={1}>
                  <Badge color="secondary" badgeContent={99}>
                    <MailIcon />
                  </Badge>
                </Grid>
                <Grid item xs={1}>
                  <Avatar
                    alt="Remy Sharp"
                    src={AvatarImage}
                    className="big-avatar"
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}
export default SectionTop;
