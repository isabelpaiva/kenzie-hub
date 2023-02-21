import { useState, useContext, createContext, useEffect } from "react";
import api from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState();
<<<<<<< HEAD
  const token = localStorage.getItem("@TOKEN");

  const addTech =  async (data) => {
    try{
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
    } catch(err) {
      
    }
  };
=======

  const techListAPI = user && user.techs;

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    setTechList(techListAPI);
  }, [techListAPI]);

  async function addTech(data) {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.statusText);
      setTechList([...techList, response.data]);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8

  async function removeTech(id) {
    try {
      const response = await api.delete("/users/techs/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.statusText);

      const filteredTechList = techList.filter((tech) => tech.id !== id);
      setTechList(filteredTechList);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  async function updateTech(id, data) {
    try {
      const response = await api.put("/users/techs/" + id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.statusText);

      const newStatus = techList.map((tech) => {
        if (tech.id === id) {
          return { ...tech, status: data.status };
        } else {
          return { ...tech };
        }
      });

      setTechList(newStatus);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
<<<<<<< HEAD
    <TechContext.Provider value={{ addTech, updateTech, removeTech, techList }}>
=======
    <TechContext.Provider value={{ addTech, updateTech, removeTech, techList}}>
>>>>>>> 5b6ccf944b64a6a0b70647278025800d27a445f8
      {children}
    </TechContext.Provider>
  );
};
