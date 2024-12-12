import styled from 'styled-components';

export const StyledImage = styled.img`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  border-radius: 50%;
`;
