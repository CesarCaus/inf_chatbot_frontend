import styled from 'styled-components';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  width: 400px;
  background-color: #555;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  color: white;
  box-shadow: none;
  margin: 150px auto;

  @media (max-width: 800px) {
    width: 80%;
    font-size: 12px;  
    padding: 15px; 
  }
`;
