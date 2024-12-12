import styled from "styled-components";

export const View = styled.div`
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;


    @media (max-width: 800px) {
        width: 90%;
        font-size: 14px;
  }
`
export const ViewRow = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Duas colunas */
    gap: 10px;
    
  }
`
export const Box = styled.div`
    flex: 1;
    height: 100px;
    display: flex;
    background-color: #2F2F2F;
    border-radius: 10px;
    color: white;
    text-align: center;
    align-items: center;
    padding:5px 5px;
    cursor: pointer;

    @media (max-width: 800px) {
        font-size: 14px;
        padding: 5px 10px;
  }
`
export const Apresentation = styled.div`
   width: 100%;
   color: white;
   margin-bottom: -30px;
   text-align: center;
   font-weight: 300;
`

