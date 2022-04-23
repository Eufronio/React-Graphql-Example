import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import DataTable from "react-data-table-component";
import {  Link } from "react-router-dom";

function nextPath(path) {
  this.props.history.push(path);
}

function GetUsers() {

  const {error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  
  function Tabla(props) {

      const columnas  = [
        {
          name:"ID",
          selector: row => `${ row.id }` ,         
          sortable:true
        },
        {
          name:"NOMBRE",
          selector:  row => `${ row.firstName }` ,
          sortable:true
        },
        {
          name:"APELLIDO",
          selector:  row => `${ row.lastName }` ,
          sortable:true
        },
        {
          name:"CORREO",
          selector:  row => `${ row.email }` ,
          sortable:true
        },
        {
          name:"PASS",
          selector:  row => `${ row.password }` ,
          sortable:true
        }
      ];
    
      const paginacionOpciones = {
        rowsPerPageText:"Filas por paginas ",
        rangeSeparatorText:"de",
        selectAllRowsItem : true,
        selectAllRowsItemText:  "Todos" 

      }

      return  <DataTable 
            columns = {columnas}
            data={ users  }
            title= "Datos de usuarios!"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
            selectableRows
            />
      ;
    }

  return (
    <div  className="container" ><br/>
         <nav  align="center">
          <Link to="/">Home</Link> {" "}
        </nav>

        <h2>Lista de Usuarios.</h2> 
        <Tabla  />
    </div>
  );
}

export default GetUsers;
