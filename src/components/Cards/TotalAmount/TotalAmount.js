import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AttachMoney from "@material-ui/icons/AttachMoney";

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

class TotalAmount extends Component {
  render() {
    const { card } = styles;
    return (
      <Card className={card} style={{ height: "268px" }}>
        <CardHeader
          avatar={<AttachMoney color="secondary" />}
          title="Total Transaction"
        />
        <CardContent className="img-center-hor" style={{ height: "144px" }}>
          <Grid container spacing={24}>
            <Grid item xs={6} className="img-center-hor">
              <Typography component="p" className="text-center">
                <span className="amount-in-month outFlow-color">23tr</span>
                <br />
                <span style={{ fontSize: "12px" }}>This month</span>
              </Typography>
            </Grid>
            <Grid item xs={6} className="img-center-hor">
              <Typography component="p" className="text-center">
                <span className="item-in-month inflow-color">140</span>
                <br />
                <span style={{ fontSize: "12px" }}>Items</span>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className="img-center-hor">
          <Button color="secondary">View Detail</Button>
        </CardActions>
      </Card>
    );
  }
}
export default TotalAmount;
