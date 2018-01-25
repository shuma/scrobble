import React, { Component } from "react";
import moment from "moment";
import ScrobbleApi from "../src/utils/scrobble-api";
import "../src/reset.css";
import "../src/App.css";

// Components
import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { PlayedList } from "./components/Played";

/**
 * Given a DOM element, searches it for <img> tags and checks if all of them
 * have finished loading or not.
 * @param  {Element} parentNode
 * @return {Boolean}
 */
function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll("img");
  for (const img of imgElements) {
    if (!img.complete) {
      console.log("Not complete");
      return false;
    }
  }
  return true;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrobbles: [],
      loading: true
    };
  }
  componentDidMount() {
    const zoneId =
      "U291bmRab25lLCwxano5YXYzcjd5OC9Mb2NhdGlvbiwsMWptZjV1aTBrNWMvQWNjb3VudCwsMW5kbWR6bmF5Z3cv";
    const api = new ScrobbleApi(zoneId);
    api.fetchHistory().then(scrobbles => {
      scrobbles.reverse();
      scrobbles.map(this.addTime);
      this.setState({
        scrobbles: scrobbles,
        loading: false
      });
      api.subscribe(this.updateScrobble);
    });
  }

  /**
   * Update scrobble state with new scrobble and format time date with momment.js
   */
  updateScrobble = newScrobble => {
    newScrobble.time = moment(
      ScrobbleApi.playDate(newScrobble),
      "YYYYMMDD"
    ).fromNow();

    this.setState(prevState => ({
      scrobbles: [newScrobble, ...prevState.scrobbles]
    }));
  };

  /**
   * Add new time object in scrobble item and format it with moment.js
   */
  addTime = scrobble => {
    scrobble.time = moment(
      ScrobbleApi.playDate(scrobble),
      "YYYYMMDD"
    ).fromNow();
  };
  /**
   * Check if img have loaded
   */
  handleImageChange = () => {
    this.setState({
      loading: !imagesLoaded(this.cardsElement)
    });
  };

  render() {
    const { scrobbles, loading } = this.state;
    return (
      <div
        ref={element => {
          this.cardsElement = element;
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          [
            <Header
              location="Kungsgatan 17, Stockholm"
              company="Espresso House"
            />,

            <PlayedList data={scrobbles} />
          ]
        )}
      </div>
    );
  }
}

export default App;
