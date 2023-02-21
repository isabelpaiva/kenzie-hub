import styled from "styled-components";

export const Container = styled.div`
 @media (min-width: 700px) {
   max-width: 1200px;
   margin: 0 auto;
  }
`

export const DashboardDiv = styled.div`
  margin: 0 auto;

  section {
    justify-content: space-between;
    display: flex;
    padding: 21px;
    border-bottom: 2px solid var(--grey-3);

   
  }
  button {
    background-color: var(--grey-3);
    padding: 0px 16.2426px;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }
  h1 {
    color: var(--pink-primary);
  }
`;

export const UserInfos = styled.div`
  color: white;
  font-size: 18px;
  margin-top: 15px;
  padding: 21px;
  border-bottom: 2px solid var(--grey-3);


  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    padding-top: 12px;
    color: var(--grey-1);
  }
`;

export const MainDash = styled.div`
  color: white;
  font-weight: bold;
  margin-top: 15px;
  padding: 21px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
    margin-bottom: 15px;
  }

  small {
    font-size: 16px;
    font-weight: lighter;
  }

  button{
    background-color: var( --grey-3);
    color: #ffff;
    border: none;
    font-weight: bold;
    padding: 8px;
    cursor: pointer;
  }

  `;

export const EmptyDiv = styled.div`
  padding: 21px;
h3{
  color: white;
  font-size: 14px;
  font-weight: lighter;
}


`