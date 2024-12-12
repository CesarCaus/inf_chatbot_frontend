import styled from "styled-components";

export const View = styled.div`
width: 100%;
height: 70vh;
max-height: 80vh;
overflow: auto;
overflow-x: hidden;
display: flex;
flex-direction: column;
padding-top: 10vh;
align-items: center;

scrollbar-width: thin;
scrollbar-color: #878787 #181818;

@media (max-width: 800px) {
  
  width: calc(100% - 40px);
  padding: 0 20px;

  ::-webkit-scrollbar {
    display: none;
  }
}
`;


export const ReceivedMessage = styled.div`
  width: fit-content;
  max-width: 60%;
  height: auto;
  margin: 5px 0;
  padding: 10px 20px;
  background-color: #2F2F2F;
  border-radius: 10px;
  text-align: left;
  align-self: flex-start;
  border-bottom-left-radius: 0;
  margin-left: 50px;
  margin-top: 30px;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  color: white;

  @media (max-width: 800px) {
    max-width: 80%;
    margin-left: 40px;
  }
`;

export const SentMessage = styled.div`
  width: fit-content;
  max-width: 60%;
  height: auto;
  margin: 5px 0;
  padding: 10px 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  text-align: left;
  align-self: flex-end;
  border-bottom-right-radius: 0;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  margin: 20px;

  @media (max-width: 800px) {
    max-width: 72%;
    border-bottom-left-radius: 10px;
    margin-right: 3px;
  }
`;

export const BoxMessages = styled.div`
  width: 50%; 
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    border-bottom-left-radius: 10px;
  }
`

