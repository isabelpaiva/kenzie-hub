import React, { useEffect, useState } from "react";
import { LoginSection, Title, LoginForm } from "./style";
import { useForm } from "react-hook-form";
import {
  Link,
  Navigate,
  useInRouterContext,
  useNavigate,
} from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";

const schema = yup
  .object({
    email: yup.string().email().required("O email é obrigatório."),
    password: yup.string().required("Senha obrigatória."),
  })
  .required();

export const Login = () => {

  const {onSubmitLogin, requisition} = useContext(UserContext)

  const {  register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema)});

  return (
    <>
      <LoginSection>
        <Title>Kenzie Hub</Title>
        <LoginForm onSubmit={handleSubmit(onSubmitLogin)}>
          <h2>Login</h2>

          <Input
            label="E-mail"
            className="inputEmail"
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu e-mail"
            autoComplete="off"
            errors={errors.email?.message}
            {...register("email")}
          ></Input>

          <Input
            className="inputPass"
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="Insira sua senha"
            errors={errors.password?.message}
            {...register("password")}
          ></Input>
          <button className="loginButton">Entrar</button>
          <p className="notAccountYet">Ainda não possui uma conta?</p>
          <Link to="/register">
            <button className="registerButton">Cadastre-se</button>
          </Link>
        </LoginForm>
      </LoginSection>
    </>
  );
};

export default Login;