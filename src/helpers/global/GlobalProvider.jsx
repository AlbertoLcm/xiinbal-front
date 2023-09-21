import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../api/instance";

const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);

  const planSelectedSaved = localStorage.getItem("planSelected");
  const [planSelected, setPlanSelected] = useState(
    planSelectedSaved ? JSON.parse(planSelectedSaved) : []
  );

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const selectPlan = (plan) => {
    setPlanSelected(plan);
  };

  useEffect(() => {
    localStorage.setItem("planSelected", JSON.stringify(planSelected));
  }, [planSelected]);
  
  const login = async ({ email, password, fromLocation, setErrors }) => {
    try {
      const response = await instance.post("/auth/login", {
        email,
        password,
      });
      const user = response.data.data.user;
      setUser(user);
      localStorage.setItem("token", response.data.data.token);
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.data.token}`;
      if (fromLocation) return navigate(fromLocation);
      alert("Bienvenido", `Hola ${user.name}`);
      return navigate("/");
    } catch (error) {
        alert(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    instance.defaults.headers.common["Authorization"] = null;
    setUser(null);
    navigate("/");
  };

  const signup = async ({ email, password, name, edad }) => {
    try {
      const response = await instance.post("/auth/signup", {
        email,
        password,
        name,
        edad,
      });
      const user = response.data.data.user;
      setUser(user);
      localStorage.setItem("token", response.data.data.token);
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.data.token}`;
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const isLogin = () => !!user;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      instance
        .get("/auth/profile")
        .then((response) => setUser(response.data.data))
        .finally(() => setLoading(false));
    }
  }, []);

  const contextValue = {
    user,
    login,
    logout,
    signup,
    isLogin,
    loading,
    planSelected,
    selectPlan,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
