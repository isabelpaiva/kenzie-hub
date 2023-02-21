import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import * as yup from "yup";
import {
  BtnDelete,
  BtnSave,
  DivBtn,
  DivEdit,
  Div,
  Form,
  Input,
  Container,
  DivModal,
  Button,
  Select,
} from "./style";
import { UserContext } from "../../contexts/UserContext";


export const ModalEditTech = () => {
   
   const { updateTech, removeTech, idParam } = useContext(TechContext)
   const { state, skill, setModalEdit } = useContext(UserContext)
   const { register, handleSubmit } = useForm();

  return (
    <Container>
      <DivModal>
        <Div>
          <DivEdit>
            <h4>Editar Tecnologia</h4>
            <Button onClick={() => setModalEdit(false)}>X</Button>
          </DivEdit>
        </Div>
        <Form onSubmit={handleSubmit(updateTech)}>
          <label htmlFor="name_project">Nome do projeto</label>
          <Input placeholder={state} disabled/>
          <label htmlFor="status">Status</label>
          <Select {...register("status")}>
            <option value={skill} required hidden>{skill}</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <DivBtn>
            <BtnSave id={idParam} type="submit">Salvar Alterações</BtnSave>
            <BtnDelete id={idParam} onClick={removeTech}> Remover </BtnDelete>
          </DivBtn>
        </Form>
      </DivModal>
    </Container>
  );
};

export default ModalEditTech;
