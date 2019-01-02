import React, { Component } from "react";

import ListBills from "../../components/Bills/ListBills";
import OverView from "../../components/Bills/OverView";
import TransactionPerDate from "../../components/Bills/TransactionPerDate";

import Grid from "@material-ui/core/Grid";
class Bills extends Component {
  render() {
    return (
      <div>
        <Grid
          spacing={32}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={8} sm={12}>
            <OverView />
          </Grid>
        </Grid>
        <Grid container spacing={40}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={12}
            sm={12}
          >
            <TransactionPerDate />
            <TransactionPerDate />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Bills;
