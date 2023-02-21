import styled from "styled-components";

export const ModalContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  width: 290px;
  height: 312px;
  border-radius: var(--border-radius-1);
  box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.31);
  animation: transition 1.4s ease;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  top: 80px;
  transition: 0.2s ease;
  z-index: 9999;
  @media (min-width: 375px) {
    width: 330px;
  }
  @media (min-width: 425px) {
    width: 380px;
  }
  @media (min-width: 768px) {
    width: 440px;
  }
  @media (min-width: 1000px) {
    top: 100px;
  }
  /* @keyframes transition {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  } */
`;

export const Div = styled.div`
  background: #343b41;
  border-radius: 3.20867px 3.20867px 0px 0px;
  height: 50.11px;
  width: 100%;
  margin: 0 auto;
  border-radius: 3.20867px 3.20867px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12.2304px;
    color: #f8f9fa;
  }

  button {
    font-weight: 600;
    font-size: 12.8347px;
    color: #868e96;
    border: none;
    width: 20px;
    background: transparent;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.772px;
    color: #f8f9fa;
    margin-bottom: 4px;
    padding: 2px;
  }

  .errorMessage {
    margin-top: 1px;
    margin-bottom: 2px;
    font-size: 12px;
    color: white;
  }

`;

export const Input = styled.input`
  height: 38.5px;
  background: #343b41;
  border: 0.9772px solid #f8f9fa;
  border-radius: 3.20867px;
  padding-left: 10px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  color: #f8f9fa;
  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    color: #868e96;
  }
  :focus {
    border: 0.9772px solid #f8f9fa;
  }
`;

export const Select = styled.select`
  height: 38.5px;
  background: #343b41;
  border: 0.9772px solid #f8f9fa;
  border-radius: 3.20867px;
  padding-left: 10px;
  border: none;
  outline: none;
  color: #f8f9fa;
  cursor: pointer;
  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    color: #868e96;
  }
  :focus {
    border: 0.9772px solid #f8f9fa;
  }
`;
export const ButtonAdd = styled.button`
  height: 38.5px;
  background: #ff577f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.8347px;
  color: #ffffff;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  margin-top: 30px;
`;

export const ErrorModal = styled.span`
  color: #ff577f;
  font-size: 11px;
  display: block;
  margin: 0 auto;
  margin-left: 0px;
  margin-top: -15px;
  margin-bottom: 10px;
`;

export const ErrorModalTwo = styled.span`
  color: #ff577f;
  font-size: 11px;
  display: block;
  margin: 0 auto;
  margin-left: 0px;
  margin-top: 4px;
  margin-bottom: -18px;
`;
