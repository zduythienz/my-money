import React, { Component } from "react";

import Route from "../../../../routes";

const rootStyle = {
  //   padding: "20px 3em",
  minHeight: "40vh",
  marginTop: "-7em",
  position: "relative"
};

class SectionMain extends Component {
  render() {
    return (
      <section style={rootStyle}>
        <div className="content-padding-20 white">
          <Route />
        </div>
      </section>
    );
  }
}
export default SectionMain;
