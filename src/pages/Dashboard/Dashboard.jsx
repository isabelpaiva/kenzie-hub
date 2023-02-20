import React from "react";
import { Container, DashboardDiv, UserInfos, MainDash } from "./styles";
import { UserContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";
import ModalAddTech from "../../components/ModalAddTech";

export const Dashboard = () => {
  const { user, clearLocalStorage, modalOpen, setModalOpen } =
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
        {modalOpen ? <ModalAddTech /> : null}
    </Container>
  );
};

export default Dashboard;
