import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento.target[0].value);
    console.log(evento.target[1].value);
    const correo = evento.target[0].value;
    const pass = evento.target[1].value;
    actions.iniciarSesionFuncion(correo, pass);
    navigate("../private", { replace: true });
  };
  return (
    <div>
      <h1 className="titulo-l">ingrese sus datos de registro </h1>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <input placeholder="Email" />
          <input placeholder="Contraseña" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};
