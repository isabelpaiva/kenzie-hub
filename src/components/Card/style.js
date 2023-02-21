import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  padding: 2%;
  border-radius: 4px;
  cursor: pointer;
  .reversed {
    animation: translateNow 0.5s ease;
  }
  :hover {
    border: 1px solid gray;
    transition: 0.4s ease;
    background-color: #343b41;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  h1 {
    color: white;
    font-size: 14.21px;
  }

  p {
    color: #868E96;
    font-size: 12.18px;
  }
`;

export const ContainerTechs = styled.div`
  padding: 2.5%;
  background-color: #212529;
  border-radius: 2px;
`;
