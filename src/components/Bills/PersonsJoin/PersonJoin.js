import React, { Component } from "react";
import AvatarImage from "../../../Assets/Images/avatar2.jpg";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
class PersonJoin extends Component {
  render() {
    const { peronInfo } = this.props;
    const imgSrc = peronInfo.avatar;
    console.log(imgSrc);

    return (
      <Chip
        style={{ marginRight: "5px", marginBottom: "5px" }}
        avatar={<Avatar alt={peronInfo.name} src={AvatarImage} />}
        label={peronInfo.name}
      />
    );
  }
}
export default PersonJoin;
