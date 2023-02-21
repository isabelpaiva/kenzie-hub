import React from "react";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { Li, Container, ContainerTechs } from "./style";

const Card = ({ id, status, title }) => {
  const { setIdParam } = useContext(TechContext);
  const { setModalEdit, setState, setSkill } = useContext(UserContext);

  function recoveryIdUser() {
    setIdParam(id);
    setModalEdit(true);
    setState(title);
    setSkill(status);
  }

  return (
    <ContainerTechs>

    <Container>
      <Li onClick={recoveryIdUser} id={id}>
        <h1>{title}</h1>
        <p>{status}</p>
      </Li>
    </Container>
    </ContainerTechs>
  );
};

export default Card;
