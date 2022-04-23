import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import Formulario from "./Components/Formulario";
import Home from "./Components/Home"
import {Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App(){

  return (
    <div>

    <ApolloProvider client={client}>

      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Formulario" element={<Formulario />} />
            <Route path="/GetUsers"    element={<GetUsers />} />
          </Routes>
      </Router>
    </ApolloProvider>

    </div>
    
  );
};


export default App;
