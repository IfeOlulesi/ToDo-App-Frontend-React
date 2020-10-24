import React from "react";
import "./styles/App.css";
import { Container } from "./styles/Styles";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <Container className="App">
      <AppBar />
    </Container>
  );
};

export default App;
