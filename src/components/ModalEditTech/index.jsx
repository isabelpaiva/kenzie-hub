import React from "react";
import { useContext } from "react";
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

export const ModalEditTech = () => {


  return (
    <Container>
      <DivModal>
        <Div>
          <DivEdit>
            <h4>Editar Tecnologia</h4>
            <Button>X</Button>
          </DivEdit>
        </Div>
        <Form>
          <label>Nome do projeto</label>
          <Input/>
          <label>Status</label>
          <Select>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <DivBtn>
            <BtnSave type="submit">Salvar Alterações</BtnSave>
            <BtnDelete type="submit"> Remover </BtnDelete>
          </DivBtn>
        </Form>
      </DivModal>
    </Container>
  );
};

export default ModalEditTech;
