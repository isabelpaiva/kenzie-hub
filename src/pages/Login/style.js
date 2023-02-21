import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginSection = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--pink-primary);
  font-size: 20px;
  margin-bottom: 18px;

  @media (min-width: 700px) {
    font-size: 24px;
  }
`;

export const LoginForm = styled.form`
  color: var(--grey-0);
  background-color: #212529;
  min-width: 320px;
  font-size: 14px;
  padding: 34px 18px;
  border-radius: 4px;
  margin-inline: 12px;

  h2 {
    color: var(--grey-0);
    text-align: center;
  }

  .notAccountYet {
    text-align: center;
    margin-bottom: 18px;
    color: var(--grey-01);
    font-size: 12px;
  }

  button {
    width: 100%;
    margin-bottom: 34px;
    padding-block: 10px;
    border-radius: 4px;
    border: none;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  .registerButton {
    width: 100%;
    padding-block: 10px;
    border-radius: 4px;
    border: none;
    text-decoration: none;
    text-align: center;
    margin-bottom: 0px;
    font-weight: bold;
    color: white;
  }

  a {
    color: white;
  }

  .errorMessage {
    font-size: 12px;
    color: var(--negative-toastify);
    margin: 10px 0 20px 0;
    color: var(--negative-toastify);
  }

  .inputEmail,
  .inputPass {
    display: block;
    margin-bottom: 14px;
    text-align: left;
    width: 100%;
    padding: 12px;
    background-color: #343b41;
    color: var(--grey-01);
    border-radius: 4px;
    padding-inline: 4px;
    outline: none;
    border: 1px solid var(--grey-01);
  }

  .inputEmail::placeholder,
  .inputPass::placeholder {
    color: var(--grey-01);
  }

  .loginButton {
    margin-top: 8px;
    background-color: var(--pink-primary);
    color: var(--grey-01);
    cursor: pointer;
  }

  .registerButton {
    background-color: var(--grey-1);
    color: var(--grey-01);
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    min-width: 400px;
  }
`;
