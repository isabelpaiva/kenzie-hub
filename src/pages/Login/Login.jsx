import React, { useEffect, useState } from "react";
import { LoginSection, Title, LoginForm } from "./style";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";

const schema = yup
  .object({
    email: yup.string().email().required("O email é obrigatório."),
    password: yup.string().required("Senha obrigatória."),
  })
  .required();

export const Login = () => {
  const [userLogged, setUserLogged] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    api
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        setTimeout(() => {
          navigate("/");
        }, 1000),
          toast.success("Login realizado com sucesso!");
      })
      .catch((error) => {
        toast.error("Email ou senha incorretos");
      });
  };

  useEffect(() => {
    const requisition = (data) => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        api
          .get("/profile", data)
          .then((response) => {
            setUserLogged(response.data);
            navigate("/dashboard");
          })
          .catch((error) => toast.error("Algo deu errado!"));
      }
    };

    requisition();
  });

  return (
    <>
      <LoginSection>
        <Title>Kenzie Hub</Title>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
