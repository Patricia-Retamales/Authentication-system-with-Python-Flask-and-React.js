import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.permiso);
  let navigate = useNavigate();

  function logout() {
    actions.logout();
    navigate("../login", { replace: true });
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="ml-auto">
          {store.permiso ? (
            <button className="btn btn-danger ms-s" onClick={() => logout()}>
              Cerrar Sesion
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};
