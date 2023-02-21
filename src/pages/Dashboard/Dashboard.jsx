<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8
import { Container, DashboardDiv, UserInfos, MainDash } from "./styles";
import { UserContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";
import ModalAddTech from "../../components/ModalAddTech";
<<<<<<< HEAD
import { TechContext } from "../../contexts/TechContext";

=======
>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8

export const Dashboard = () => {
  const { user, clearLocalStorage, modalOpen, setModalOpen } =
    useContext(UserContext);
<<<<<<< HEAD
  const {techList} = useContext(TechContext);
=======
>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8

  return (
    <Container>
      <DashboardDiv>
        <section>
          <h1>Kenzie Hub</h1>
          <button onClick={clearLocalStorage}>Sair</button>
        </section>
      </DashboardDiv>
<<<<<<< HEAD
=======

>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8
      <UserInfos>
        <h2> Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </UserInfos>
      <MainDash>
        <p>Tecnologias</p>
        <button onClick={() => setModalOpen(true)}>+</button>
      </MainDash>
<<<<<<< HEAD
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
    
=======
>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8
        {modalOpen ? <ModalAddTech /> : null}
    </Container>
  );
};

export default Dashboard;
