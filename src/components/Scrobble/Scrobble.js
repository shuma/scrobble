import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Track from "./Track";

const Container = styled.main`
  margin: 0 auto;
  padding: 0 1em;
  @media screen and (min-width: 52em) {
    max-width: 52em;
  }
`;

const Label = styled.h2`
  margin-bottom: 1em;
  color: #666;
  font-family: "SpotifyMedium";
  font-size: 1em;
`;

const Cards = styled.section`
  @media screen and (min-width: 40em) {
    margin-top: 1.2em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 60em) {
    margin-top: inherit;
  }
`;

const Card = styled.article`
  background: #fff;
  margin-bottom: 2em;
  -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  flex-direction: column;
  border-radius: 3px;
  text-decortion: none;

  @media screen and (min-width: 40em) {
    margin-bottom: 1em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 calc(50% - 0.5em);
    flex: 0 1 calc(50% - 0.5em);
    /* width: calc(50% - 1em); */
    transition: all 0.1s ease-in-out;
  }

  @media screen and (min-width: 60em) {
    margin-bottom: 2em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 calc(33% - 0.5em);
    flex: 0 1 calc(33% - 0.5em);
    /* width: calc(33% - 1em); */
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
      0 8px 15px rgba(0, 0, 0, 0.07);
    transition: all 0.1s ease-in-out;
    z-index: 9999;
  }
  & > a {
    color: #000;
  }
`;

const Scrobble = ({ data }) => (
  <Container>
    <Label>Recently played songs</Label>
    <Cards>
      {data.map(data => {
        const artist_name = data.artists.map(artist => artist.name).join(", ");
        const { uri, image_url, song_name, time, colors, id } = data;
        return (
          <Card key={id}>
            <Track
              uri={uri}
              image_url={image_url}
              song_name={song_name}
              artist_name={artist_name}
              colors={colors}
              time={time}
            />
          </Card>
        );
      })}
    </Cards>
  </Container>
);

Scrobble.propTypes = {
  data: PropTypes.array
};

export default Scrobble;
