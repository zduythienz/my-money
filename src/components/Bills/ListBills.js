import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import BillItem from "./BillItem";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

class ListBills extends Component {
  state = {
    expanded: null,
    listBills: [
      {
        id: "1",
        itemName: "General settings",
        amount: "3.000.000",
        typeFlow: "Inflow"
      },
      {
        id: "2",
        itemName: "User",
        amount: "5.000.000",
        typeFlow: "Outflow"
      },
      {
        id: "3",
        itemName: "Advanced settings",
        amount: "13.000.000",
        typeFlow: "Inflow"
      }
      // {
      //   id: "4",
      //   itemName: "Personal data",
      //   amount: "2.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "5",
      //   itemName: "General settings",
      //   amount: "3.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "6",
      //   itemName: "User",
      //   amount: "5.000.000",
      //   typeFlow: "Inflow"
      // }
      // {
      //   id: "7",
      //   itemName: "Advanced settings",
      //   amount: "13.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "8",
      //   itemName: "Personal data",
      //   amount: "2.000.000",
      //   typeFlow: "Inflow"
      // },
      // {
      //   id: "11",
      //   itemName: "General settings",
      //   amount: "3.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "12",
      //   itemName: "User",
      //   amount: "5.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "13",
      //   itemName: "Advanced settings",
      //   amount: "13.000.000",
      //   typeFlow: "Inflow"
      // },
      // {
      //   id: "14",
      //   itemName: "Personal data",
      //   amount: "2.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "15",
      //   itemName: "General settings",
      //   amount: "3.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "16",
      //   itemName: "User",
      //   amount: "5.000.000",
      //   typeFlow: "Inflow"
      // },
      // {
      //   id: "17",
      //   itemName: "Advanced settings",
      //   amount: "13.000.000",
      //   typeFlow: "Outflow"
      // },
      // {
      //   id: "18",
      //   itemName: "Personal data",
      //   amount: "2.000.000",
      //   typeFlow: "Inflow"
      // }
    ]
  };
  handleChange = panel => {
    this.setState({
      expanded: this.state.expanded === panel ? false : panel
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded, listBills } = this.state;
    return (
      <div className={classes.root}>
        {listBills.map(bill => (
          <BillItem
            key={bill.id}
            billData={bill}
            expanded={expanded}
            handleChange={this.handleChange.bind(this)}
          />
        ))}
      </div>
    );
  }
}
export default withStyles(styles)(ListBills);
