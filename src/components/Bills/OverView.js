import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AttachMoney from "@material-ui/icons/AttachMoney";

class OverView extends Component {
  render() {
    return (
      <Card className="card-bill" style={{ height: "268px" }}>
        <CardHeader
          avatar={<AttachMoney color="secondary" />}
          title="Overview"
        />
        <CardContent className="img-center-hor" style={{ height: "144px" }}>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={6} className="img-center-hor">
              <Typography component="p" className="text-center">
                <span className="item-in-month inflow-color">Inflow</span>
                <br />
                <br />
                <span style={{ fontSize: "18px" }}>+23.000.000 đ</span>
              </Typography>
            </Grid>
            <Grid item xs={6} className="img-center-hor">
              <Typography component="p" className="text-center">
                <span className="item-in-month outFlow-color">Outflow</span>
                <br />
                <br />
                <span style={{ fontSize: "18px" }}>-10.000.000 đ</span>
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
export default OverView;
