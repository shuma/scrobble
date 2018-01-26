import React from "react";
import Track from "./Track";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
const PlayedList = props => {
  return [
    <main className="centered" key="PlayedList">
      <h2 className="playhistory-label">Recently played songs</h2>
      <div className="centered">
        <section className="cards">
          {props.data.map((data, index) => {
            let artist_name = data.artists
              .map(artist => artist.name)
              .join(", ");
            let { uri, image_url, song_name, time, colors } = data;
            return (
              <ReactCSSTransitionGroup
                transitionName="anim"
                transitionAppear={true}
                transitionAppearTimeout={5000}
                transitionEnter={false}
                transitionLeave={false}
                component="article"
                className="card"
                key={index}
              >
                <Track
                  uri={uri}
                  image_url={image_url}
                  song_name={song_name}
                  artist_name={artist_name}
                  colors={colors}
                  time={time}
                  key={index}
                />
              </ReactCSSTransitionGroup>
            );
          })}
        </section>
      </div>
    </main>
  ];
};

export default PlayedList;
