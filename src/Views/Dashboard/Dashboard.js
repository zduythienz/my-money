import React, { Component } from "react";
import TotalAmount from "../../components/Cards/TotalAmount/TotalAmount";
import Profile from "../../components/Cards/Profile/Profile";

import Grid from "@material-ui/core/Grid";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} md={3} sm={6}>
            <Profile />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <TotalAmount />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TotalAmount />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TotalAmount />
          </Grid>
          <Grid item xs={6}>
            <TotalAmount />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TotalAmount />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Dashboard;
