import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import AvatarImage from "../../Assets/Images/avatar2.jpg";

class ListBillImage extends Component {
  render() {
    const tileData = [
      {
        img: AvatarImage,
        title: "Image",
        author: "author",
        cols: 2,
        id: 1
      },
      {
        img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
        title: "Image",
        author: "author",
        cols: 2,
        id: 2
      }
    ];
    return (
      <div>
        <GridList>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
export default ListBillImage;
