import React from 'react';
import { Outlet , Link} from "react-router-dom";

function Home() {
  return (
    <div  align="center" className="container">
      <h1>Bienvenidos !!! </h1>

      <nav >
        <Link to="Formulario">Formulario</Link> |{" "}
        <Link to="GetUsers">Usuarios en Tabla</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;