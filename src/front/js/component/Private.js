import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const nombre = sessionStorage.getItem("nombre");

  useEffect(() => {
    setTimeout(() => {
      actions.privateFuncion();
    }, 500);
  }, []);
  setTimeout(() => {
    if (!store.permiso) {
      navigate("../login", { replace: true });
    }
  }, 1000);

  return (
    <div className="container">
      <h1 className="text-center">
        {nombre}Bienvenidos(a) a tu pagina privada
      </h1>
    </div>
  );
};
