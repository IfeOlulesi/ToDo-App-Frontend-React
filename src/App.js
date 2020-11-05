import React from "react";
import { Container } from "./styles/Styles";
import "./styles/App.css";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <Container className="App">
     <AppBar />
    </Container>
  );
};

export default App;
