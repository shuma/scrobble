import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const LinkWrapper = styled.a`
  text-decoration: none;
  color: black;
`;

const Thumbnail = styled.figure`
  position: relative;
  background-color: ${props => props.color};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Cover = styled.div`
  background-image: url(${props => props.coverImg});
  outline: 1px solid transparent;
  padding-top: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 0px;
  animation: ${FadeIn} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const SpotifyPlayButton = styled.span`
  position: absolute;
  bottom: 25px;
  right: 10px;
  background-color: #1ed761;
  background-color: ${props => props.bgColor};
  padding: 0.35rem 1.5rem;
  border-radius: 5em;
  font-size: 12px;
  opacity: 0.8;
  color: #ffffff;
  font-family: "SpotifyBook";
  border-color: transparent;
  -webkit-box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.2em 0.8em rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #1ed761;
  }
`;

const TrackInfo = styled.div`
  padding: 1.4em;
  background-color: #ffffff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const TrackName = styled.h2`
  margin-top: 0;
  margin-bottom: 0.1em;
  font-family: "SpotifyMedium";
  font-size: 1.4em;
  color: #1a1a1a;
`;
const ArtistName = styled.p`
  font-size: 95%;
  font-family: "SpotifyBook";
  color: #666;
  margin-top: 0.4em;
`;

const TimeStamp = styled.p`
  font-size: 80%;
  margin-top: 5px;
  color: #bfbfbf;
  font-family: "SpotifyBook";
  margin-top: 0.7em;
`;

const Track = ({ uri, image_url, song_name, artist_name, colors, time }) => (
  <LinkWrapper href={uri}>
    <Thumbnail color={colors.primary}>
      <Cover coverImg={image_url} />
      <SpotifyPlayButton bgColor={colors.accent}>
        Play on Spotify
      </SpotifyPlayButton>
    </Thumbnail>
    <TrackInfo>
      <TrackName>{song_name}</TrackName>
      <ArtistName>{artist_name}</ArtistName>
      <TimeStamp>{time}</TimeStamp>
    </TrackInfo>
  </LinkWrapper>
);

Track.propTypes = {
  uri: PropTypes.string,
  image_url: PropTypes.string,
  song_name: PropTypes.string,
  colors: PropTypes.object,
  time: PropTypes.string,
  key: PropTypes.string
};

export default Track;
