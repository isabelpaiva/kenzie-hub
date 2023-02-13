import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRegister = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 60px 12px 60px 12px;
  margin-bottom: -40px;

  h2 {
    color: var(--pink-primary);
  }



  button {
    background-color: #212529;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px;
  }

  @media (min-width: 700px) {
    max-width: 500px;
    margin: 0 auto;
    padding: 60px 0 60px 0;
  }

  @media (max-width: 350px) {
    padding: 60px 6px 60px 6px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--grey-01);
`;

export const StyledSection = styled.section`
  color: var(--grey-0);
  background-color: #212529;
  text-decoration: none;
  min-width: 200px;
  font-size: 14px;
  padding: 34px 18px;
  border-radius: 4px;
  margin-inline: 12px;
  

  div > section h3,
  div > section p {
    text-align: center;
  }

  div > section h3 {
    color: var(--grey-0);
    font-size: 20px;
    margin-bottom: 18px;
  }

  div > section p {
    color: var(--grey-1);
    font-size: 14px;
    margin-bottom: 22px;
  }

  label {
    display: block;
    padding: 4px;
    margin-top: 4px;
  }

  input,
  select {
    width: 100%;
    background: #343b41;
    border: none;
    padding: 12px;
    border-radius: 4px;
    color: var(--grey-0);
  }

  button {
    width: 100%;
    padding-block: 14px;
    margin-top: 12px;
    background-color: #59323f;
    color: var(--grey-01);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 350px) {
    margin-inline: 6px;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;

    
  }

  .errorMessage {
    font-size: 12px;
    color: var(--grey-01);
    margin: 10px 0 20px 0;
    color: var(--pink-primary);
  }
`;
