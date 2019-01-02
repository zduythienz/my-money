import React, { Component } from "react";
import AvatarImage from "../../../Assets/Images/avatar2.jpg";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PersonJoin from "./PersonJoin";

class PersonsJoinChip extends Component {
  state = {
    listPersons: [
      {
        id: "1",
        name: "Phương",
        avatar: "../../../Assets/Images/avatar2.jpg"
      },
      {
        id: "2",
        name: "Thiện",
        avatar: "../../../Assets/Images/avatar2.jpg"
      },
      {
        id: "3",
        name: "Thiện",
        avatar: "../../../Assets/Images/avatar2.jpg"
      },
      {
        id: "4",
        name: "Thiện",
        avatar: "../../../Assets/Images/avatar2.jpg"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.listPersons.map(person => (
          <PersonJoin key={person.id} peronInfo={person} />
        ))}
      </div>
    );
  }
}
export default PersonsJoinChip;
