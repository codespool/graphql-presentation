import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 90%;
  padding: 10%;
`;

export const Img = ({src}) => <StyledImage src={src} />;
