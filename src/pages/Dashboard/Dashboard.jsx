
import React, { useState } from "react";

import { Container, DashboardDiv, UserInfos, MainDash } from "./styles";
import { UserContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";
import ModalAddTech from "../../components/ModalAddTech";
import Card from "../../components/Card";
import ModalEditTech from "../../components/ModalEditTech";

export const Dashboard = () => {
  const { user, clearLocalStorage, modalOpen, setModalOpen, modalEdit } =
    useContext(UserContext);

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
             <Card key={tech.id} id={tech.id} status={tech.status} title={tech.title}/>
            ))}
          </ul>
        )
        : 
        <></>
      }

        {modalOpen ? <ModalAddTech /> : null}
        {modalEdit ? <ModalEditTech /> : null}
    </Container>
  );
};

export default Dashboard;
