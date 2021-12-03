import "./App.css";
import ProductDashboard from "./layouts/ProductDashboard";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <ProductDashboard />
      </Container>
      <Outlet />
    </div>
  );
}

export default App;
