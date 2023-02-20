import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
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

  return (
    <ModalContainer>
      <Modal>
        <Div>
          <DivFlex>
            <h4>Cadastrar Tecnologia</h4>
            <button onClick={() => setModalOpen(false)}>X</button>
          </DivFlex>
        </Div>

        <Form>
          <label>Nome</label>
          <Input placeholder="Digite uma tecnologia..." />

          <label>Selecionar status</label>
          <Select>
            <option value="" required hidden>
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
