import React from "react";

const PlayedList = props => {
  return [
    <main className="centered">
      <h2 className="playhistory-label">Recently played songs</h2>
      <div className="centered">
        <section className="cards">
          {props.data.map((data, index) => {
            let artist_name = data.artists
              .map(artist => artist.name)
              .join(", ");
            let { uri, image_url, song_name, time } = data;
            return (
              <article className="card">
                <a href={uri}>
                  <figure className="thumbnail">
                    <img
                      src={image_url}
                      alt={`${song_name} - ${artist_name}}`}
                    />
                  </figure>
                  <div className="card-content">
                    <h2>{song_name}</h2>
                    <p>{artist_name}</p>
                    <p className="last-played">{time}</p>
                  </div>
                </a>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  ];
};

export default PlayedList;
