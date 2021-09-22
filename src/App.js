import "./App.css";
import { Header } from "./Components/Header";
import { MovieCard } from "./Components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    


    </BrowserRouter>
  );
}

export default App;
