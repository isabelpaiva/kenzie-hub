import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TechContext } from "../../contexts/TechContext.jsx";
import {
  Modal,
  ModalContainer,
  Div,
  DivFlex,
  Form,
  Input,
  Select,
  ButtonAdd,
} from "./style";

export const ModalAddTech = () => {
  const { setModalOpen } = useContext(UserContext);
  const { addTech } = useContext(TechContext);
  
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalContainer>
      <Modal>
        <Div>
          <DivFlex>
            <h4>Cadastrar Tecnologia</h4>
            <button onClick={() => setModalOpen(false)}>X</button>
          </DivFlex>
        </Div>

        <Form onSubmit={handleSubmit(addTech)}>
          <label>Nome</label>
          <p className="errorMessage"> {errors.title?.message}</p>
          <Input
            placeholder="Digite uma tecnologia..."
            {...register("title")}
          />
          <label>Selecionar status</label>
          <Select {...register("status")}>
            <option value="" required >
              Selecione um nível
            </option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <ButtonAdd type="submit">Cadastrar Tecnologia</ButtonAdd>
        </Form>
      </Modal>
    </ModalContainer>
  );
};

export default ModalAddTech;
