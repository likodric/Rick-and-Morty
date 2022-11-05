import React, { Component } from "react";
import "./home-page.css";
import Card from "../../Components/Card/Card.jsx";
import Pagination from "../../Components/Pagination/Pagination";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home-page">
        <Pagination />
        <div className="cards-wrapper">
          {this.props.characters.map((e, i) => (
            <Card
              name={e.name}
              image={e.image}
              key={i}
              setSelectedChar={this.props.setSelectedChar}
              id={e.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
