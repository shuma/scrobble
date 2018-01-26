import React from "react";

const Track = ({
  uri,
  image_url,
  song_name,
  artist_name,
  colors,
  time,
  key
}) => (
  <a href={uri} key={key}>
    <figure className="thumbnail">
      <div
        style={{
          backgroundColor: colors.primary,
          backgroundImage: `url(${image_url}`,
          paddingTop: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%"
        }}
      />
      <span className="playbutton" style={{ backgroundColor: colors.accent }}>
        Play on Spotify
      </span>
    </figure>
    <div className="card-content">
      <h2>{song_name}</h2>
      <p>{artist_name}</p>
      <p className="last-played">{time}</p>
    </div>
  </a>
);

export default Track;
