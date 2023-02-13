import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../../services/api";
import {Container, DashboardDiv, UserInfos, MainDash} from "./styles";

export const Dashboard = () => {
  const [userLogged, setUserLogged] = useState([]);
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const validateUser = () => {
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .get("/profile")
        .then((response) => {
          setUserLogged(response.data);
        })
        .catch((error) => navigate("/"));
    };

    validateUser();
  }, []);

  return (
    <Container>
    <DashboardDiv>
      <section>
        <h1>Kenzie Hub</h1>
        <button onClick={clearLocalStorage}>Sair</button>
      </section>
    </DashboardDiv>

      <UserInfos>
        <h2> Olá, {userLogged.name}</h2>
        <p>{userLogged.course_module}</p>
      </UserInfos>
      <MainDash>
        <p>Que pena! estamos em desenvolvimento :(</p>
        <small>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </small>
      </MainDash>

    </Container>
  );
};

export default Dashboard;
