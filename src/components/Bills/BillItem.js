import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import BillItemDetail from "./BillItemDetail";
import AvatarImage from "../../Assets/Images/avatar2.jpg";

const styles = theme => ({
  root: {
    width: "100%"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class BillItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = () => {
    this.props.handleChange(this.props.billData.id);
  };

  render() {
    const { classes, billData, expanded } = this.props;

    return (
      <ExpansionPanel
        expanded={expanded === billData.id}
        onChange={this.handleChange}
      >
        <ExpansionPanelSummary
          className="img-center-hor"
          expandIcon={<ExpandMoreIcon />}
        >
          <Avatar
            src={AvatarImage}
            className={"small-avatar" + classes.secondaryHeading}
          />

          <Typography className={classes.secondaryHeading}>
            {billData.itemName}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            <span
              className={
                billData.typeFlow === "Inflow"
                  ? "inflow-color"
                  : "outFlow-color"
              }
            >
              {billData.typeFlow === "Inflow" ? "+" : "-"} {billData.amount} đ
            </span>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            spacing={32}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={12} sm={12}>
              <Typography>Transaction detail:</Typography>
              <BillItemDetail />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
export default withStyles(styles)(BillItem);
