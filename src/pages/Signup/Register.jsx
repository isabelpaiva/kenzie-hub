import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { StyledRegister, StyledSection } from "./styles";
import Input from "../../components/Input";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório."),
    email: yup.string().email().required("O email é obrigatório."),
    bio: yup.string().required("Uma biografia é obrigatória."),
    contact: yup.string().required("Cadastre algum tipo de contato."),
    course_module: yup.string().required(),
    password: yup
      .string()
      .matches(/.{8}/, "Deve conter no mínimo 8 caracteres.")
      .required("Senha Obrigatoria."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "As duas senhas devem ser iguais.")
      .required("Confirmação de senha é obrigatória"),
  })
  .required();

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    delete data.passwordConfirmation;
    try {
      await api.post("/users", data);
      navigate("/");
      console.log(data);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
      reset();
    }
  };

  return (
    <>
      <StyledRegister>
        <h2>Kenzie Hub</h2>

        <Link to="/">
          <button>Voltar</button>
        </Link>
      </StyledRegister>
      <StyledSection className="animate__animated animate__fadeInLeft">
        <div>
          <section>
            <h3>Crie sua conta</h3>
            <p>Rápido e grátis.</p>
          </section>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              type="text"
              label="Nome"
              placeholder="Digite aqui seu nome"
              errors={errors.name?.message}
              {...register("name")}
            ></Input>

            <Input
              id="email"
              label="Email"
              name="email"
              type="text"
              placeholder="Digite aqui seu email"
              errors={errors.email?.message}
              {...register("email")}
            ></Input>

            <Input
              id="password"
              label="Senha"
              type="password"
              name="password"
              placeholder="Digite aqui sua senha"
              errors={errors.password?.message}
              {...register("password")}
            ></Input>

            <Input
              id="password"
              label="Confirmar senha"
              type="password"
              name="passwordConfirmation"
              placeholder="Confirme sua senha"
              errors={errors.passwordConfirmation?.message}
              {...register("passwordConfirmation")}
            ></Input>

            <Input
              id="bio"
              label="Bio"
              placeholder="Digite aqui sua biografia"
              name="bio"
              type="text"
              errors={errors.bio?.message}
              {...register("bio")}
            ></Input>

            <Input
              type="text"
              name="contact"
              id="contact"
              placeholder="Opção de contato"
              label="Contato"
              {...register('contact')}
              errors={errors.contact?.message}
            ></Input>

            <label htmlFor="module">Selecionar módulo</label>
            <select id="module" {...register("course_module")}>
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
            </select>
            <p className="errorMessage">{errors.module?.message}</p>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </StyledSection>
    </>
  );
};

export default Signup;
