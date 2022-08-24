import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento.target[0].value);
    console.log(evento.target[1].value);
    const correo = evento.target[0].value;
    const pass = evento.target[1].value;
    actions.registraFuncion(correo, pass);
    navigate("../login", { replace: true });
  };

  return (
    <div>
      <h1 className="titulo-s">Ingrese sus datos para ser registrado</h1>
      <div className="Signup">
        <form onSubmit={handleSubmit}>
          <input placeholder="Email" />
          <input placeholder="Contraseña" />
          <input placeholder="Repetir Contraseña" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};
