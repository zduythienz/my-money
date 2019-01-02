import React, { Component } from "react";
import SectionTop from "./SectionTop/SectionTop";
import SectionMain from "./SectionMain/SectionMain";

class Main extends Component {
  render() {
    return (
      <main className="s-layout__content">
        <SectionTop />
        <SectionMain />
      </main>
    );
  }
}
export default Main;
