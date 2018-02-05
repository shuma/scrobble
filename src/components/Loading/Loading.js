import React from "react";
import styled, { keyframes } from "styled-components";

const rotateForver = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotateForver} 0.75s linear infinite;
  display: inline-block;
  height: 30px;
  width: 30px;
  border: 8px solid rgb(12, 42, 54);
  border-right-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  margin: -15px 0 -15px;
`;

const Loading = () => <Spinner />;

export default Loading;

/**
 * Note to self:
 * CSS animations with @keyframes aren't scoped to a single
 * component but you still don't want them to be global.
 * This is why we export a keyframes helper which will generate a
 * unique name for your keyframes. You can then use that unique name throughout your app.
 */
