import React from 'react';
import styled from 'styled-components';

const InvisibleInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  caret-color: transparent;
`;

export const Input = React.forwardRef(({ value, onChange, autoFocus }, ref) => {
  return (
    <InvisibleInput
      ref={ref}
      type="text"
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
});