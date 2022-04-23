import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {  Link } from "react-router-dom";


function Formulario() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('error');
    }else{
      console.log('ok');
        createUser({
          variables: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          },
        });
    
        if (error) {
          console.log(error);
        }else{
          console.log( 'usuario creado' );          
        }
     }
    setValidated(true);
  };
  
  return (
    <div  className="container">

        <nav  align="center" >
          <Link to="/">Home</Link> {" "}
        </nav>
     

  
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control 
          className="class-form"
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required 
          />
        <Form.Label>Apellido:</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Apellido"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <Form.Label>Email:</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required 
        />
    
        <Form.Label>Password:</Form.Label>
        <Form.Control 
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required 
        />

        </Form.Group>

        <Button  variant="primary" type="submit" > Crear Usuario</Button >

      </Form>

    </div>
  );
}

export default Formulario;
