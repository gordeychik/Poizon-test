import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  display: flex;
  aign-items: center;
  gap: 30px;
  margin-top: 20px;
  font-size: 1.2em;
`;

const StatsErrors = styled.div`
  color: red;
`;

const StatsWpm = styled.div`
  color: yellow;
`;

export const Stats = ({ errors, wpm }) => {
  return (
    <StatsContainer>
      <StatsErrors>Errors: {errors}</StatsErrors>
      <StatsWpm>WPM: {wpm}</StatsWpm>
    </StatsContainer>
  );
};
