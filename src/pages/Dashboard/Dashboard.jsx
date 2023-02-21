import React, { useState } from "react";
import { Container, DashboardDiv, UserInfos, MainDash } from "./styles";
import { UserContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";
import ModalAddTech from "../../components/ModalAddTech";
import { TechContext } from "../../contexts/TechContext";


export const Dashboard = () => {
  const { user, clearLocalStorage, modalOpen, setModalOpen } =
    useContext(UserContext);
  const {techList} = useContext(TechContext);

  return (
    <Container>
      <DashboardDiv>
        <section>
          <h1>Kenzie Hub</h1>
          <button onClick={clearLocalStorage}>Sair</button>
        </section>
      </DashboardDiv>
      <UserInfos>
        <h2> Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </UserInfos>
      <MainDash>
        <p>Tecnologias</p>
        <button onClick={() => setModalOpen(true)}>+</button>
      </MainDash>
      {
        user.techs?.length ? 
        (
          <ul>
           { user.techs.map((tech) => (
              <li>{tech.name}</li>
            ))}
          </ul>
        )
        : 
        <></>
      }
    
        {modalOpen ? <ModalAddTech /> : null}
    </Container>
  );
};

export default Dashboard;
