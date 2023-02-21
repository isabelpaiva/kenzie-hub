import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
<<<<<<< HEAD
  console.log(user)
=======
>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  
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
    }
  };

  const onSubmitLogin = async (data) => {
    api
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        setUser(response.data);

        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
      })
      .catch((error) => {
        toast.error("Email ou senha incorretos");
      });
  };

  useEffect(() => {
    const requisition = (data) => {
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        api
          .get("/profile", data)
          .then((response) => {
            setUser(response.data);
            navigate("/dashboard");
          })
          .catch((error) => 
          toast.error("Algo deu errado!"));
      }
    };

    requisition();
  } , [token]);


  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/");
  };


  useEffect(() => {
    const teste = () => {
    
      if (!token) {
        navigate('/')
      }
    };

    teste();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, onSubmit, onSubmitLogin, clearLocalStorage, modalOpen, setModalOpen }}>
      {children}
    </UserContext.Provider>
  );
};

