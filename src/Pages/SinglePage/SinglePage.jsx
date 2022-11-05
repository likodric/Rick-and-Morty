import React, { Component } from "react";
import "./single-page.css";
import SingleCharCard from "../../Components/SingleCharCard/SingleCharCard.jsx";

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/${this.props.id}`)
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="single-page">
        <SingleCharCard id={this.state.data} />
      </div>
    );
  }
}

export default SinglePage;
