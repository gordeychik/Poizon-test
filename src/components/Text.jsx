import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
`;

const Underline = styled.span`
  border-bottom: 2px solid black;
  animation: ${blink} 1s ease-in-out infinite;
`;

export const Text = ({ text, userInput }) => {
  return (
    <div style={{ position: 'relative', whiteSpace: 'pre-wrap' }}>
      {text.split('').map((char, index) => {
        let color = 'grey';
        if (userInput.length > index) {
          color = userInput[index] === char ? 'white' : 'red';
        }
        return (
          <span key={index} style={{ color }}>
            {index === userInput.length ? <Underline>{char}</Underline> : char}
          </span>
        );
      })}
    </div>
  );
};