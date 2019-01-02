import React, { Component } from "react";
import TotalAmount from "../../components/Cards/TotalAmount/TotalAmount";
import Profile from "../../components/Cards/Profile/Profile";
import ListBills from "../../components/ListBills/ListBills";

import Grid from "@material-ui/core/Grid";
class Share extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} md={12} sm={12}>
            <ListBills />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Share;
