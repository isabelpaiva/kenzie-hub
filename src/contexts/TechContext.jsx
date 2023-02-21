import { useState, useContext, createContext, useEffect } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [idParam, setIdParam] = useState("")
  const token = localStorage.getItem("@TOKEN");
  const { modalOpen, setUser, modalEdit, setModalOpen, setModalEdit } = useContext(UserContext) 
  
  useEffect(() => {
    async function getTechs()  {
      try { 
         const response = await api.get("profile", {
          headers: { 
            Authorization: `Bearer ${token}`
          }
         })
        setUser(response.data)
      } catch (err) {
         console.log(err)
      }
    }
    getTechs()
  }, [token, modalOpen, modalEdit])
  
  async function addTech(data) {
    try{
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setModalOpen(false)
      console.log(response.data)
    } catch(err) {
      
    }
  };

  async function updateTech(data) {

    try {
      await api.put(`users/techs/${idParam}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setModalEdit(false)
    } catch (err) {
      
    }

  } 

  async function removeTech(e) {
    e.preventDefault();
    try {
       await api.delete(`users/techs/${idParam}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
       })
       console.log('jiowfdnewjfnwl')
       setModalEdit(false)
    } catch (err) {

    }

  }


  return (
    <TechContext.Provider value={{ addTech, updateTech, removeTech, idParam, setIdParam }}>
      {children}
    </TechContext.Provider>
  );
};
