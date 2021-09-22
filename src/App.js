import logo from "./logo.svg";
import "./App.css";
import { MyNavBar } from "./Components/Header";
import { MovieCard } from "./Components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNavBar />

      <Container>
        <MovieCard />
      </Container>
    </div>
  );
}

export default App;
