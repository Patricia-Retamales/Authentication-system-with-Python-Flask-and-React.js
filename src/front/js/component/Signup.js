import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [errormensaje, setErrormensaje] = useState("");
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento.target[0].value);
    console.log(evento.target[1].value);
    const correo = evento.target[0].value;
    const pass = evento.target[1].value;
    const passrepetida = evento.target[2].value;
    if (pass !== passrepetida) {
      console.log("entro aca ");
      setErrormensaje("las contraseñas tienen que ser iguales");
    } else {
      actions.registraFuncion(correo, pass);
      navigate("../login", { replace: true });
    }
  };
  console.log("mensaje", errormensaje);

  return (
    <div>
      <h1 className="titulo-s">Ingrese sus datos para ser registrado</h1>
      <div className="Signup">
        <form onSubmit={handleSubmit}>
          <input placeholder="Email" />
          <input placeholder="Contraseña" />
          <input placeholder="Repetir Contraseña" />
          <button>Enviar</button>
          <h4>{errormensaje}</h4>
        </form>
      </div>
    </div>
  );
};
