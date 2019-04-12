import React, { Component } from "react";
import NavTabs from "../NavTabs/NavTabs";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import "./PortfolioContainer.css";

class Portfolio extends Component {
  state = {
    currentPage: "Welcome"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
 if (this.state.currentPage === "Welcome") {
      return <About />;
    } else if (this.state.currentPage === "Projects") {
      return <Projects />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <div id="nav-bar">
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        </div>
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
