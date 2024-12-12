import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0.5rem 1rem;
  padding-right: 60px;
  border-radius: 20px;
  font-size: 1rem;
  background-color: #2F2F2F;
  color: white;
  border: none;

  &:focus {
    outline: none;
  }
`;


export const Box = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    
    padding: 5px;
    margin-left: -40px;
    background-color: #909090;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
  }

`