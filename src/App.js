import React, { Component } from "react";
import ScrobbleApi from "../src/utils/scrobble-api";
import "../src/reset.css";
import "../src/App.css";
import { PlayedList } from "./components/Played";
import { Loading } from "./components/Loading";

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

  updateScrobble = newScrobble => {
    newScrobble.time = ScrobbleApi.playDate(newScrobble).toLocaleString();
    this.setState(prevState => ({
      scrobbles: [newScrobble, ...prevState.scrobbles]
    }));
  };

  addTime = scrobble => {
    scrobble.time = ScrobbleApi.playDate(scrobble).toLocaleString();
  };

  render() {
    const { scrobbles, loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          [
            <header className="masthead clear">
              <div className="centered">
                <div className="site-branding">
                  <span className="site-channel">
                    <p>channel</p>
                  </span>
                  <h1 className="site-title">Sunny Organic</h1>
                </div>
              </div>
            </header>,
            <PlayedList data={scrobbles} />
          ]
        )}
      </div>
    );
  }
}

export default App;
