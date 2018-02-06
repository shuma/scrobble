import React, { Component } from "react";
import moment from "moment";
import ScrobbleApi from "../src/utils/scrobble-api";
import "../src/assets/css/App.css";
import "../src/assets/css/reset.css";

// Components
import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { Scrobble } from "./components/Scrobble";

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
      scrobbles: [newScrobble, ...prevState.scrobbles],
      newScrobble: true
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
   * Mockup data timer
   */
  timeout = mockupdata => {
    setTimeout(() => {
      this.setState(
        prevState => ({
          scrobbles: [mockupdata, ...prevState.scrobbles]
        }),
        () => {
          this.timeout(mockupdata);
        }
      );
    }, 1000);
  };

  render() {
    const { scrobbles, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return [
      <Header
        location="Kungsgatan 17, Stockholm"
        company="Espresso House"
        key="Header"
      />,
      <Scrobble key="PlayedList" data={scrobbles} />
    ];
  }
}

export default App;
