import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import LocationOn from "@material-ui/icons/LocationOn";
import Group from "@material-ui/icons/Group";
import PersonsJoinChip from "./PersonsJoin/PersonsJoinChip";
import BorderColor from "@material-ui/icons/BorderColor";
import ListBillImage from "./ListBillImage";

const styles = theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function BillItemDetail(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <LocationOn />
        </Avatar>
        <ListItemText
          primary="Location"
          secondary="Nhà hàng tiệc nước Rừng Xanh"
        />
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem>
        <Avatar>
          <Group />
        </Avatar>
        <ListItemText
          style={{ color: "rgba(0, 0, 0, 0.87)" }}
          primary="With"
          secondary={<PersonsJoinChip />}
          disableTypography={true}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>
          <BorderColor />
        </Avatar>
        <ListItemText primary="Note" secondary="July 20, 2014" />
      </ListItem>
      <ListItem>
        <Avatar>
          <BorderColor />
        </Avatar>
        <ListItemText
          primary="Bills"
          style={{ color: "rgba(0, 0, 0, 0.87)" }}
          disableTypography={true}
          secondary={<ListBillImage />}
        />
      </ListItem>
    </List>
  );
}

BillItemDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BillItemDetail);
