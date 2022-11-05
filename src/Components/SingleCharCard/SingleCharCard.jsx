import React, { Component } from "react";
import "./single-char-card.css";

class SingleCharCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {!!this.props.id && (
          <div className="single-char-card">
            <img src={this.props.id.image} alt="asd" />
            <h2> {this.props.id.name} </h2>
          </div>
        )}
      </>
    );
  }
}

export default SingleCharCard;
