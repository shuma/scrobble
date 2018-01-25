import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  handleImageLoaded = () => {
    this.setState({ imageStatus: "loaded" });
  };

  render() {
    const { url, song, artist } = this.props;
    return (
      <img
        src={url}
        alt={`${song} - ${artist}`}
        onLoad={this.handleImageLoaded}
      />
    );
  }
}
export default Image;
