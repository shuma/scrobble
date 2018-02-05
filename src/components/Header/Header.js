import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.header`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 0 1em;

  @media (max-width: 52em) {
    max-width: 52em;
  }
`;

const Brand = styled.div`
  & > p {
    text-align: center;
  }
  & > h1 {
    text-align: center;
  }
`;

const BrandLocation = styled.p`
  font-family: "SpotifyMedium";
  padding: 2em 0 0.1em;
`;
const BrandName = styled.h1`
  margin: 0 0 1.5em;
  padding: 0 0 1em;
  font-size: 2.5em;
  color: #1a1a1a;
  font-family: "SpotifyBold";

  @media (max-width: 50em) {
    font-size: 2.5em;
  }

  @media (max-width: 44.44em) {
    font-size: 2em;
  }
`;

const Header = ({ location, company }) => (
  <Container>
    <Brand>
      <BrandLocation>{location}</BrandLocation>
      <BrandName>{company}</BrandName>
    </Brand>
  </Container>
);

Header.propTypes = {
  location: PropTypes.string,
  company: PropTypes.string
};

export default Header;
